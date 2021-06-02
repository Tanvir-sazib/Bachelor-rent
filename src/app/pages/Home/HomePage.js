import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AboutUs from '../../components/AboutUs/AboutUs';
import HouseRent from '../../components/HouseRent/HouseRent';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import NavBar from '../../components/shared/NavBar';
import { loadHouse } from '../../Redux/actions/houseRentAction';
import './HomePage.css'
const HomePage = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadHouse())
    }, [dispatch])
    return (
        <div>
            <NavBar />
            <Jumbotron />
            <HouseRent />
            <AboutUs />
        </div>
    );
};

export default HomePage;