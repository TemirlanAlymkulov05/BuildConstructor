import React, {useState} from 'react';
import logo from '../../assets/images/Header/Logo.png'
import {Link} from "react-router-dom";
import './Header.css'

const Header = () => {
    const [toggle, setToggle] = useState(false)
    
    const toggleNavbar = () => {
      setToggle(!toggle)
    }
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top pt-lg-4 pb-2">
                <div className="container">
                    <div>
                        <Link to='/'>
                            <img src={logo} alt="logo"/>
                        </Link>
                    </div>
                    <button onClick={toggleNavbar} className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    { toggle ?<div className="collapse navbar-collapse  mt-xxl-5" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto">
                            <Link to={'/'}>
                                <li className="nav-item">
                                    <span className="nav-link" href="#">Главная</span>
                                </li>
                            </Link>
                            <Link to={'/gallery'}>
                                <li className="nav-item">
                                    <span className="nav-link" href="#">Галерея</span>
                                </li>
                            </Link>
                            <Link to={'/projects'}>
                                <li className="nav-item">
                                    <span className="nav-link" href="#">Наши объекты</span>
                                </li>
                            </Link>
                            <Link to={'/about-company'}>
                                <li className="nav-item">
                                    <span className="nav-link" href="#">О нас</span>
                                </li>
                            </Link>
                            <Link to={'/contacts'}>
                                <li className="nav-item">
                                   <span className="nav-link">
                                        Контакты
                                   </span>
                                </li>
                            </Link>
                        </ul>
                    </div>
                    :
                        <div className="collapse navbar-collapse d-block" id="navbarResponsive">
                            <ul className="navbar-nav ms-auto mt-4">
                                <Link to={'/'}>
                                    <li className="nav-item" onClick={toggleNavbar}>
                                        <span className="nav-link" href="#">Главная</span>
                                    </li>
                                </Link>
                                <Link to={'/gallery'}>
                                    <li className="nav-item" onClick={toggleNavbar}>
                                        <span className="nav-link" href="#">Галерея</span>
                                    </li>
                                </Link>
                                <Link to={'/projects'}>
                                    <li className="nav-item" onClick={toggleNavbar}>
                                        <span className="nav-link" href="#">Наши объекты</span>
                                    </li>
                                </Link>
                                <Link to={'/about-company'}>
                                    <li className="nav-item" onClick={toggleNavbar}>
                                        <span className="nav-link" href="#">О нас</span>
                                    </li>
                                </Link>
                                <Link to={'/contacts'}>
                                    <li className="nav-item" onClick={toggleNavbar}>
                                   <span className="nav-link">
                                        Контакты
                                   </span>
                                    </li>
                                </Link>

                            </ul>
                        </div>}
                </div>
            </nav>
        </React.Fragment>


    );
};

export default Header;