import { useEffect, useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { fetchAllDevelopers } from "../../../../Services/GeneralDeveloperPropertiesService";

export default function AdminAddPropertyNameloc() {
    const {
        projectName, setProjectName, 
        projectModel, setProjectModel,
        projectDeveloper, setProjectDeveloper,
        propertyProvince, setPropertyProvince,
        propertyCity, setPropertyCity,
        propertyTurnover, setPropertyTurnover
    } = useOutletContext();
    
    const [developersFromDb, setDevelopersFromDb] = useState(null);


    // Populate Developers from Database
    useEffect(() => {
        const getAllDevelopers = async() => {
            try {
                const data = await fetchAllDevelopers();
                setDevelopersFromDb(data);
            } catch (error) {console.error(error)}
        }

        getAllDevelopers();
    }, []);



    if(developersFromDb) {
        return(
            <div className="d-flex justify-content-center">
                <div className='d-flex flex-direction-y gapl1'>
    
                    <div className="create-listing-cont">
                        <div className="d-flex flex-direction-y gapl2">
                            <div className="text-l1 fw-bold">What is the property name and where it's located.</div>
                            
                            <div className="d-flex flex-direction-y gap1">
                                {/* Proj Name */}
                                <div className='d-flex flex-direction-y gap3'>
                                    <div className="text-l2">Project name</div>
                                    <input 
                                        onInput={(e) => setProjectName(e.target.value)}
                                        type='text' 
                                        className="edit-text-1 w-100" 
                                        placeholder='Property Name'
                                        value={projectName || ''}
                                    />  
                                </div>
    
                                {/* Proj Model */}
                                <div className='d-flex flex-direction-y gap3'>
                                    <div className="text-l2">Project model</div>
                                    <input 
                                        onInput={(e) => setProjectModel(e.target.value)}
                                        type='text' 
                                        className="edit-text-1 w-100" 
                                        placeholder='Property Name'
                                        value={projectModel || ''}
                                    />  
                                </div>
    
                                {/* Proj Developer */}
                                <div className='d-flex flex-direction-y gap3'>
                                    <div className="text-l2">Project Developer</div>
                                    <select 
                                    onChange={(e) => setProjectDeveloper(developersFromDb.find(dev => dev.id == e.target.value))} 
                                    className="edit-text-1 w-100" 
                                    value={projectDeveloper ? projectDeveloper.id : ""}
                                    >
                                        <option value="">Select Developers</option>
                                        {developersFromDb.map((dev) => (
                                            <option key={dev.id} value={dev.id}>{dev.name}</option>
                                        ))}
                                    </select>
                                </div>
    
                                {/* Address */}
                                <div className='d-flex flex-direction-y gap3'>
                                    <div className="text-l2">Address</div>
                                    <div className="d-flex gap3">
                                        <input 
                                            onInput={(e) => setPropertyCity(e.target.value)}
                                            type='text' 
                                            className="edit-text-1 w-100" 
                                            placeholder='City'
                                            value={propertyCity || ''}
                                            /> 
                                        
    
                                        <input 
                                            onInput={(e) => setPropertyProvince(e.target.value)}
                                            type='text' 
                                            className="edit-text-1 w-100" 
                                            placeholder='Province'
                                            value={propertyProvince || ''}
                                        />   
                                    </div>                                 
                                </div>
    
    
                                <div className='d-flex flex-direction-y gap3'>
                                    <div className="text-l2">Turn over</div>
                                    <select name="turnover" onChange={(e) => setPropertyTurnover(e.target.value)} className="edit-text-1 w-100" value={propertyTurnover}>
                                        <option value="RFO">RFO</option>
                                        <option value="Pre-selling">Pre-selling</option>
                                        <option value="RFO, Pre-selling">RFO, Pre-selling</option>
                                    </select>
                                </div>
    
    
    
                                {/* <div className='d-flex flex-direction-y gap3'>
                                    <div className="text-l2">Tell us about the property</div>
                                    <textarea 
                                        ref={propDescRef}
                                        onInput={() => setPropertyDesc(propDescRef.current.value)}
                                        className="edit-text-1 w-100" 
                                        style={{height: '200px', resize: 'none'}}
                                        value={propertyDesc ? propertyDesc : ''}
                                    >
    
                                    </textarea>
                                </div> */}
                            </div>                     
                        </div>           
                    </div>
                                    
                </div>
            </div>
        );
    }
}