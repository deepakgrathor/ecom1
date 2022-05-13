import React from 'react'
import './Footer.css'
import logo from './logo.png'

const Footer = () => {
    return (
        <>
            <div className="main-footer">
                <div className="top-footer">
                    <div className="logo-section">
                        <img src={logo} alt="" />
                        <p>Behind the word mountains, far from the countries Vokalia and Consonantia, there</p>
                        <div className="social-icon">
                            <img src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png" alt="" /><img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new--v1.png" alt="" /><img src="https://img.icons8.com/ios-filled/50/ffffff/youtube-play.png" alt="" /><img src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png" alt="" />
                        </div>
                    </div>
                    <div className="usefull-links1">
                        <div className="usefull">
                            <h2>Usefull Links</h2>
                        </div>
                        <div className="useful-a">
                            <a href="#">Home</a><a href="#">Brands</a><a href="#">Services</a><a href="#">Blog</a></div>
                    </div>
                    <div className="usefull-links2">
                        <div className="useful-a">
                            <a href="#">Home</a><a href="#">Home</a><a href="#">Home</a><a href="#">Home</a></div>
                    </div>
                    <div className="subscribe">
                        <h2>Subscribe Now</h2>
                        <p>Don’t miss our future updates! Get Subscribed Today!</p>
                        <input type="text" placeholder='Your Email Here' />
                    </div>
                </div>
                <div className="bottom-footer">
                    <div className="copyright">
                        <h2>© 2022 TataEcom | All rights reserved.</h2>
                    </div>
                    <div className="social-icon">
                        <img src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png" alt="" /><img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new--v1.png" alt="" /><img src="https://img.icons8.com/ios-filled/50/ffffff/youtube-play.png" alt="" /><img src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png" alt="" />
                    </div>
                    <div className="download-app">
                        <h2>Download App</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
