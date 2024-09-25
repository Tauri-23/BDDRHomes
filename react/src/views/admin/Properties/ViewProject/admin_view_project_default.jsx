import { useEffect, useState } from "react";
import { Outlet, useOutletContext, useParams } from "react-router-dom";
import { fetchProjectInfoFullById } from "../../../../Services/ProjectsService";

export default function AdminViewProjectDefault() {
    const {isSidenavOpen} = useOutletContext();
    const {projId} = useParams();

    const [project, setProject] = useState(null);

    useEffect(() => {
        const getProjectInfo = async() => {
            try {
                const data = await fetchProjectInfoFullById(projId);
                setProject(data);
            } catch (error) {console.error(error)}
        }

        getProjectInfo();
    }, []);

    return(
        <Outlet context={{project, isSidenavOpen}}/>
    );
}