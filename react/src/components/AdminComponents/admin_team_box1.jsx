import { useEffect } from "react";

const AdminTeamBox1 = ({team}) => {
    // useEffect(() => {
    //     console.log(team);
    // }, []);

    return(
        <div className="team-box">
            <div className="team-box-name">{team.name}</div>
            <div className="team-box-overlay"></div>
            <img src={`/src/assets/media/teams/${team.logo}`} className="team-box-logo" />
        </div>
    );
}

export default AdminTeamBox1;