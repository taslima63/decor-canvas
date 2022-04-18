import React from 'react';
import './ReviewPost.css';

const ReviewPost = (props) => {
    const { img, name, review, ratings } = props.review;
    return (
        <div className='reviewItem-container'>
            <div className="customer-img">
                <img src={img} alt="" />
            </div>
            <h3 className='name mt-3 text-center'>Name : <span>{name}</span></h3>
            <p><small>Ratings : <span className='highlight-rating'>{ratings}</span> Stars</small></p>
            <p className='comment'>Comment : {review}</p>
        </div>
    );
};

export default ReviewPost;