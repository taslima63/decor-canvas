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
                    <div className="carousal-caption mt-2">
                        <h3 style={{ color: '#606060FF' }}>Here Starts Your Positivity</h3>
                        <p className='text-dark ' style={{ fontWeight: '500', fontFamily: "'Roboto',sans-serif" }}>Underneath all I design lies the solid belief that beauty is a positive force.</p>
                    </div>
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
                    <div className="carousal-caption">
                        <h3 style={{ color: '#606060FF' }}>A Room Is Not A Room Without Natural Light.</h3>
                        <p className='text-dark ' style={{ fontWeight: '500', fontFamily: "'Roboto',sans-serif" }}>A house is much more than a mere shelter—it should lift us emotionally and spiritually.</p>
                    </div>
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
                    <div className="carousal-caption">
                        <h3 style={{ color: '#606060FF' }}>Never Seen Elegance Go Out of Style.</h3>
                        <p className='text-dark' style={{ fontWeight: '500', fontFamily: "'Roboto',sans-serif" }}>
                            For a house to be successful, the objects in it must communicate with one another, respond and balance one another.
                        </p>
                    </div>
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
                    <div className="carousal-caption">
                        <h3 style={{ color: '#606060FF' }}>Design Is Thinking Made Visual.</h3>
                        <p className='text-dark' style={{ fontWeight: '500', fontFamily: "'Roboto',sans-serif" }}>
                            There are three responses to a piece of design – yes, no, and WOW! Wow is the one to aim for.
                        </p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );

};

export default Banner;