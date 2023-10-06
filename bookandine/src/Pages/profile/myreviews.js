import React from 'react';

function MyReviews() {
    return (
        <div className="tab-content">
            <div className="tabs-wrp brd-rd5">
                <h4>MY REVIEWS</h4>
                <div className="select-wrap-inner">
                    <div className="select-wrp2">
                        <select>
                            <option>Newest Reviews</option>
                            <option>Newest Reviews</option>
                            <option>Newest Reviews</option>
                        </select>
                    </div>
                    <div className="select-wrp2">
                        <select>
                            <option>Select Date Range</option>
                            <option>Select Date Range</option>
                            <option>Select Date Range</option>
                        </select>
                    </div>
                </div>
                <div className="review-list">
                    <div className="review-box brd-rd5">
                        <h4><a href="#" title="">RESTAURANT DEMO</a></h4>
                        {/* Add review content */}
                    </div>
                    {/* Add more review boxes as needed */}
                </div>
            </div>
        </div>
    )
}

export default MyReviews;