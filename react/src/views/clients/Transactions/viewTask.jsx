import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchAllTaskFilesById, fetchTaskFullInfoById } from "../../../Services/GeneralTransactionService";
import * as Icon from "react-bootstrap-icons";
import "../../../assets/css/view_transaction.css";
import "../../../assets/css/transaction_view_task.css";
import axiosClient from "../../../axios-client";
import { notify } from "../../../assets/js/utils";
import { useModal } from "../../../contexts/ModalContext";

export default function ClientViewTask() {
    const {taskId} = useParams();
    const {showModal} = useModal();
    const [task, setTask] = useState(null);

    const [addFileActive, setAddFileActive] = useState(false);
    const [files, setFiles] = useState(null);
    const [tempFiles, setTempFiles] = useState([]);


    useEffect(() => {
        const getAll = async() => {
            const [taskDb, filesDb] = await Promise.all([
                fetchTaskFullInfoById(taskId),
                fetchAllTaskFilesById(taskId)
            ]);

            setTask(taskDb);
            setFiles(filesDb);
        }

        getAll();
    }, []);



    /**
     * TempFiles Handlers
     */
    const deleteTempFile = (index) => {
        const updatedTempFiles = [...tempFiles];
        updatedTempFiles.splice(index, 1);
        setTempFiles(updatedTempFiles);        
    }

    const handleUploadClick = () => {
        document.getElementById('fileInput').click();
    };

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        const filteredFiles = files.filter(file => 
            file.type.startsWith('image/') || file.type === 'application/pdf'
        );
        const updatedPhotos = [...tempFiles, ...filteredFiles];
        setTempFiles(updatedPhotos);
    };

    const handleSaveTempFile = () => {

        const formData = new FormData();
        formData.append('taskId', task.id);

        tempFiles.forEach((tempFile, index) => {
            formData.append(`files[${index}]`, tempFile);
        });

        tempFiles.forEach((tempFile, index) => {
            formData.append(`oldFileName[${index}]`, tempFile.name);
        });

        tempFiles.forEach((tempFile, index) => {
            formData.append(`fileTypes[${index}]`, tempFile.type);
        });

        axiosClient.post('/upload-task-files', formData)
        .then(({data}) => {
            if(data.status === 200) {
                setFiles(data.files);
                setTempFiles([]);
                setAddFileActive(prev => !prev);
            } 
            notify('default', data.message, 'bottom-left', 3000);
        }).catch(error => console.error(error));

        // setFiles(prev => [
        //     ...prev,  
        //     ...tempFiles.map(tempFile => ({ old_filename: tempFile.name, type: tempFile.type, file: tempFile }))
        // ]);
    };





    /**
     * Files Handlers
     */
    const handleRemoveFileClick = (id, oldFilename) => {
        showModal('GeneralConfirmationModal1', 
            {
                title: `Remove this file from task ${oldFilename}`, 
                note: `${oldFilename} will be deleted permanently.`, 
                positiveBtnText: "Remove file", 
                handlePositiveBtnClick: () => handeRemoveFilePost(id),
            }
        )
    }
    const handeRemoveFilePost = (id) => {
        const formData = new FormData();
        formData.append('fileId', id);

        axiosClient.post('/del-task-file', formData)
        .then(({data}) => {
            if(data.status === 200) {
                setFiles(prev => prev.filter(file => file.id !== id));
            }
            notify('default', data.message, 'bottom-left', 3000);
        }).catch(error => console.error(error));
    }





    /**
     * Turn In Handler
     */
    const handleTurnInClick = () => {
        showModal('GeneralConfirmationModal1', 
            {
                title: `Turn in this task?`, 
                note: `This task will become pending for checking.`, 
                positiveBtnText: "Turn in", 
                handlePositiveBtnClick: () => handleChangeStatusPost("pending"),
            }
        )
    }

    const handleUnsubmitClick = () => {
        showModal('GeneralConfirmationModal1', 
            {
                title: `Unsubmit this task?`, 
                note: `This task will be unsubmitted and you can add some files again.`, 
                positiveBtnText: "Unsubmit", 
                handlePositiveBtnClick: () => handleChangeStatusPost("no-action"),
            }
        )
    }

    const handleChangeStatusPost = (newStatus) => {
        const formData = new FormData();
        formData.append('taskId', task.id);
        formData.append('newStatus', newStatus);

        axiosClient.post('/update-transaction-task-status', formData)
        .then(({data}) => {
            if(data.status === 200) {
                setTask(prev => ({
                    ...prev,  // Spread the previous task object to retain other properties
                    status: newStatus  // Update the status field to 'pending'
                }));
            }
            notify('default', data.message, 'bottom-left', 3000);
        }).catch(error => console.error(error));
    }

    



    /**
     * Render Components
     */
    return(
        <div className="content1 position-relative">
            {task && files
            ? (
                <>
                    <div className="d-flex justify-content-start mar-bottom-1">
                        <Link to={`/BDDRClient/ViewTransaction/${task.transaction}`} className="d-flex gap3 align-items-center text-l3 color-black1 text-decoration-none cursor-pointer">
                            <Icon.ChevronLeft/>
                            Back
                        </Link>                
                    </div>

                    <div className="text-l1 fw-bold color-black2 mar-bottom-l1">Task</div>

                    <div className="d-flex gap2 mar-bottom-3 align-items-start">
                        <div className="text-l1 fw-bold color-black2">{task.requirement}</div>
                        <span className={`requirement-status-card ${task.status}`}>{task.status}</span>
                    </div>
                    <div className="text-m1 color-black2 mar-bottom-l2">{task.description}</div>



                    {/* Reject Reason */}
                    {task.status === 'rejected' && (
                        <>
                            <div className="mar-bottom-3 text-m1 fw-bold">Reject reason:</div>
                            <div className="mar-bottom-l2 text-m2">{task.reject_reason}</div>
                        </>
                    )}



                    <div className="hr-line1 mar-bottom-l2"></div>



                    {/* Render Files */}
                    {files.length > 0 && !addFileActive && (
                        <>
                            <div className="text-l3 mar-bottom-2">Uploaded files</div>
                            <div className="d-flex flex-direction-y gap3 mar-bottom-l1">
                                {files?.map((file, index) => (
                                    <div key={index} className="task-file-cont">
                                        {file.file_type === 'application/pdf' 
                                        ? <div className="task-file-img"><img src={`/src/assets/media/icons/pdf.svg`} className="task-file-img-pdf"/></div> 
                                        : <div className="task-file-img"><img src={`/src/assets/media/task_files/${file.filename}`} className="task-file-img-img"/></div>}
                                        <div className="flex-grow-1">
                                            <div className="task-file-name">{file.old_filename}</div>
                                        </div>

                                        {(task.status === 'no-action' || task.status === 'rejected') && (
                                            <div className="task-file-x">
                                                <Icon.XLg onClick={() => handleRemoveFileClick(file.id, file.old_filename)} className="cursor-pointer text-l3"/>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </>
                    )}



                    {/* Render TempFiles */}
                    {tempFiles.length > 0 && addFileActive && (
                        <div className="d-flex flex-direction-y gap3 mar-bottom-1">
                            {tempFiles?.map((tempFile, index) => (
                                <div key={index} className="task-file-cont">
                                    {tempFile.type === 'application/pdf' 
                                        ? <div className="task-file-img"><img src={`/src/assets/media/icons/pdf.svg`} className="task-file-img-pdf"/></div> 
                                        : <div className="task-file-img"><img src={URL.createObjectURL(tempFile)} className="task-file-img-img"/></div>}
                                    <div className="flex-grow-1">
                                        <div className="task-file-name">{tempFile.name}</div>
                                    </div>

                                    <div className="task-file-x">
                                        <Icon.XLg onClick={() => deleteTempFile(index)} className="cursor-pointer text-l3"/>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    


                    {/* Input box */}
                    {addFileActive && (
                        <div className="add-file-container mar-bottom-l3">
                            <div className="d-flex flex-direction-y gap4 justify-content-center h-100 align-items-center">
                                <Icon.Upload className="text-l3 cursor-pointer" onClick={handleUploadClick}/>
                                <div 
                                    className="text-m2 text-center text-decoration-underline cursor-pointer"
                                    onClick={handleUploadClick}
                                >
                                    upload file
                                </div>
                                <input 
                                    type="file" 
                                    id="fileInput"
                                    className='d-none'
                                    multiple 
                                    accept="image/*,application/pdf"
                                    onChange={handleFileChange}
                                />
                            </div>
                        </div>
                    )}

                    {/* Action btns */}
                    <div className="d-flex gap3">
                        {addFileActive && (task.status === 'no-action' || task.status === 'rejected') && (
                            <button 
                            disabled={tempFiles.length < 1}
                            className={`primary-btn-black1 d-flex align-items-center user-select-none gap4 ${tempFiles.length < 1 ? 'disabled' : ''}`} 
                            onClick={handleSaveTempFile}>
                                <Icon.Floppy/>
                                Save File
                            </button>
                        )}

                        {!addFileActive && (task.status === 'no-action' || task.status === 'rejected') && (
                            <div className="secondary-btn-black1 d-flex align-items-center user-select-none gap4" onClick={() => setAddFileActive(prev => !prev)}>
                                <Icon.Paperclip/>
                                Add File
                            </div>
                        )}

                        {addFileActive && (task.status === 'no-action' || task.status === 'rejected') && (
                            <div className="secondary-btn-black1 d-flex align-items-center user-select-none gap4" onClick={() => setAddFileActive(prev => !prev)}>
                                <Icon.XLg/>
                                Cancel
                            </div>
                        )}

                        
                        {!addFileActive && (task.status === 'no-action' || task.status === 'rejected')
                        && (
                            <button 
                            disabled={files.length < 1}
                            className={`primary-btn-black1 d-flex align-items-center user-select-none gap4 ${files.length > 0 ? '' : 'disabled'}`}
                            onClick={() => handleTurnInClick()}
                            >
                                <Icon.Send/> 
                                Turn in
                            </button>
                        )}

                        {!addFileActive && task.status === 'pending'
                        && (
                            <button 
                            disabled={files.length < 1}
                            className={`primary-btn-black1 d-flex align-items-center user-select-none gap4 ${files.length > 0 ? '' : 'disabled'}`}
                            onClick={() => handleUnsubmitClick()}
                            >
                                <Icon.XLg/> 
                                Unsubmit
                            </button>
                        )}
                        
                    </div>
                </>
            )
            : (
                <div className="text-l3 center-absolute-xy">Loading...</div>
            )}
            
        </div>
    );
}