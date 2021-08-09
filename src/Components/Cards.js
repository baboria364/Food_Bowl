import React from "react";
import { Card, Button } from 'react-bootstrap'
import logo from './images/logo.svg'
function Cards() {
    return (
        <div className="container-fluid card-menu mb-1 mt-1">
            <div className="row">
                <div className='col-4'>
                    <Card className=' ms-3 me-2'  id='card-style' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={logo} />
                        <Card.Body className='card-body'>
                            <Card.Title><strong>No Minimum Order</strong></Card.Title>
                            <Card.Text>
                                Order in for yourself or for the group, with no restrictions on order value.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>

    );
}

export default Cards;