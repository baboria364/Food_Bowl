import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import logo from './images/logo.svg'
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
const Navbars = () => {
    return (
        <>
            <div className="row">
                <div className="col-11 mx-auto  ">
                    <Navbar expand="lg">
                        <Navbar.Brand >
                            <NavLink to="/">
                                <img src={logo}
                                    alt="hungry point"
                                    width="220"
                                    height="70">
                                </img>
                            </NavLink>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav className=" mr-auto my-2 my-lg-0 me-5">
                                <NavLink activeClassName="menu_active" className="nav-link" to="/login"><strong>Log in</strong></NavLink>
                            </Nav>
                            <Nav className=" mr-auto my-2 my-lg-0 me-5">
                                <NavLink activeClassName="menu_active" className="nav-link" to="/signup"><strong>Sign up</strong></NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <hr />
                </div>
            </div>
        </>
    )
}
export default Navbars;
