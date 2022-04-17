import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>Details on:{serviceId}</h2>
            <div className="text-center w-50 mx-auto">
                <Link to='/checkout'>
                    <button className='bookBtn w-50'>
                        Proceed Checkout
                    </button>
                </Link >
            </div>
        </div >
    );
};

export default ServiceDetail;