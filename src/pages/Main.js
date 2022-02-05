import React from 'react';
import {Fade} from 'react-slideshow-image';
import {Link} from "react-router-dom";
import FadeComponent from "../components/Sliders/FadeComponent";
import {fadeImages} from "../data/Main/db";
import aboutPic1 from '../assets/images/Main/aboutPic.png'
import aboutPic2 from '../assets/images/Main/AboutPic2.png'
import aboutPic3 from '../assets/images/Main/AboutPic3.png'
import project1 from '../assets/images/Main/project1.png'
import project2 from '../assets/images/Main/project2.png'
import project3 from '../assets/images/Main/project3.png'
import project4 from '../assets/images/Main/project4.png'
import project5 from '../assets/images/Main/project5.png'
import contactUs from '../assets/images/Main/contactUsPic.png'
import Title from "../components/Title/Title";
import Button1 from "../components/Buttons/Button1";
import '../assets/styles/Main.css'

const Main = () => {
    return (
        <div className='container mt-xxl-5'>
            <div className="row">
                <div className="col-md-12 mt-5">
                    <Fade>
                        {
                            fadeImages.map((each, index) => (
                                <FadeComponent each={each} index={index} array={fadeImages}/>
                            ))
                        }
                    </Fade>
                </div>

            </div>
            <div className='row mt-5 d-flex align-items-center'>
                <div className="col-md-6">
                    <div className="pictures d-flex justify-content-around ">
                        <div className="pictures__col-1 col-md-4">
                            <div className='mb-5 col-sm-12'>
                                <img width='100%' className='w-100' src={aboutPic1} alt=""/>
                            </div>
                            <div>
                                <img width='100%' className='w-100' src={aboutPic3} alt=""/>
                            </div>
                        </div>
                        <div className="pictures__col-2  col-md-4">
                            <div className="mt-5">
                                <img width='100%' className='w-100' src={aboutPic2} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <Title>О нас</Title>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <Link to='/about-company'>
                        <strong className='btn-lg btn'>READ MORE =></strong>
                    </Link>
                </div>
            </div>
            <div className="our-projects mt-5">
                <Title>Наши проекты</Title>
                <div className="row">
                    <div className="col-md-6 mt-4">
                        <img width='100%' src={project1} alt=""/>
                    </div>
                    <div className="col-md-6 mt-4">
                        <img width='100%' src={project2} alt=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 mt-4">
                        <img className='h-75' width='100%' src={project3} alt=""/>
                    </div>
                    <div className="col-md-4 mt-4">
                        <img width='100%' src={project5} alt=""/>
                    </div>
                    <div className="col-md-4 mt-4 ">
                        <img width='100%' src={project4} alt=""/>
                    </div>
                </div>
            </div>
            <div className="contacts-content mt-5">
                <Title>Наши контакты</Title>
                <div className="row d-flex justify-content-between">
                    <div className="col-md-5 m-lg-4">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Имя</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1"
                                   placeholder="Имя"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Номер телефона</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1"
                                   placeholder="Номер телефона"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlInput1">Почта</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1"
                                   placeholder="Email"/>
                        </div>
                        <div className="form-group mb-5">
                            <label htmlFor="exampleFormControlTextarea1">Ваше сообщение</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <Button1>Отправить на почту!</Button1>
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <div>
                            <img className='mw-100' src={contactUs} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;