import React from 'react';
import aboutPic1 from "../assets/images/Main/aboutPic.png";
import aboutPic3 from "../assets/images/Main/AboutPic3.png";
import aboutPic2 from "../assets/images/Main/AboutPic2.png";
import Title from "../components/Title/Title";

const AboutCompany = () => {
    return (
        <div className='container mt-xxl-5'>
            <Title>О нас</Title>
            <div className='row mt-5 d-flex align-items-center mb-5'>
                <div className="col-md-6">
                    <div className="row pictures d-flex justify-content-around mb-4">
                        <div className="pictures__col-1 col-md-4 col-sm-6">
                            <div className='mb-5 col-sm-12'>
                                <img width='100%' className='w-100' src={aboutPic1} alt=""/>
                            </div>
                            <div>
                                <img width='100%' className='w-100' src={aboutPic3} alt=""/>
                            </div>
                        </div>
                        <div className="pictures__col-2  col-md-4 col-sm-6">
                            <div className="mt-5">
                                <img width='100%' className='w-100' src={aboutPic2} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
            </div>
            <Title>Сертификаты</Title>
            <div className='row mt-5 d-flex align-items-center mb-4'>
                <div className="col-md-4">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <div className="col-md-4">
                        <img width='100%' className='w-100'
                             src='https://www.all-smety.ru/upload/iblock/2c7/Akkreditatsiya-Galaktika-IT_-2019_konvertirovan_page_0001.jpg'
                             alt=""/>
                </div>
                <div className="col-md-4">
                <img width='100%' className='w-100'
                             src='https://images.ua.prom.st/2357878508_sertifikaty-na-sootvetstvie.jpg'
                             alt=""/>
                </div>
            </div>
            <Title>Наша команда</Title>
            <div className='row mt-5 mb-5'>
                <div className="col-md-6 mt-5">
                    <p>Главным архитектором проектов компании GOLDEN STROY является Нуркулов Нурлан.
                        Он участвовал в проектировании крупных объектов и является автором многих проектов.</p>
                    <ul>
                        <li>Гостиница Новотель</li>
                        <li>Научный центр урологии</li>
                        <li>Университет Манас</li>
                        <li>Строительный маркет 2Прораба</li>
                        <li>Достык Плаза (г.Алматы)</li>
                        <li>Жилой комплекс Немецкий квартал</li>
                        <li>Жилой комплекс Комфорт</li>
                        <li>ЖК по ул.Сухэ Батора ( Алинур Групп)</li>
                        <li>Жилой дом Ынтымак</li>
                        <li>Жилой комплекс CRYSTAL</li>
                        <li>а также много других проектов…</li>
                    </ul>
                </div>
                <div className="col-md-6 -mb-5">
                    <img width='100%' className='w-100'
                         src='https://goldenstroy.kg/wp-content/uploads/2020/01/844424942723450_3a7f-e1579343675909.jpg'
                         alt=""/>
                </div>

            </div>
        </div>
    );
};

export default AboutCompany;