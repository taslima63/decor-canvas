import React from 'react';
import myImage from '../../../images/me1.jpg';
import './About.css';
const About = () => {
    return (
        <div className='container'>
            <h1 className='text-center my-5' style={{ color: '#D6ED17', fontSize: '35px', fontFamily: "'Poppins', sans-serif" }}>Wow! a whole page just About me!</h1>
            <div className='about-me'>
                <div className='myImage '>
                    <img src={myImage} alt="" />
                </div>
                <div className='details p-3 my-2'>
                    <h3 style={{ fontFamily: "'Roboto', sans-serif", fontSize: '20px', fontWeight: "500" }} className='fs-2' >Me talking about myself</h3>
                    <div style={{ border: "1px solid #D6ED17", }} className='mb-4'></div>
                    <p style={{ color: '#606060', fontSize: '18px', fontFamily: "'Roboto', sans-serif", fontWeight: "500" }} className='punch-line'>A passionate Interior Designer from Tokyo,Japan who loves to play with Color and Nature and create realaxing and enthusiastic environment for my clients.  </p>

                    <ul>
                        <li>Delivered inspired, efficient interior designs for commercial and residential markets. Exceeded specs for hundreds of satisfied clients.</li>

                        <li>Scored the re-compete contract for Radisson Hotels.</li>

                        <li>Eleven of my projects written up favorably in Dezeen Magazine.</li>

                        <li>  Created high-quality designs efficiently in a fast-paced environment.</li>

                        <li> Received commendations from every client for professionalism and creativity.</li>

                        <li> Kept all projects under budget and on time.</li>

                    </ul>
                </div>


            </div>
            <div className='mx-auto my-5'>
                <h4 className='text-center' style={{
                    color: "#D6ED10", fontFamily: "'Roboto', sans-serif", fontSize: '20px', fontWeight: "500"
                }}>Certifications</h4>
                <div className='text-center mx-auto w-75'>
                    <ul className='certificates text-left'>
                        <li>CIDQ Interior Design Certification</li>

                        <li>LEED Certification</li>

                        <li>
                            NARI Kitchen and Bath Remodeling Certification
                        </li>

                    </ul>
                </div>
            </div>
        </div >
    );
};

export default About;