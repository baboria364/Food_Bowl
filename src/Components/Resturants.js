import React from 'react'
import "./Resturants.css"
import logo from './Images/login-logo.svg'
import Cart from './Images/Cart.svg'
import Help from './Images/Help.svg'
import Sign from './Images/Sign In.svg'
import Footer from './Footer'
import location from './Images/placeholder.png'
const Resturants = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">
                        <img
                            src={logo}
                            width="170"
                            alt="logo"
                        />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="/">
                                    <img
                                        src={Help}
                                        width="60"
                                    />
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">
                                    <img
                                        src={Cart}
                                        width="60"
                                    />
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/login">
                                    <img
                                        src={Sign}
                                        width="70"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container-fluid resturant-content1">
                <div className="main-content100">
                    <h3>Welcome [UserName]</h3>
                    <h4>Great restaurants in [CityName], delivering to you</h4>
                    <p>Set exact location to find the right restaurants near you.</p>
                    <input type="text" class="form_control" id="inputPassword" placeholder="Enter street name, area etc..." />
                    {/* <a href="something" class="button1">Button</a> */}
                </div>
            </div>
            <div className="container-fluid resturant-content bg-light">
                <div className="main-content200">
                    <h4>About the food culture in [CityName]</h4>
                    <p>Order food & beverages online from restaurants near & around you. We deliver food from your neighborhood local joints, your favorite cafes, luxurious & elite restaurants in your area. Exciting bit? We place no minimum order restrictions! Order in as little (or as much) as you'd like.</p>
                </div>
                <div className="main-content300">
                    <h3 className="mt-5 mb-5">Popular restaurants in and around [CityName]</h3>
                    <div className="row">
                        <div class="col-lg-3 col-md-3 col-sm-4 card-food">
                            <img
                                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ikiuotxsvgfju7l51cgj"
                                class="card-img-top"
                                alt="img"
                            />
                            <div class="card-body">
                                <h5 class="card-title">Resturant No 1</h5>
                                <hr />
                                <div className="row">
                                    <div className="col-6"><p class="card-text">Indian Pure Veg Food</p></div>
                                    <div className="col-6">
                                    <p class="card-text"><img src={location} width="20"></img>Whitefield</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card-btn">
                                <a href="#" class="btn btn-outline-danger">Order Now!</a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-4 card-food">
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wsklu91frt61zterljox" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Resturant No 2</h5>
                                <hr />
                                <div className="row">
                                    <div className="col-6"><p class="card-text">American, Fast Food</p></div>
                                    <div className="col-6">
                                        <p class="card-text"><img src={location} width="20"></img>Marathali</p>
                                    </div>  
                                </div>
                            </div>
                            <div class="card-btn">
                                <a href="#" class="btn btn-outline-danger">Order Now!</a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-4 card-food">
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/q188vy26pn8zypgdwvrv" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Resturant No 3</h5>
                                <hr />
                                <div className="row">
                                    <div className="col-6"><p class="card-text">Punjabi Special Khanna</p></div>
                                    <div className="col-6">
                                        <p class="card-text"><img src={location} width="20"></img>Marathali</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card-btn">
                                <a href="#" class="btn btn-outline-danger">Order Now!</a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-4 card-food">
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/hpqf0rnwybjck3e7vvt1" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Resturant No 4</h5>
                                <hr />
                                <div className="row">
                                    <div className="col-6"><p class="card-text">Biryani, Chicken, Punjabi Thali</p></div>
                                    <div className="col-6">
                                        <p class="card-text"><img src={location} width="20"></img>Marathali</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card-btn">
                                <a href="#" class="btn btn-outline-danger">Order Now!</a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-4 card-food">
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ehiyvjkl7ymbuwhbxxja" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Resturant No 5</h5>
                                <hr />
                                <div className="row">
                                    <div className="col-6"><p class="card-text">Pizzas, Italian, Pastas, Beverages</p></div>
                                    <div className="col-6">
                                        <p class="card-text"><img src={location} width="20"></img>Marathali</p>
                                    </div>                               
                                </div>
                            </div>
                            <div class="card-btn">
                                <a href="#" class="btn btn-outline-danger">Order Now!</a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-4 card-food">
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/yu9qn1hileenywrj45gb" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Resturant No 6</h5>
                                <hr />
                                <div className="row">
                                    <div className="col-6"><p class="card-text">Ice Cream, Bakery, Desserts</p></div>
                                    <div className="col-6">
                                        <p class="card-text"><img src={location} width="20"></img>Marathali</p>
                                    </div>            
                                </div>
                            </div>
                            <div class="card-btn">
                                <a href="#" class="btn btn-outline-danger">Order Now!</a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-4 card-food">
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/zxjuokhvejeediqr5e4f" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Resturant No 7</h5>
                                <hr />
                                <div className="row">
                                    <div className="col-6"><p class="card-text">Thali, North Indian, Indian</p></div>
                                    <div className="col-6">
                                        <p class="card-text"><img src={location} width="20"></img>Marathali</p>
                                    </div>                                    
                                </div>
                            </div>
                            <div class="card-btn">
                                <a href="#" class="btn btn-outline-danger">Order Now!</a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-4 card-food">
                            <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/eytnjn7voh1fnkzoypq8" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Resturant No 8</h5>
                                <hr />
                                <div className="row">
                                    <div className="col-6"><p class="card-text">South Combo Indian Food</p></div>
                                    <div className="col-6">
                                        <p class="card-text"><img src={location} width="20"></img>Marathali</p>
                                    </div>                                   
                                </div>
                            </div>
                            <div class="card-btn">
                                <a href="#" class="btn btn-outline-danger">Order Now!</a>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
            < Footer />
        </>
    )
}
export default Resturants;
