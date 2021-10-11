import React from 'react'
import logo from './Images/main-logo.svg'
import login from './Images/login.png'
import "./Navbars.css"
const Navbars = () => {
    return (
        <>
            <div class="container-fluid main-header">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 ">
                        <a class="nav-brand responsive" href="#">
                            <img 
                                src={logo} 
                                alt="logo" 
                                width="200"
                                heigth="100"
                            />
                        </a>
                        <a className="nav-buton" href="/login">
                            <img
                                src={login}
                                alt="side-btn"
                                width="30"
                                height="30"
                            />
                        </a>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 main-content">
                    <h3>Cooking gone wrong?</h3> 
                    <p>Order food from favourite restaurants near you.</p> <br/>
                </div>
                <h4>POPULAR CITIES IN INDIA</h4>
                <div className="city-list"><a href="/resturants">Ahmedabad</a></div>
                <div className="city-list"><a href="/resturants">Bangalore</a></div>
                <div className="city-list"><a href="/resturants">Chennai</a></div>
                <div className="city-list"><a href="/resturants">Delhi</a></div>
                <div className="city-list"><a href="/resturants">Gurgaon</a></div>
                <div className="city-list"><a href="/resturants">Hyderabad</a></div>
                <div className="city-list"><a href="/resturants">Kolkata</a></div> 
                <div className="city-list"><a href="/resturants">Mumbai</a></div>
                <div className="city-list"><a href="/resturants">Pune</a></div>
                <div className="city-list"><a href="/resturants">& more.</a></div>
                <div className="nav-food-btn">
                    <a href="/login"><button  type="button" class="btn btn-outline-danger">Order Food Now</button></a>
                </div>
            </div>

        </>
    )
}
export default Navbars;
