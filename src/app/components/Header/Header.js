import React from 'react';
import './Header.css'
import headerImg from '../../assets/images/naomi-hebert-MP0bgaS_d1c-unsplash.jpg'
const Header = () => {
    return (
        <div className='header-container'>
            <img className='header-image' src={headerImg} alt="" />
            <div className='d-flex justify-content-center header-text align-items-center'>
                <h1>Apartment Details</h1>
            </div>
        </div>
    );
};

export default Header;