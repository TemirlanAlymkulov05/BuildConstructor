import React from 'react';
import './HouseCard.css'

const HouseCard = ({linkDetail, title, text, bg, bgName}) => {
    return (
        <div className="col-md-5 col-sm-6 col-xs-12 container_foto" onClick={linkDetail}>
            <article className="text-left">
                <h2>{title}</h2>
                <h4>{text}</h4>
            </article>
            <img src={bg}
                 alt={bgName}/>
        </div>
    );
};

export default HouseCard;