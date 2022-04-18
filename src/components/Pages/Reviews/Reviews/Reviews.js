import React, { useEffect, useState } from 'react';
import ReviewPost from '../../Reviews/ReviewPost/ReviewPost';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    return (
        <div className='container mt-5'>
            <div className="reviews-container">
                <h2 className='my-5' style={{ fontFamily: "'Roboto', sans-serif", fontWeight: '600', color: '#606060FF' }}>All Reviews from Our Clients</h2>
                <div className='reviews'>
                    {
                        reviews.map(review => <ReviewPost key={review.id} review={review}></ReviewPost>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Reviews;