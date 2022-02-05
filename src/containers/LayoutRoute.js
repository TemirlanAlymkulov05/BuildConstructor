import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const LayoutRoute = ({children, ...remainingProps}) => {
    return (
        <div className="c-app c-default-layout position-relative">
            <div className="c-wrapper">
                <Header/>
                <div className="c-body mt-lg-5 pt-xxl-1">
                        {children}
                </div>
                <Footer/>
            </div>
        </div>
    )
};

export default LayoutRoute;