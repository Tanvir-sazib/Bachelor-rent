import React from 'react';
import { useSelector } from 'react-redux';
import HouseCard from '../HouseCard/HouseCard';
import './HouseRent.css'
const HouseRent = () => {
    const houses = useSelector((state) => {
        return state.houses.allHouse;
    })
    console.log(houses);
    return (
        <div className='house-rent-container py-5'>
            <div className="content-title text-center">
                <h2 className='txt-brand'>house rent</h2>
                <h5>Discover the latest Rent available today</h5>
            </div>
            <div className="d-flex container justify-content-center">
                <div className="row m-0 p-0 ">
                    {
                        houses.map(house => <HouseCard house={house} key={house.id} />)
                    }
                </div>
            </div>

        </div>
    );
};

export default HouseRent;