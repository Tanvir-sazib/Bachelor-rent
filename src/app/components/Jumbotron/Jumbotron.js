import React from 'react';
import './Jumbotron.css'
import jumboImage from '../../assets/images/webaliser-_TPTXZd9mOo-unsplash.jpg'
import Button from '../shared/Button';
const Jumbotron = () => {
    return (
        <div className='jumbo-container row m-0'>

            <div className="col-lg-5 jumbo-content px-lg-5 px-3 d-flex align-items-center justify-content-center">
                <div className="content-text text-lg-left">
                    <h1>Find Your Future Next Home</h1>
                    <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, at beatae nesciunt enim commodi necessitatibus. Vitae magni asperiores rerum laudantium itaque perferendis praesentium vero autem?</p>
                    <Button className='py-3 px-5 btn-brand' title="Get Started" />
                </div>

            </div>
            <div className=" col-lg-7 p-0 jumbo-image-container">
                <img className='jumbo-img' src={jumboImage} alt="" />
            </div>
        </div>
    );
};

export default Jumbotron;