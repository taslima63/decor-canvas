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
                <h4>Service:{name}</h4>
                <p><small>{description.length < 25 ? description : description.slice(0, 25)}</small></p>
                <p>Cost:{price}</p>
                <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary'>Book:{name}</button>

            </div>
        </div>
    );
};

export default Service;