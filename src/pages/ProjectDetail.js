import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Title from "../components/Title/Title";
import {db} from "../data/Projects/db";
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProjectDetail = () => {
    const [project, setProject] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        const data = db.find(el => {
            return el.id === parseInt(id)
        })
        setProject(data)
    }, [id])

    return (
        <div className='container mt-xxl-5'>
            <Title>Проект {project?.title}</Title>
            <br/>
            <div className="row">
                <div className="col-md-6">
                    <Carousel>
                        {
                            project?.imgArray?.map((img, index) => {
                                return <div>
                                    <img src={img} alt='images'/>
                                    <p className="legend">Картинка</p>
                                </div>
                            })
                        }
                    </Carousel>
                </div>
                <div className="col-md-6">
                    <div className='m-lg-2'>
                        <div className="d-flex justify-content-between align-items-center">
                            <div><h4>Цена</h4></div>
                            <h3><span className="badge bg-success">{project?.cost} $</span></h3>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-3">
                            <div><h4>Цена под ключ</h4></div>
                            <h3><span className="badge bg-success">{project?.costWithKey} $</span></h3>
                        </div>
                        <div className={"d-flex justify-content-between align-items-center mt-3"}>
                            <div><h4>Общая площадь</h4></div>
                            <h3><span className="badge bg-success">{project?.s} m2</span></h3>
                        </div>
                        <div className={"d-flex justify-content-between align-items-center mt-3"}>
                            <div><h4>Жилых комнат</h4></div>
                            <h3><span className="badge bg-success">{project?.rooms}</span></h3>
                        </div>
                        <div className={"d-flex justify-content-between align-items-center mt-3"}>
                            <div><h4>Этажность</h4></div>
                            <h3><span className="badge bg-success">{project?.numberOfStoreys}</span></h3>
                        </div>
                        <div className={"d-flex justify-content-between align-items-center mt-3"}>
                            <div><h4>Пристрой</h4></div>
                            <h3><span className="text-break badge bg-danger">{project?.pristroy}</span></h3>
                        </div>
                    </div>
                </div>
            </div>
            <Title>Описание проекта {project?.title}</Title>
            <div className="row">
                <div className="col-md-7 m-lg-4 ">
                    <p className='font-monospace fs-1 lh-1'>
                        {project?.text}
                    </p>
                </div>
            </div>
            {project?.sDetail && <Title>Планировка дома {project?.title}</Title>}
            <div className="row mt-5">
                <div className="col-md-6">
                    <div className='m-lg-2'>

                            {
                                project?.sDetail?.map((el) => {
                                    return  <div className="d-flex justify-content-between align-items-center">
                                    <div><h4>{el.title}</h4></div>
                                    <h3><span className="badge bg-success">{el?.value} м2</span></h3>
                                    </div>
                                })
                            }
                    </div>
                </div>
                <div className="col-md-6">
                    <Carousel>
                        {
                            project?.drawingArray?.map((img, index) => {
                                return <div>
                                    <img src={img} alt='images'/>
                                    <p className="legend">Картинка</p>
                                </div>
                            })
                        }
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;