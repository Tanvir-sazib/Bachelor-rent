import React from 'react';
import './AboutUs.css'
import aboutImg from '../../assets/images/qweqwe.png'
import Button from '../shared/Button';
const AboutUs = () => {
    return (
        <div className='about-container row m-0 p-0'>

            <div className="col-lg-5 d-lg-block about-content">
                <img src={aboutImg} alt="" />
            </div>
            <div className="col-lg-7 about-text">
                <div className="text-box px-lg-5">
                    <h3 className='txt-brand pt-5'>About us</h3>
                    <h5>We Help Find Your next sleeping place</h5>
                    <div className="py-4">
                        <p className='pl-4 about-details'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero quisquam in magni vitae rerum mollitia consectetur ullam est dicta eaque quasi unde recusandae maxime facilis suscipit aliquam, voluptatibus labore tempora repellendus atque minus veniam placeat. Consequatur possimus ut quam. Cum dignissimos architecto neque placeat quod! Porro dolor enim hic animi.</p>
                    </div>
                    <Button className='btn-brand py-2 px-4' title="Contact Us" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;