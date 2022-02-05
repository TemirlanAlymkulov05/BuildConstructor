import React from 'react';
import './Button1.css'
const Button1 = ({children, onClick}) => {
    return (
        <button  className='btn1' onClick={onClick}>
            {children}
        </button>
    );
};

export default Button1;