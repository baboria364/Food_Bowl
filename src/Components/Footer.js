import React from 'react'
import "./Footer.css"
import facebook from "./Images/facebook.png"
import mail from "./Images/mail.png"
import instagram from "./Images/instagram.png"
import twitter from "./Images/twitter.png"
import logo from './Images/main-logo.svg'
import playstore from "./Images/playstore.svg"
import apple from "./Images/apple.svg"

const Footer = () => {
    return (
        <>
            <div className="container-fluid footer-part">
            <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-4 footer-area1">
                        <p>COMPANY</p>
                        <div className="footer-link"><a href=''>About Us</a></div>
                        <div className="footer-link"><a href=''>Team</a></div>
                        <div className="footer-link"><a href=''>Careers</a></div>
                        <div className="footer-link"><a href=''>Blogs</a></div>
                        <div className="footer-link"><a href=''>Corporate</a></div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 footer-area1">
                        <p>CONTACT</p>
                        <div className="footer-link"><a href=''>Help & Support</a></div>
                        <div className="footer-link"><a href=''>Partner with us</a></div>
                        <div className="footer-link"><a href=''>Head Office</a></div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4 footer-area1">
                        <p>LEGAL</p>
                        <div className="footer-link"><a href=''>Terms & Conditions</a></div>
                        <div className="footer-link"><a href=''>Refund Policy</a></div>
                        <div className="footer-link"><a href=''>Privacy Policy</a></div>
                        <div className="footer-link"><a href=''>Offer Terms</a></div>
                        <div className="footer-link"><a href=''>Phishing & Fraud</a></div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 footer-area1">
                        <img
                            className="footer-area-image mt-5 mb-5 me-3"
                            src={playstore}
                            alt="cards"
                        />
                        <img
                            className="footer-area-image"
                            src={apple}
                            alt="cards"
                        />
                    </div>
                </div>
                <div className="row">
                    <hr />
                    <div className="col-lg-4 col-md-4 col-sm-12 footer1 mb-2">
                        <a href="/">
                            <img 
                                src={logo}
                                alt="logo"
                                width="150"
                            />
                        </a>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 footer2">
                        <p>&copy;{new Date().getFullYear()} | ALL Rights Reserved</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 footer3">
                        <a href="https://facebook.com/" target="blank">
                            <img
                                className="icon-link"
                                src={facebook}
                                width="25"
                            />
                        </a>
                        <a href="https://mail.google.com/" target="blank">
                            <img
                                className="icon-link"
                                src={mail}
                                width="25"
                            />
                        </a>
                        <a href="https://www.instagram.com/" target="blank">
                            <img
                                className="icon-link"
                                src={instagram}
                                width="25"
                            />
                        </a>
                        <a href="https://twitter.com/" target="blank">
                            <img
                                className="icon-link"
                                src={twitter}
                                width="25"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer
