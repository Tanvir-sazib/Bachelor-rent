import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { findDetails } from '../../Redux/actions/houseRentAction';


const HouseDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const house = useSelector((state) => {
        return state.houses.HouseDetails;
    })
    useEffect(() => {
        dispatch(findDetails(id));
    }, [])

    console.log(house);
    return (
        <div>
            <h1>details {house}</h1>
        </div>
    );
};

export default HouseDetails;