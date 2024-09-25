import { useEffect, useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { fetchAllDevelopers } from "../../../../../Services/GeneralDeveloperPropertiesService";

export default function AdminAddPropertyNameloc() {
    const {
        project,
        projectModel, setProjectModel,
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
                                        type='text' 
                                        className="edit-text-1 w-100" 
                                        placeholder='Property Name'
                                        value={project.project_name}
                                        disabled
                                    />  
                                </div>

                                {/* Proj Developer */}
                                <div className='d-flex flex-direction-y gap3'>
                                    <div className="text-l2">Project Developer</div>
                                    <input 
                                        type='text' 
                                        className="edit-text-1 w-100" 
                                        placeholder='Property Name'
                                        value={project.developer.name}
                                        disabled
                                    /> 
                                </div>
    
                                {/* Address */}
                                <div className='d-flex flex-direction-y gap3'>
                                    <div className="text-l2">Address</div>
                                    <div className="d-flex gap3">
                                        <input 
                                            type='text' 
                                            className="edit-text-1 w-100" 
                                            placeholder='Property Name'
                                            value={project.city_denormalized}
                                            disabled
                                        /> 
                                        
    
                                        <input 
                                            type='text' 
                                            className="edit-text-1 w-100" 
                                            placeholder='Property Name'
                                            value={project.province_denormalized}
                                            disabled
                                        />  
                                    </div>                                 
                                </div>
    
                                {/* Proj Model */}
                                <div className='d-flex flex-direction-y gap3'>
                                    <div className="text-l2">Project model</div>
                                    <input 
                                        onInput={(e) => setProjectModel(e.target.value)}
                                        type='text' 
                                        className="edit-text-1 w-100" 
                                        placeholder='Property Model'
                                        value={projectModel || ''}
                                    />  
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