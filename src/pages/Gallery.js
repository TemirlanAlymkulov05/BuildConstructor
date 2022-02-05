import React from 'react';
import DztImageGalleryComponent from "reactjs-image-gallery";
import Title from "../components/Title/Title";
import {data} from "../data/Gallery/db";

const Gallery = () => {

    return (
        <div className='container mt-xxl-5'>
            <Title>Галерея</Title>
            <br/>
            <DztImageGalleryComponent
                images={data}
            />
        </div>
    );
};

export default Gallery;