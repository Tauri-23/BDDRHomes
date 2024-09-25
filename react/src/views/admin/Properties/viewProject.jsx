import { useEffect, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { fetchAllProjectsFull, fetchProjectInfoFullById } from "../../../Services/ProjectsService";
import * as Icon from "react-bootstrap-icons";
import AdminViewProjectNavbar from "../../../components/AdminComponents/admin_view_project_navbar";

export default function AdminViewProject() {
    const navigate = useNavigate();
    const {isSidenavOpen} = useOutletContext();
    const {projId} = useParams();
    const [project, setProject] = useState(null);

    useState(() => {
        const getProjectInfo = async() => {
            try {
                const data = await fetchProjectInfoFullById(projId);
                setProject(data);
            } catch (error) {console.error(error)}
        }

        getProjectInfo();
    }, []);

    /* 
    | Debugging 
    */
    useEffect(() => {
        console.log(project)
    }, [project]);

    return(
        <div className={`content1-admin ${isSidenavOpen ? 'compressed' : ''}`}>
            {project && (
                <>
                    <AdminViewProjectNavbar title={project.project_name}/>

                    <div className="view-project-properties-cont">
                        
                    </div>
                </>
            )}
            {!project && (<div className="text-l3 center-absolute-xy">Loading...</div>)}
        </div>
    );
}