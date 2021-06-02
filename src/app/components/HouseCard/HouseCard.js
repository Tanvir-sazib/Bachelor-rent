import React from 'react';
import './HouseCard.css'
const HouseCard = ({ house }) => {
    return (
        <div className='col-lg-4 m-0 p-0 d-flex justify-content-center'>
            <div className="card-container m-3">
                <div className="card-img">
                    <img src={house.image} alt="" />
                </div>
                <div className="card-txt">
                    <h5>{house.title}</h5>

                </div>

            </div>
        </div>
    );
};

export default HouseCard;