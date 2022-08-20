import React from 'react';
import './Footer.css';
import Logo from '../../img/Navbar/logo.png';
import Email from '../../img/Footer/email.png';

import { UilStopwatch } from '@iconscout/react-unicons';
import { UilFacebookF } from '@iconscout/react-unicons';
import { UilInstagram } from '@iconscout/react-unicons';

const Footer = () => {
    return (
        <div className="footer-wrapper">

            <div className="footer-t">
                <div className="footer-logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="footer-email">
                    <img src={Email} alt="" />
                    <div>
                        <h4>E-mail</h4>
                        <h3>contact.us@adshrink.it</h3>
                    </div>
                </div>
            </div>

            <div className="footer-b">
                <div className="footer-bBox">
                    <h1>Our Company</h1>
                    <ul>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>FAQ</li>
                        <li>Blog</li>
                        <li>Payout Rates</li>
                    </ul>
                </div>

                <div className="footer-bBox">
                    <h1>Our Services</h1>
                    <ul>
                        <li>Register</li>
                        <li>Login</li>
                        <li>DMCA</li>
                        <li>Privacy Police</li>
                        <li>Terms and Conditions</li>
                    </ul>
                </div>

                <div className="footer-bBox">
                    <h1>Recent Articles</h1>

                    <h3>Earn on the Internet without Knowledge</h3>
                    <h5><UilStopwatch /> 17 Gennaio 2021</h5>

                    <h3>How to Become a Premium User</h3>
                    <h5><UilStopwatch /> 17 Gennaio 2021</h5>
                </div>

                <div className="footer-bBox">
                    <h1>Contact Us</h1>
                    <input type="text" placeholder='Email' />
                    <textarea type="text" placeholder='Message' />
                    <button className="footer-btn">Send Now</button>
                </div>

            </div>

            <div className="footer-d">
                <div className="footer-main">
                    <div className="footer-d-l">
                        <h3>
                            Copyrights By Adshrink.it - 2021 | All Rights Reserved.
                        </h3>
                    </div>
                    <div className="footer-d-r">
                        <div className="copy-box"><UilInstagram/></div>
                        <div className="copy-box"><UilFacebookF/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer