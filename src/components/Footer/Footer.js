import React from 'react';
import logo from '../../assets/images/Footer/FooterLogo.png'
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-footer text-center text-white mt-xxl-5">
            <div className="container p-4">
                <section className="mb-4">
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-facebook-f"></i
                    ></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-twitter"></i
                    ></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-google"></i
                    ></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-instagram"></i
                    ></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-linkedin-in"></i
                    ></a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-github"></i
                    ></a>
                </section>

                <section className="">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <img src={logo} alt=""/>
                        </div>
                        <div className="col-lg-5 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase text-white">Информация</h5>
                            <ul className="list-unstyled mb-0">
                                <li className='text-decoration-none'>
                                    <Link to="/">
                                        <span className="text-white">
                                        Главная
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/gallery">
                                        <span className="text-white">
                                        Галерея
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/projects">
                                        <span className="text-white text-decoration-none">Наши проекты</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contacts" className="text-white">Контакты</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase text-white">Контакты</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <span  className="text-white">г. Бишкек, улица Тоголок Молдо 54a</span>
                                </li>
                                <li>
                                    <span  className="text-white">+996 709-66-04-15</span>
                                </li>
                                <li>
                                    <span className="text-white">aisennogoibaev999@gmail.com</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </section>
            </div>

            <div className="text-center p-3 text-white">
                © 2021 Copyright:
                <br/>
                <Link to='/'>
                    <span className="text-white">
                        Строительная компания DP
                    </span></Link>
            </div>
        </footer>
    );
};

export default Footer;