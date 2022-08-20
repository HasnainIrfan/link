import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './Main.css';
import MainPC from '../../img/Main/main1.png';
// import Cloud from '../../img/Main/cloud.png';
// import Dollar from '../../img/Main/dollar.png';
// import LevelUp from '../../img/Main/level.png';
// import Paper from '../../img/Main/paper.png';
// import Search from '../../img/Main/search.png';
// import Specker from '../../img/Main/speaker.png';
import Choose1 from '../../img/Main/choose1.png';
import Choose2 from '../../img/Main/choose2.png';
import Choose3 from '../../img/Main/choose3.png';
import Link1 from '../../img/Main/link1.png';
import Link2 from '../../img/Main/link2.png';
import Info from '../../img/Main/info.png';
import Process1 from '../../img/Main/process1.png';
import Process2 from '../../img/Main/process2.png';
import Process3 from '../../img/Main/process3.png';
import Process4 from '../../img/Main/process4.png';
import ServiceIcon1 from '../../img/Main/icon-1.png';
import ServiceIcon2 from '../../img/Main/icon-2.png';
import ServiceIcon3 from '../../img/Main/icon-3.png';
import ServiceIcon4 from '../../img/Main/icon-4.png';
import ServiceIcon5 from '../../img/Main/icon-5.png';
import ServicePreview1 from '../../img/Main/preview-5.png';

import { UilCheck } from '@iconscout/react-unicons'
import Footer from '../../Components/Footer/Footer';

