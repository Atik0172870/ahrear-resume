import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import profile_pic from '../assets/Ahtear_rahman.JPG';
import menuIcon from '../assets/circle-menu.svg';
import homeIcon from '../assets/home.svg';
import resumeIcon from '../assets/resume.svg';
import covverletterIcon from '../assets/covverletter.svg';
import videointerviewIcon from '../assets/video-interview.svg';
import './Navbar.scss';

function Navbar() {
    const navigate = useNavigate();
    const [activeBtn, setAtiveBtn] = useState(1);

    useEffect(() => {
        navigateToRoute('/', 1)
    }, [])

    const navigateToRoute = (url = '/', activeBtn) => {
        setAtiveBtn(activeBtn);
        navigate(url);
    }

    return (
        // <!-- Navbar -->
        <div className="navbar-div">
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <a className="navbar-brand d-flex align-items-center ms-3" >
                    <img src={profile_pic} alt="Avatar Logo" className="rounded-circle profile_pic" />
                </a>
                <button className="navbar-toggler btn btn-sm" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-mobile">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                    <ul className="navbar-nav me-auto">
                        <li className={`nav-item btn btn-sm text-white li-btn ${activeBtn == 1 ? 'li-btn-select' : ''}`} onClick={() => { navigateToRoute('/', 1) }}>
                            Home
                        </li>
                        <li className={`nav-item btn btn-sm text-white li-btn ${activeBtn == 2 ? 'li-btn-select' : ''}`} onClick={() => { navigateToRoute('/resume', 2) }}>
                            Resume
                        </li>
                        <li className={`nav-item btn btn-sm text-white li-btn ${activeBtn == 3 ? 'li-btn-select' : ''}`} onClick={() => { navigateToRoute('/cover-letter', 3) }}>
                            Cover letter
                        </li>
                        <li className={`nav-item btn btn-sm text-white li-btn ${activeBtn == 4 ? 'li-btn-select' : ''}`} onClick={() => { navigateToRoute('/video-interview', 4) }}>
                            Video Interview
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="offcanvas offcanvas-start text-bg-dark offcanvas-div" id="offcanvas-mobile" style={{ width: 'auto' }}>
                <div className="offcanvas-header">
                    <button type="button" className="btn btn-close btn-sm btn-close-white" data-bs-dismiss="offcanvas"></button>
                </div>
                <div className="offcanvas-body p-0 d-flex align-items-center flex-column gap-4 justify-content-start mt-5">
                    <img src={homeIcon} title='Home' className={`menu-icon-all rounded-circle text-bg-light btn btn-sm  degree-icon ${activeBtn == 1 ? 'border border-3 border-warning' : ''}`} onClick={() => { navigateToRoute('/', 1) }} />
                    <img src={resumeIcon} title='Resume' className={`menu-icon-all rounded-circle text-bg-light btn btn-sm  degree-icon ${activeBtn == 2 ? 'border border-3 border-warning' : ''}`} onClick={() => { navigateToRoute('/resume', 2) }} />
                    <img src={covverletterIcon} title='Cover Letter' className={`menu-icon-all rounded-circle text-bg-light btn btn-sm  degree-icon ${activeBtn == 3 ? 'border border-3 border-warning' : ''}`} onClick={() => { navigateToRoute('/cover-letter', 3) }} />
                    <img src={videointerviewIcon} title='Video Interview' className={`menu-icon-all rounded-circle text-bg-light btn btn-sm  degree-icon ${activeBtn == 4 ? 'border border-3 border-warning' : ''}`} onClick={() => { navigateToRoute('/video-interview', 4) }} />
                </div>
            </div>

        </div>

    )

}

export default Navbar;