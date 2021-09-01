import React from 'react'
import "./Footer.css"
import facebook from "./Images/facebook.png"
import mail from "./Images/mail.png"
import instagram from "./Images/instagram.png"
import twitter from "./Images/twitter.png"

const Footer = () => {
    return (
        <>
            <div className="container-fluid footer-part">
                <div className="row">
                    <hr />
                    <div className="col-lg-4 col-md-4 col-sm-12 footer1">
                        <p>FOOD-BOWL</p>
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
