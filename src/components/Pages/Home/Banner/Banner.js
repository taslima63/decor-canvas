import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

import banner1 from '../../../../images/Banner/banner1.jpg';
import banner2 from '../../../../images/Banner/banner2.jpg';
import banner3 from '../../../../images/Banner/banner3.jpg';
import banner4 from '../../../../images/Banner/banner4.jpg';
const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <div className='caro-img'>
                    <img
                        className="d-block w-100 "
                        src={banner1}
                        alt="Second slide"
                    />
                </div>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className='caro-img'>
                    <img
                        className="d-block w-100 "
                        src={banner2}
                        alt="Second slide"
                    />

                </div>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className='caro-img'>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Second slide"
                    />

                </div>

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className='caro-img'>
                    <img
                        className="d-block w-100"
                        src={banner4}
                        alt="Second slide"
                    />

                </div>

                <Carousel.Caption>
                    <h3>Fourth Slide </h3>
                    <p>

                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );

};

export default Banner;