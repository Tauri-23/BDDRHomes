import EditPhone1 from "../FormComponents/edit_phone_1";
import EditText1 from "../FormComponents/edit_text_1";

const ClientEditProfileInfo2 = ({
    oldInfo, oldInfo2 = null, oldInfo3 = null,
    newInfo, newInfo2 = null, newInfo3 = null, 
    setNewInfo, setNewInfo2 = null, setNewInfo3 = null,
    displayInput2, displayInput3,

    isEditInfo, setEditInfo,
    isSaveBtnActive,
    title,
    label, label2 = null, label3 = null,

    handleChangeInfoPost
    }) => {
    return(
        <div className="d-flex flex-direction-y w-100">
            <div className="d-flex text-m3 justify-content-between">
                {title} 
                <div className="text-m2 text-decoration-underline cursor-pointer user-select-none" onClick={() => setEditInfo(!isEditInfo)}>{isEditInfo ? 'Cancel' : 'Edit'}</div>
            </div>

            <div className={`text-m1 color-black2 ${isEditInfo ? 'd-none' : ''}`}>{oldInfo} {oldInfo2} {oldInfo3}</div>
            <div className={`d-flex gap3 ${isEditInfo ? '' : 'd-none'}`}>
                <EditPhone1
                    width={"w-25"}
                    label={label} 
                    value={newInfo} 
                    setFieldValue={setNewInfo}
                    required={true}/>

                {displayInput2 && (
                    <EditPhone1
                        width={"w-25"}
                        label={label2} 
                        value={newInfo2} 
                        setFieldValue={setNewInfo2}
                        required={false}/>
                )}

                {displayInput3 && (
                    <EditPhone1
                        width={"w-25"}
                        label={label3} 
                        value={newInfo3} 
                        setFieldValue={setNewInfo3}
                        required={true}/>
                )}
                
            </div>
            <button 
            disabled={!isSaveBtnActive}
            onClick={handleChangeInfoPost}
            className={`primary-btn-black1 mar-top-2 align-self-start ${isEditInfo ? '' : 'd-none'} ${isSaveBtnActive ? '' : 'disabled'}`}
            >Save</button>
        </div>
    );
}

export default ClientEditProfileInfo2;