export const Footer1 = () => {
    return (
        <div className={`footer1 ${location.pathname === '/BDDRClient/Messages' ? 'd-none' : ''}`}>
            <div className="d-flex align-items-center gap3">
                <img src={"/src/assets/media/logos/logo1.png"} className="navbar-1-logo-pic" alt="" />
                <div className="text-l3 fw-bold">BDDR <span className="color-blue1 fw-bold">Homes</span></div>
            </div>
        </div>       
    );
}