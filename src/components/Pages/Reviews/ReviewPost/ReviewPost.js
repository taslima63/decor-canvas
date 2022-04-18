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
            <p className='comment' style={{
                fontFamily: "'Roboto',sans-serif", fontSize: '14px', fontWeight: '400'
            }}>Comment : <span style={{
                fontFamily: "'Roboto',sans-serif", color: '#606060FF', fontSize: '14px', fontWeight: '400'
            }}>{review}</span></p>
        </div>
    );
};

export default ReviewPost;