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
            <h2>All Reviews from Our customers</h2>
            <div className='reviews'>
                {
                    reviews.map(review => <ReviewPost key={review.id} review={review}></ReviewPost>)
                }
            </div>

        </div>
    );
};

export default Reviews;