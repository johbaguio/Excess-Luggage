import React, { Component } from 'react';
import './slideshow.css';
import Carousel from 'react-bootstrap/Carousel';

class SlideShow extends Component {
    render() {
        return (
            <div className='wrapper'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-80 slide-pic"
                            src="https://s19.postimg.cc/7330eddjn/surfing.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-80 slide-pic"
                            src="https://s19.postimg.cc/5xdarnx3n/helicopter.jpg" 
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-80 slide-pic"
                            src="https://s19.postimg.cc/f3r019ptv/auroraa1.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default SlideShow;