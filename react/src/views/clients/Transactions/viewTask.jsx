import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchTaskFullInfoById } from "../../../Services/GeneralTransactionService";
import * as Icon from "react-bootstrap-icons";
import "../../../assets/css/view_transaction.css";

export default function ClientViewTask() {
    const {taskId} = useParams();
    const [task, setTask] = useState(null);


    useEffect(() => {
        const getAll = async() => {
            const [taskDb] = await Promise.all([
                fetchTaskFullInfoById(taskId)
            ]);

            setTask(taskDb);
        }

        getAll();
    }, []);


    return(
        <div className="content1 position-relative">
            {task
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
                    <div className="text-m1 color-black2 mar-bottom-l3">{task.description}</div>

                    <div className="d-flex">
                        <div className="secondary-btn-black1 d-flex align-items-center gap4"><Icon.Paperclip/> Add File</div>
                    </div>
                </>
            )
            : (
                <div className="text-l3 center-absolute-xy">Loading...</div>
            )}
            
        </div>
    );
}