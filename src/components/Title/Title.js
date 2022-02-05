import React from 'react';
import './Title.css'

const Title = ({children}) => {
    return (
        <h2 className='title_1'>
            {children}
        </h2>
    );
};

export default Title;