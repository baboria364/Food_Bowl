import React from 'react'
import logo from './Images/logo.svg'
import logo1 from './Images/bars-solid.svg'
import clsx from 'clsx';
import "./Navbars.css"
import { Divider, List, makeStyles, SwipeableDrawer } from '@material-ui/core'
import ListItem from '@material-ui/core/ListItem';
const Navbars = () => {
    const useStyles = makeStyles({
        list: {
            width: 400,
            paddingLeft: 10,
            paddingRight: 5,
        },
        fullList: {
            width: 'auto',
        },
    });
    const classes = useStyles();
    const [state, setState] = React.useState({
        left: false,
    });
    const toggleDrawer = (anchor, open) => (event) => {

        setState({ ...state, [anchor]: open });
        event.preventDefault();
    };
    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem>
                    <div>
                    <button type="button" class="btn btn-outline-dark me-5">log in</button>
                    </div>
                    <div>
                    <button type="button" class="btn btn-outline-dark">Sign up</button>
                    </div>
                </ListItem>
            </List>
            <Divider />
        </div>
    );
    return (
        <>
            <div class="container-fluid main-header">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 ">
                        <a class="nav-brand responsive" href="#">
                            <img src={logo} alt="" />
                        </a>
                        <a className="nav-buton" href="/">
                            <img
                                onClick={toggleDrawer("right", true)}
                                src={logo1}
                                alt="side-btn"
                                width="30"
                                height="24"
                            />
                            <SwipeableDrawer
                                anchor={"right"}
                                open={state["right"]}
                                onClose={toggleDrawer("right", false)}
                                onOpen={toggleDrawer("right", true)}
                            >
                                {list("right")}
                            </SwipeableDrawer>
                        </a>
                    </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 main-content">
                    <h3>Cooking gone wrong?</h3>
                    <p>Order food from favourite restaurants near you.</p>
                </div>
                <div className="col-lg-6 col-md-8 col-sm-10 header-cities">
                    <select class="form-select form-select-lg">
                        <option selected>Select your delivery location</option>
                        <option value="1">Ahmedabad</option>
                        <option value="2">Bangalore</option>
                        <option value="3">Chennai</option>
                        <option value="4">Chennai</option>
                        <option value="5">Delhi</option>
                        <option value="6">Gurgaon</option>
                        <option value="7">Hyderabad</option>
                        <option value="8">Kolkata</option>
                        <option value="9">Mumbai</option>
                        <option value="10">Pune</option>
                    </select>
                    <h4>POPULAR CITIES IN INDIA</h4>
                </div>
                <div className="city-list"><a>Ahmedabad</a></div>
                <div className="city-list"><a>Bangalore</a></div>
                <div className="city-list"><a>Chennai</a></div>
                <div className="city-list"><a>Delhi</a></div>
                <div className="city-list"><a>Gurgaon</a></div>
                <div className="city-list"><a>Hyderabad</a></div>
                <div className="city-list"><a>Kolkata</a></div>
                <div className="city-list"><a>Mumbai</a></div>
                <div className="city-list"><a>Pune</a></div>
                <div className="city-list"><a>& more.</a></div>
            </div>
        </>
    )
}
export default Navbars;

