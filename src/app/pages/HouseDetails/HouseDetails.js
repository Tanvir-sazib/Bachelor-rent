import React from 'react';
import { useSelector } from 'react-redux';
import './HouseDetails.css'
import NavBar from '../../components/shared/NavBar'
import Header from '../../components/Header/Header';
import BookingForm from '../../components/BookingForm/BookingForm'
import Footer from '../../components/shared/Footer/Footer';
const HouseDetails = () => {

    const house = useSelector((state) => {
        return state.houses.houseDetails;
    })


    console.log(house);
    return (
        <div className='details-container'>
            <NavBar />
            <Header />
            <div className="apartment-details row m-0 p-0 px-lg-5">
                <div className="details-wrapper m-0 p-0 col-lg-6">
                    <div className="image pt-4 d-flex">
                        <img src={house.image} alt="" />
                    </div>
                    <div className="details-text ">
                        <div className="title py-3 d-flex justify-content-between align-items-center">
                            <div className="location">
                                <h2 className='txt-brand'>{house.title}</h2>
                                <p>{house.address}</p>
                            </div>
                            <h4>{house.rent}/-BDT</h4>
                        </div>
                        <div className="separator"></div>
                        <div className="all-details pt-3">
                            <p><b>Rent/Month:</b> {house.rent}/-BDT</p>
                            <p><b>Service Charge:</b> {house.service}/-BDT</p>
                            <p><b>Security Deposite:</b> {house.deposite}</p>
                            <p><b>Address & Area:</b> {house.address}</p>
                            <p><b>Flat Size :</b> {house.size} squre feet</p>
                            <p><b>Floor :</b> {house.floor}</p>
                            <p><b>Room Category:</b> {house.bedrooms} Bedrooms, {house.bathrooms} Bathrooms, {house.belcony} Belcony</p>
                            <p><b>Facilities :</b> {house.facilities}</p>
                            <p><b>Available :</b> {house.available}</p>
                            <p><b>Contact :</b> {house.contact}</p>

                        </div>
                    </div>
                </div>
                <div className="col-lg-6 m-0 p-0">
                    <BookingForm />
                </div>
            </div>
            <Footer />
        </div >
    );
};

export default HouseDetails;