const Main = () => {
  return (
    <>
      <div className="main-wrapper">
        <Navbar />
        <div className="main">

          <div className="main-l">
            <h2>Discover your users' experience</h2>
            <h1>The Power of the Link</h1>
            <h4>
              Track,get details static on your traffic
              and get more visitors thanks to your search
              engine for Exclusuve Content.
            </h4>
            <button className='main-btn'>Get Started</button>
          </div>

          <div className="main-r">
            <img src={MainPC} alt="" />
            {/* <img src={Dollar} alt="" />
            <img src={Cloud} alt="" />
            <img src={LevelUp} alt="" />
            <img src={Search} alt="" />
            <img src={Specker} alt="" />
            <img src={Paper} alt="" /> */}
          </div>
        </div>
      </div>

      <div className="choose-wrapper">
        <div className="choose-header">
          <h1>Why Choose us</h1>
          <h3>UnLEASH The power of the link</h3>
        </div>
        <div className="choose-main">
          <div className="choose-mainBox">
            <img src={Choose1} alt="" />
            <h3>Tracking system</h3>
            <h5>Track individual link analytics, measure
              their performance and optimize every
              touchpoint with our system. All in real-time.
            </h5>
          </div>

          <div className="choose-mainBox">
            <img src={Choose2} alt="" />
            <h3>Search Engine</h3>
            <h5>Get new visitors without your traffic.
              Each link is automatically inserted into our
              Search Engine for exclusive content.
            </h5>
          </div>

          <div className="choose-mainBox">
            <img src={Choose3} alt="" />
            <h3>Automatic SEO</h3>
            <h5>increase your visibility on the internet,
              each content entered will be automatically
              indexed on Google.
            </h5>
          </div>
        </div>
      </div>

      <div className="link-wapper">
        <div className="link">
          <img src={Link1} alt="" />
          <div className="link-main">
            <h1>Ready to start</h1>
            <h2>by creating your first URL</h2>
            <div className="link-input">
              <input type="text" placeholder='Enter a Looooong URL to begin' />
              <button className='link-btn'>Create</button>
            </div>
          </div>
          <img src={Link2} alt="" />
        </div>
      </div>

      <div className="info-wrapper">
        <div className="info-l">
          <img src={Info} alt="" />
        </div>
        <div className="info-r">
          <h1>The Best Way to Increase and Monetize your Content</h1>
          <div></div>
          <h5>
            Signup for an account in just one minute, shrink your URLs,
            get detailed statistics on your traffic and get profits
            without ruining your users’ experience. All links will
            be also placed  in our Search Engine, getting visitors
            without your traffic.
          </h5>
          <ul>
            <li><span><UilCheck /></span>No invasive ads with higher CPMs</li>
            <li><span><UilCheck /></span>Timely and secure payments</li>
            <li><span><UilCheck /></span>Fast and easy redirect system</li>
            <li><span><UilCheck /></span>Premium system to create passive income</li>
          </ul>
          <button className="info-btn">Get Ready</button>
        </div>
      </div>

      <div className="work-wrapper">
        <div className="work">
          <div className="work-heading">
            <h3>Work Flow</h3>
            <h1>Start in 4 Easy Steps</h1>
          </div>

          <div className="work-container">

            <div className="work-main">
              <div className="work-box">
                <div className="work-mainBox">
                  <img src={Process1} alt="" />
                </div>
                <span><div></div></span>
              </div>
              <div className="work-title">
                <h4>Register</h4>
              </div>
            </div>

            <div className="work-main">
              <div className="work-box">
                <div className="work-mainBox">
                  <img src={Process2} alt="" />
                </div>
                <span><div></div></span>
              </div>
              <div className="work-title">
                <h4>Shrink</h4>
              </div>
            </div>

            <div className="work-main">
              <div className="work-box">
                <div className="work-mainBox">
                  <img src={Process3} alt="" />
                </div>
                <span><div></div></span>
              </div>
              <div className="work-title">
                <h4>Share</h4>
              </div>
            </div>

            <div className="work-main">
              <div className="work-box">
                <div className="work-mainBox">
                  <img src={Process4} alt="" />
                </div>
              </div>
              <div className="work-title">
                <h4>Earn</h4>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="service-wrapper">
        <div className="service-heading">
          <h3>THE POWER OF YOUR LINKS</h3>
          <h1>Services We Provide</h1>
          <div className='line'></div>
        </div>
        <div className="service-main">

          <div className="service-top">
            <div className="service-smallBox">
              <img src={ServiceIcon1} alt="" />
              <h4>Real Time Analytics</h4>
            </div>

            <div className="service-smallBox">
              <img src={ServiceIcon3} alt="" />
              <h4>Real Time Analytics</h4>
            </div>

            <div className="service-smallBox">
              <img src={ServiceIcon5} alt="" />
              <h4>Real Time Analytics</h4>
            </div>

            <div className="service-smallBox">
              <img src={ServiceIcon4} alt="" />
              <h4>Real Time Analytics</h4>
            </div>

            <div className="service-smallBox">
              <img src={ServiceIcon2} alt="" />
              <h4>Real Time Analytics</h4>
            </div>
          </div>

          <div className="service-bottom">

            <div className="service-b-l">
              <img src={ServicePreview1} alt="" />
            </div>

            <div className="service-b-r">
              <h1>Real Time Analytics</h1>
              <p>
                Free yourself from spreadsheets
                and silos by building an intuitive
                dashboard for the links you already use.
                AdShrink tracks your customer's experience
                on every link and every channel, making
                it easier than ever to drill down into
                campaigns or channels from a macro and micro
                level.
              </p>
              <p>
                Know your audience. Analyse in detail what brings you
                the most income and what strategies you should adopt.
              </p>
              <button className="service-btn">Learn more</button>
            </div>

          </div>
        </div>
      </div>

      <div className="love">
        <div className="love-heading">
          <h1><span>Google</span> only loves you</h1>
          <h2>when everyone else <span>loves</span> you first</h2>
          <div className='line'></div>
        </div>
        <div className="love-main">
          <div className="love-box">
            <div>
              <h2>200,000 +</h2>
              <h4>Registered Users</h4>
            </div>
            <div>
              <div className='line2'></div>
            </div>
          </div>

          <div className="love-box">
            <div>
              <h2>6,000,000 +</h2>
              <h4>Created URLs</h4>
            </div>
            <div>
              <div className='line2'></div>
            </div>
          </div>

          <div className="love-box">
            <div>
              <h2>80,000,000 +</h2>
              <h4>Click on Links</h4>
            </div>
            
          </div>
        </div>
        <button className="love-btn">Become Our Partner Now</button>
      </div>

      <Footer/>

    </>
  )
}

export default Main