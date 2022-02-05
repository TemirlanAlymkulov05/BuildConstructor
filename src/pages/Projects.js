import React from 'react';
import {useNavigate} from 'react-router-dom';

import Title from "../components/Title/Title";
import HouseCard from "../components/HouseCard/HouseCard";
import {db} from "../data/Projects/db";


const Projects = () => {
    const navigate = useNavigate();

    const goDetail = (id) => {
        console.log('route')
        navigate(`/projects/${id}`)
    }
    return (
        <div>
            <div className='container mt-xxl-5'>
                <Title>Наши объекты</Title>
                <br/>
                <div className="row d-flex justify-content-sm-center mb-5 justify-content-xl-around">
                    {
                        db.map((el, id) => {
                            return <HouseCard key={id}
                                              linkDetail={() => goDetail(el.id)}
                                              title={el.title}
                                              text={el.text}
                                              bg={el.bg}
                                              bgName={el.bgName}
                            />
                        })
                    }
                </div>
            </div>
        </div>

    );
};

export default Projects;