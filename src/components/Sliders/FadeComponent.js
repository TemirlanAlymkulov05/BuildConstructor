import React from 'react';
import './FadeComponent.css'

const FadeComponent = ({each, index, array}) => {
    return (
        <div className="col-md-12 each-fade">
            {each?.positionRight &&
            <p>
                <span>
                    {index + 1}/{array.length + 1}
                </span>
                <br/>
                <strong>
                    {each?.title}
                </strong>
            </p>
            }
            <div>
                <img src={each?.img} alt='images'/>
            </div>
            {!each?.positionRight &&
            <p>
                <span>
                    {index + 1}/{array.length + 1}
                </span>
                <br/>
                <strong>
                    {each?.title}
                </strong>
            </p>
            }
        </div>
    );
};

export default FadeComponent;