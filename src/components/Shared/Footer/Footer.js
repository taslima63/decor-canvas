import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import {
    faGithubAlt,
    faGoogle,
    faFacebook,
    faTwitter,
    faInstagram,
    faYoutube
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='mt-5'>
            <footer>
                <div className="footer-content ">
                    <h3 style={{ color: '#d6ed17' }}>Decor Canvas</h3>
                    <p className='px-3'>“Design is coming to grips with one's real lifestyle, one's real place in the world. Rooms should not be put together for show but to nourish one's well-being.” —Albert Hadley</p>

                    <ul className="socials">
                        <li><FontAwesomeIcon icon={faFacebook} style={{ color: '#d6ed17' }} size="lg" bounce /></li>
                        <li><FontAwesomeIcon icon={faInstagram} style={{ color: '#d6ed17' }} size="lg" bounce /></li>
                        <li><FontAwesomeIcon icon={faTwitter} style={{ color: '#d6ed17' }} size="lg" bounce /></li>
                        <li><FontAwesomeIcon icon={faYoutube} style={{ color: '#d6ed17' }} size="lg" bounce /></li>

                    </ul>
                </div>
                <div className="footer-bottom py-3">
                    <p className=' text-center'>copyright &copy;2022 <Link to='/home'></Link>decorCanvas </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;