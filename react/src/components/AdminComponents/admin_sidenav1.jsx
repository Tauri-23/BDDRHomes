import { AdminNavLink1 } from "./admin_navlink1"
import { AdminSidenavLink1 } from "./admin_sidenav_link1"

export const AdminSidenav1 = ({isSidenavOpen, setSidenavOpen}) => {

    return(
        <div className={`sidenav1 ${isSidenavOpen ? '' : 'minimize'}`}>
            <div className="sidenav1-logo-cont" onClick={() => setSidenavOpen(!isSidenavOpen)}>
                <div className="d-flex align-items-center gap3">
                    <img src="/src/assets/media/logos/logo1.png" className="navbar-1-logo-pic" alt="" />
                    {/* <div className="text-l3 fw-bold">BDDR <span className="color-blue1 fw-bold">Homes</span></div> */}
                </div>
            </div>
            <div className="sidenav1-links">
                <AdminSidenavLink1 isSidenavOpen={isSidenavOpen} label={'Dashboard'} path={'/BDDRAdmin'} activeLoc={['/home']}/>
                <AdminSidenavLink1 isSidenavOpen={isSidenavOpen} label={'Teams & Agents'} path={'/BDDRAdmin/Teams&Agents'} activeLoc={['Teams']}/>
                {/* <AdminSidenavLink1 isSidenavOpen={isSidenavOpen} label={'Agents'} path={'/BDDRAdmin/Agents'} activeLoc={['Agents']}/> */}
                <AdminSidenavLink1 isSidenavOpen={isSidenavOpen} label={'Properties'} path={'/BDDRAdmin/Properties'} activeLoc={['Properties']}/>
                <AdminSidenavLink1 isSidenavOpen={isSidenavOpen} label={'Deals'} path={'/'} activeLoc={['Deals']}/>
                <AdminSidenavLink1 isSidenavOpen={isSidenavOpen} label={'Settings'} path={'/BDDRAdmin/Settings'} activeLoc={['Settings']}/>
            </div>
        </div>
    )
}