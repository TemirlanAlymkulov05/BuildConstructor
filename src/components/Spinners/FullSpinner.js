import React from 'react';
import {Spinner} from "react-bootstrap";

const FullSpinner = () => {
    return (
        <div className="container">
            <div className='d-flex justify-content-center m-auto'>
                <Spinner animation="border" role="status" className=''>
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>

        </div>
    );
};

export default FullSpinner;