import EditText1 from "../FormComponents/edit_text_1";

const ClientEditProfileInfo1 = ({
    oldInfo, oldInfo2 = null, oldInfo3 = null,
    newInfo, newInfo2 = null, newInfo3 = null, 
    setNewInfo, setNewInfo2 = null, setNewInfo3 = null,

    isEditInfo, setEditInfo,
    title,
    label, label2 = null, label3 = null
    }) => {
    return(
        <div className="d-flex flex-direction-y w-100">
            <div className="d-flex text-m3 justify-content-between">
                {title} 
                <div className="text-m2 text-decoration-underline cursor-pointer" onClick={() => setEditInfo(!isEditInfo)}>{isEditInfo ? 'Cancel' : 'Edit'}</div>
            </div>

            <div className={`text-m1 color-black2 ${isEditInfo ? 'd-none' : ''}`}>{oldInfo} {oldInfo2} {oldInfo3}</div>
            <div className={`d-flex gap3 ${isEditInfo ? '' : 'd-none'}`}>
                <EditText1
                    width={"w-25"}
                    label={label} 
                    value={newInfo} 
                    setFieldValue={setNewInfo}
                    required={true}/>

                {oldInfo2 && (
                    <EditText1
                        width={"w-25"}
                        label={label2} 
                        value={newInfo2} 
                        setFieldValue={setNewInfo2}
                        required={false}/>
                )}

                {oldInfo3 && (
                    <EditText1
                        width={"w-25"}
                        label={label3} 
                        value={newInfo3} 
                        setFieldValue={setNewInfo3}
                        required={true}/>
                )}
                
            </div>
            <button className={`primary-btn-black1 mar-top-2 align-self-start ${isEditInfo ? '' : 'd-none'}`}>Save</button>
        </div>
    );
}

export default ClientEditProfileInfo1;