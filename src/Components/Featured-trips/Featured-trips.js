import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import './featured-trips.css';
import us from './../../Images/us.jpg';
import jo from './../../Images/jo.jpg';
import cho from './../../Images/cho.jpg';


class FeaturedTrips extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='container1'>
                    <Card className='card-style featured' style={{ width: '16rem' }}>
                        <Card.Img variant="top" src={jo} alt="Jo's pic" className='pics' />
                        <Card.Body>
                            <Card.Title>Vatican City</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                            <Button variant="primary">Read more</Button>
                        </Card.Body>
                    </Card>
                    <Card className='card-style featured' style={{ width: '16rem' }}>
                        <Card.Img variant="top" src={us} className='pics'/>
                        <Card.Body>
                            <Card.Title>Venezia</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                            <Button variant="primary">Read more</Button>
                        </Card.Body>
                    </Card>
                    <Card className='card-style featured' style={{ width: '16rem' }}>
                        <Card.Img variant="top" src={cho} className='pics' />
                        <Card.Body>
                            <Card.Title>Milano</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                            <Button variant="primary">Read more</Button>
                        </Card.Body>
                    </Card>
                </div>
            </React.Fragment>
        )
    }
}

export default FeaturedTrips;