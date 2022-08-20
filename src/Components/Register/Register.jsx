import React from 'react';
import './Register.css';
import Navbar from '../Navbar/Navbar';
import { UilArrowRight } from '@iconscout/react-unicons';
import Footer from '../Footer/Footer';

const Register = () => {
  return (
    <>
      <div className="login-wrapper">
        <Navbar />
        <div className="login">
          <h1>Publisher Sign Up</h1>
        </div>
      </div>

      <div className="login-main">
        <input type="text" name="" id="" placeholder='Name'/>
        <input type="text" name="" id="" placeholder='Email'/>
        <input type="text" name="" id="" placeholder='Country'/>
        <button>Register </button>
      </div>


      <div className="Already">
        <div>

          <h1>Do you already have an Account?</h1>
          <button>Sign In<UilArrowRight /></button>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Register