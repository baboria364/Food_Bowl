import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/img2.png"
import Common from './Common'

const Home = () => {
    return (
        <>
        <Common 
            name="Let Strike up a conversation with "
            imgsrc={web}
            visit="/register"
            btname="Create an account" 
        />
        </>
    )
}
export default Home;





{/* <div className="container-fluid nav_bg">
<div className="row">
    <div className="col-10 mx-auto  ">
        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
        </div>
    </div>
</div>
</div> */}
