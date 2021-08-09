import React from 'react';
import { Carousel } from 'react-bootstrap'
import M1 from './images/img1.jpg'
import M2 from './images/img2.jpg'
const Carousels = () => {
    return (
        <>
            <div className="col-11 mx-auto  ">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={M1} width='250px' height='550px'
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={M2} width='250px' height='550px'
                            alt="First slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}
export default Carousels;
