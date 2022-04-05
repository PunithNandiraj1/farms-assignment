import React from 'react';
import { FaMediumM , FaTelegramPlane } from 'react-icons/fa';
import { FiTwitter , FiGithub } from 'react-icons/fi';
import { SiDiscord } from 'react-icons/si';
import Logo from '../../images/logo.png';

import './Footer.css';

const Footer = () => {
  return (
    <div className="el-footer">
        <div className="footer">
            <div className="footer-container">
                <div>
                    <p className="title"> Help <span></span> </p>
                    <ul>
                        <li> FAQ </li>
                        <li> How to participate </li>
                    </ul>
                    
                </div>
                <div>
                    <p className="title"> Social <span></span></p>
                    <div className="community pc-community">
                        <div className="community-line">
                            <div className="community-item">
                                <FiTwitter/>
                                <span> Twitter </span>
                            </div>
                            <div className="community-item">
                                <FiGithub/>
                                <span> Github </span>
                            </div>
                        </div>
                        <div className="community-line">
                            <div className="community-item">
                                <FaMediumM/>
                                <span> Medium </span>
                            </div>
                            <div className="community-item">
                                 <SiDiscord/>
                                <span> Discord </span>
                            </div>
                            <div className="community-item">
                                <FaTelegramPlane/>
                                <span> Telegram </span>
                            </div>
                        </div>
                        </div>
                       
                </div>
                <div>
                <div className="contact-us">
                            <img src={Logo} alt="" />
                            <div className="contact"> Contact us: contactbifarms@gmail.com</div>
                        

                    </div>
                </div>
            </div>
            <div className="downDiv">
                <div>
                    <span> Copyright @ 2022 . Bifarms Network All rights reserved</span>
                </div>
                <div>
                    <span>
                        <a href="" className="link-class">Terms of Service </a>
                        <a href="" className="link-class"> Privacy Policy </a>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer