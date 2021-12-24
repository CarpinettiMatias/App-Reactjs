import React from 'react';
import { Carousel } from 'react-bootstrap'

const Carrusel = () => {
    return (
        <Carousel fade>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1490810194309-344b3661ba39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2648&q=80"
            alt="First slide"
            style={{height:'600px'}}
            />
            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1616410011236-7a42121dd981?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
            alt="Second slide"
            style={{height:'600px'}}
            />

            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1626686707291-7bda5c45e8a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
            alt="Third slide"
            style={{height:'600px',
                    width:'100%'}}
            />

            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    );
};

export default Carrusel;
