import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, img, description, name, price } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = (id) => {
        navigate(`/service/${id}`);
    }

    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className='service-container'>
                <img className='w-100' src={img} alt="" />
                <h5 className='my-2' style={{ fontFamily: "'Poppins', sans-serif", color: "#606060" }}>Service : {name}</h5>
                <p style={{ fontFamily: "'Roboto', sans-serif" }}><small>{description.length < 100 ? description : description.slice(0, 100)}</small></p>
                <p>Cost : {price}$</p>
                <button style={{ fontFamily: "'Roboto', sans-serif" }} onClick={() => navigateToServiceDetail(id)} className='bookBtn'>Book : {name}</button>
            </div>
        </div>
    );
};

export default Service;