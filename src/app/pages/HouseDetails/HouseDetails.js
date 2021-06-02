import React from 'react';
import { useParams } from 'react-router';


const HouseDetails = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <div>
            <h1>details {id}</h1>
        </div>
    );
};

export default HouseDetails;