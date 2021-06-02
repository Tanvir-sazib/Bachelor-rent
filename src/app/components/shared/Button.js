import React from 'react';
import '../../utils/css/Button.css'
const Button = ({ title, className }) => {
    return (
        <div className='d-flex align-items-center'>
            <button className={className}>{title}</button>
        </div>
    );
};

export default Button;