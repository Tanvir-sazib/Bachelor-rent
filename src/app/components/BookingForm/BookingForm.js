import React from "react";
import { useForm } from "react-hook-form";
import './BookingForm.css'

export default function App() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);



    return (

        <div className='d-flex justify-content-center pt-5'>
            <div className="form-container ">
                <div className='m-4'>
                    <h4>Place your booking now</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input className='input-field' type='text' placeholder='Full Name'  {...register("name")} /> <br />
                        <input className='input-field' type='text' placeholder="Phone No"  {...register("phone")} /> <br />
                        <input className='input-field' type='email' placeholder="Email" {...register("email")} /> <br />
                        <textarea className='input-field' rows='5' placeholder='Message' {...register("message")} /><br />

                        <input className='input-btn' type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
}