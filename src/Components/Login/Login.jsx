import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Login.css';
import { UilArrowRight } from '@iconscout/react-unicons'
import Footer from '../Footer/Footer';

const Login = () => {
    return (
        <>
            <div className="login-wrapper">
                <Navbar />
                <div className="login">
                    <h1>Publisher Sign In</h1>
                </div>
            </div>

            
      <div className="login-main">
        <input type="text" name="" id="" placeholder='Username or e-mail'/>
        <input type="text" name="" id="" placeholder='Password'/>
        <button>Login </button>
      </div>

            <div className="Already">
                <div>

                    <h1>You Dont have an Account?</h1>
                    <button>Register<UilArrowRight /></button>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default Login