import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import codeImg from '../Assets/2004161.jpg'
import macImg from '../Assets/3260626.jpg'

class CarouselBox extends Component {
    render() {
        return (
            <Carousel fade>
                <Carousel.Item>
                    <img className="d-block w-auto mw-100" src={ macImg } alt="mac"/>
                    <Carousel.Caption>
                        <h3>Simple image</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-auto mw-100" src={ codeImg } alt="code"/>
                    <Carousel.Caption>
                        <h3>Simple image 2</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselBox;