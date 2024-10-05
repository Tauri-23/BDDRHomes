import { useEffect, useState } from "react";
import axiosClient from "../../axios-client";
import { notify } from "../../assets/js/utils";

const ClientEditProfilePreferedLoc = ({preferedLoc, locations, setPreferedLoc, clientId, isEditPrefLoc, setEditPrefLoc}) => {
    const [_preferedLoc, _setPreferedLoc] = useState(preferedLoc);

    const addRemovePrefLoc = (loc) => {
        if(_preferedLoc.length < 2 && _preferedLoc.some(prefLoc => prefLoc.province.id == loc.id)) {
            notify('default', 'Minimum prefered location is 1', 'bottom-left', 3000);
            return;
        }

        _setPreferedLoc(prev =>
            prev.some(prefLoc => prefLoc.province.id == loc.id)
                ? prev.filter(prefLoc => prefLoc.province.id !== loc.id)
                : [...prev, {id: 999999, province: loc, client: String(clientId)}]
        )

        const formData = new FormData();
        formData.append("clientId", clientId);
        formData.append("province", loc.id);

        axiosClient.post("/update-client-prefered-location", formData)
        .then(({data}) => {
            if(data.status === 200) {
                setPreferedLoc(prev =>
                    prev.some(prefLoc => prefLoc.province.id == loc.id)
                        ? prev.filter(prefLoc => prefLoc.province.id !== loc.id)
                        : [...prev, {id: data.prefLocid, province: loc, client: String(clientId)}]
                );

                notify("default", data.message, "bottom-left", 3000);
            } else {
                notify("error", data.message, "bottom-left", 3000);
            }
        }).catch(error => console.error(error))
        
    }

    /*
    | Debug
    */
    useEffect(() => {
        console.log(_preferedLoc);
    }, [_preferedLoc])

    return(
        <>
            <div className="text-l1 fw-bold mar-bottom-3 color-black2 d-flex justify-content-between align-items-center">
                Prefered Location
                <div className="text-m2 text-decoration-underline cursor-pointer user-select-none" onClick={() => setEditPrefLoc(!isEditPrefLoc)}>{isEditPrefLoc ? "Cancel" : "Edit"}</div>
            </div>

            <div className="d-flex flex-wrap gap3">
                {!isEditPrefLoc && _preferedLoc.map(prefLoc => (
                    <div key={prefLoc.id} className="prefered-loc-chip">{prefLoc.province.province}</div>
                ))}

                {isEditPrefLoc && locations.map(loc => (
                    <div 
                    key={loc.id} 
                    onClick={() => addRemovePrefLoc(loc)}
                    className={`prefered-loc-chip ${_preferedLoc.some(prefLoc => prefLoc.province.id == loc.id) ? "active" : ""}`}
                    >
                        {loc.province}
                    </div>
                ))}
            </div>
        </>
    )
}

export default ClientEditProfilePreferedLoc;