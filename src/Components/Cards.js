import React from 'react'
import "./Cards.css"
import card1 from "./Images/no_min_order.svg"
import card2 from "./Images/live_order.svg"
import card3 from "./Images/delivery_order.svg"
import playstore from "./Images/playstore.svg"
import apple from "./Images/apple.svg"
import delivery from "./Images/delivery.svg"

const Cards = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-lg-4 col-md-4 col-sm-12 card-area1">
                        <img
                            src={card1}
                            alt="cards"
                        />
                        <h1>No Minimum Order</h1>
                        <p>Order in for yourself or for the group, with no restrictions on order value</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 card-area1">
                        <img
                            src={card2}
                            alt="cards"
                        />
                        <h1>Live Order Tracking</h1>
                        <p>Know where your order is at all times, from the restaurant to your doorstep</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 card-area1">
                        <img
                            src={card3}
                            alt="cards"
                        />
                        <h1>Lightning-Fast Delivery</h1>
                        <p>Experience Swiggy's superfast delivery for food delivered fresh & on time</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-5 col-md-5 col-sm-12 card-area2">
                        <h1>Resturants in your pockets</h1>
                        <p>Now you can order from your favorite restaurants & track on the go, with the all-new food-bowl app.</p>
                        <img
                            className="card-area-image mt-2 me-3"
                            src={playstore}
                            alt="cards"
                        />
                        <img
                            className="card-area-image mt-2"
                            src={apple}
                            alt="cards"
                        />
                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-12">
                        <img
                            src={delivery}
                            alt="cards"
                            width="100%"
                        />
                    </div>
                </div>
                {/* <div className="row">
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
                </div> */}
            </div>
        </>
    )
}
export default Cards;
