import { useEffect, useState } from "react";
import { fetchAllDevelopers } from "../../../Services/GeneralDeveloperPropertiesService";
import * as Icon from "react-bootstrap-icons";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { fetchAllProvinces } from "../../../Services/ProvinceService";
import { fetchAllCities } from "../../../Services/CitiesService";
import { isEmptyOrSpaces, notify } from "../../../assets/js/utils";
import axiosClient from "../../../axios-client";

export default function AdminAddDevProjects() {
    const navigate = useNavigate();
    const {isSidenavOpen} = useOutletContext();

    const [projectName, setProjectName] = useState("");
    const [projectDeveloper, setProjectDeveloper] = useState("");
    const [projectProvince, setProjectProvince] = useState("");
    const [projectCity, setProjectCity] = useState("");

    const [submitBtnEnabled, setSubmitBtnEnabled] = useState(false);

    const [developersFromDb, setDevelopersFromDb] = useState(null);
    const [provincesFromDb, setProvincesFromDb] = useState(null);
    const [citiesFromDb, setCitiesFromDb] = useState(null);


    // Populate Developers from Database
    useEffect(() => {
        const getAllDevelopers = async() => {
            try {
                const data = await fetchAllDevelopers();
                setDevelopersFromDb(data);
            } catch (error) {console.error(error)}
        }

        const getAllProvinces = async() => {
            try {
                const data = await fetchAllProvinces();
                setProvincesFromDb(data);
            } catch (error) {console.error(error)}
        }

        const getAllCities = async() => {
            try {
                const data = await fetchAllCities();
                setCitiesFromDb(data);
            } catch (error) {console.error(error)}
        }

        const getAll = async() => {
            getAllDevelopers();
            getAllProvinces();
            getAllCities();
        }

        getAll();
    }, []);


    // activate/disable add proj btn
    useEffect(() => {
        if(isEmptyOrSpaces(projectName) || projectDeveloper === "" || projectProvince === "" || projectCity === "") {
            setSubmitBtnEnabled(false);
        }
        else {
            setSubmitBtnEnabled(true);
        }
    }, [
        projectName,
        projectDeveloper,
        projectProvince,
        projectCity
    ]);


    /*
    | Debugging 
    */
    useEffect(() => {
        console.log(projectProvince);
    }, [projectProvince]);


    const handleAddProject = () => {
        if(isEmptyOrSpaces(projectName) || projectDeveloper === "" || projectProvince === "" || projectCity === "") {
            return;
        }

        const formData = new FormData();
        formData.append("dev", projectDeveloper);
        formData.append("name", projectName);
        formData.append("province_den", provincesFromDb.filter(prov => prov.id == projectProvince)[0].province);
        formData.append("city", citiesFromDb.filter(city => city.id == projectCity)[0].city);
        formData.append("prov", projectProvince);
        formData.append("cit", projectCity);

        axiosClient.post('/create-project', formData)
        .then(({data}) => {
            if(data.status === 200) {
                notify("default", data.message, "bottom-left", 3000);
                navigate('/BDDRAdmin/Properties&Developers');
            } else {
                notify("error", data.message, "bottom-left", 3000);
            }           
            
        }).catch(error => {console.error(error)})
    }


    return(
        <div className={`content1-admin ${isSidenavOpen ? 'compressed' : ''}`}>
            {developersFromDb && provincesFromDb && citiesFromDb
            ? (
                <>
                    <div className="d-flex mar-bottom-1">
                        <Link to={'/BDDRAdmin/Properties&Developers'} className="d-flex gap3 align-items-center text-l3 color-black1 text-decoration-none cursor-pointer">
                            <Icon.ChevronLeft/>
                            Back
                        </Link>
                    </div> 

                    <div className="text-l1 fw-bold mar-bottom-1">Add Projects</div>

                    <div className="d-flex flex-direction-y align-items-start gap2">
                        <div className="d-flex gap1">
                            <div className="d-flex flex-direction-y gap4">
                                <label htmlFor="developer_name" className="text-m2">Project name</label>
                                <input onInput={(e) => setProjectName(e.target.value)} type="text" id="developer_name" className="edit-text-1" value={projectName}/>
                            </div>
                        </div>

                        {/* Proj Developer */}
                        <div className='d-flex flex-direction-y gap4'>
                            <label htmlFor="dev" className="text-m2">Developer</label>
                            <select 
                            onChange={(e) => setProjectDeveloper(e.target.value)} 
                            className="edit-text-1 w-100"
                            id="dev"
                            value={projectDeveloper}
                            >
                                <option value="">Select Developers</option>
                                {developersFromDb.map((dev) => (
                                    <option key={dev.id} value={dev.id}>{dev.name}</option>
                                ))}
                            </select>
                        </div>


                        {/* Province */}
                        <div className='d-flex flex-direction-y gap4'>
                            <label htmlFor="province" className="text-m2">Province</label>
                            <select 
                            onChange={(e) => {setProjectProvince(e.target.value); setProjectCity("")}} 
                            className="edit-text-1 w-100" 
                            id="province"
                            value={projectProvince}
                            >
                                <option value="">Select Province</option>
                                {provincesFromDb.map((prov) => (
                                    <option key={prov.id} value={prov.id}>{prov.province}</option>
                                ))}
                            </select>
                        </div>

                        {/* Province */}
                        <div className='d-flex flex-direction-y gap4'>
                            <label htmlFor="province" className="text-m2">City</label>
                            <select 
                            disabled={projectProvince == ""}
                            onChange={(e) => setProjectCity(e.target.value)} 
                            className="edit-text-1 w-100" 
                            id="province"
                            value={projectCity}
                            >
                                <option value="">Select City</option>
                                {projectProvince && citiesFromDb.filter(cit => cit.province == projectProvince).map((city) => (
                                    <option key={city.id} value={city.id}>{city.city}</option>
                                ))}
                            </select>
                        </div>

                    </div>

                    <button onClick={handleAddProject} className={`primary-btn-black1 ${submitBtnEnabled ? '' : 'disabled'} mar-top-1`}>Add Project</button>
                </>
            )
            : (
                <></>
            )}
        </div>
    );
}