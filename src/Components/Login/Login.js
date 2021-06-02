import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import logo from '../../images/logo.png'
import google from '../../images/google.png';
import "firebase/auth";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import {
    handleGoogleSignIn,
    initializeLoginFramework    
} from './LoginManager';
import firebase from "firebase/app";
import { UserContext } from '../../App';

//=====================================================================================

const Login = () => {

    // Initialize Firebase
    initializeLoginFramework();

    //Handle New User:
    const [newUser, SetNewUSer] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        success: false,
    });

    // Error Message:
    const [error, setError] = useState("")

    // Context from app.js
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || {
        from: { pathname: '/' },
    };
    const { login } = {
        login: { pathname: '/login' },
    };

    // Google Sign In
    const googleSignIn = () => {
        handleGoogleSignIn().then((res) => handleResponse(res, true));
    };


    // Handle Response
    const handleResponse = (res, redirect) => {
        //console.log(res.error)
        if (res.error) {
            newUser && setError(res.error)
            !newUser && setError(res.error)
        } else {
            setUser(res);
               setLoggedInUser(res)
            redirect && history.replace(from);
            newUser && setError("")
            !newUser && setError("")
        }
    }

    const { register, handleSubmit, watch, errors } = useForm();
    return (
        <section className='container'>
            <div className='d-flex justify-content-center flex-column align-items-center'>
                <div className='row'>
                    <Link to='/'>
                        <div className='col-md-12 text-center mb-3'>
                            <img
                                style={{ width: '150px', height: '47px' }}
                                src={logo}
                                alt=''
                            />
                        </div>
                    </Link>
                </div>

                <div className='card login-area rounded'>
                    <div className='card-body d-flex justify-content-center align-items-center flex-column'>
                        <h4 className='card-title text-center'>Login With</h4>
                        <div className='social-login'>
                            <button className='btn' onClick={googleSignIn}>
                                <img src={google} alt='google icon' />{' '}
                                <span>Continue with Google</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;