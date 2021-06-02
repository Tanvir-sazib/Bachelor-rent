import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
// import firebase from "firebase/app";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart,
  faHdd,
  faCommentAlt,
  faPlus,
  faUserPlus,
  faSignOutAlt,
  faTasks,
} from '@fortawesome/free-solid-svg-icons';
import { AdminContext, UserContext } from '../../../App';

const Sidebar = () => {

  // Admin context from App.js
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useContext(AdminContext);

  const signOut = () => {
    setLoggedInUser({});
  };
  
  return (
    <div className='sidebar d-flex flex-column justify-content-between py-5 px-4'>
      <ul className='list-unstyled'>

        {!loggedInUser ? 
        // For Admin Only
          (<>
            <li>
              <Link to='/bookingList' className='text-dark'>
                <FontAwesomeIcon icon={faHdd} /> <span>Booking List</span>
              </Link>
            </li>
            <li>
              <Link to='/bookingList' className='text-dark'>
                <FontAwesomeIcon icon={faHdd} /> <span>House List</span>
              </Link>
            </li>
            <li>
              <Link to='/addHouse' className='text-dark'>
                <FontAwesomeIcon icon={faPlus} /> <span>Add House</span>
              </Link>
            </li>
            <li>
              <Link to='/addHouse' className='text-dark'>
                <FontAwesomeIcon icon={faUserPlus} /> <span>My Rent</span>
              </Link>
            </li>
          </>):
          // For User Only
            (<>
            <li>
              <Link to='/addHouse' className='text-dark'>
                <FontAwesomeIcon icon={faHdd} /> <span>Booking List</span>
              </Link>
            </li>
            <li>
              <Link to='/addRentHouse' className='text-dark'>
                <FontAwesomeIcon icon={faPlus} /> <span>Add Rent House</span>
              </Link>
            </li>
            <li>
              <Link to='/addHouse' className='text-dark'>
                <FontAwesomeIcon icon={faUserPlus} /> <span>My Rent</span>
              </Link>
            </li>
          </>)
        }
      </ul>
    </div>
  );
};

export default Sidebar;