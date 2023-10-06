import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './api.json'
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
function Article() {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const { categoryid } = useParams();
    const apiUrl = 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants';
    const headers = {
        'X-RapidAPI-Key': '8605fd357emsh0d35efc1d69a294p133002jsn39e8b9b2c701',
        'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com',
    };

    // useEffect(() => {
    //     axios
    //         .get(apiUrl, {
    //             params: {
    //                 locationId: '293986',
    //             },
    //             headers: headers,
    //         })

    //         .then((response) => {
    //             setRestaurants(response.data.data);
    //             setIsLoading(false);
    //         })

    //         .catch((error) => {
    //             setError(error);
    //             setIsLoading(false);
    //         });
    // }, []);

    useEffect(() => {
        import('./api.json')
            .then((response) => {
                setRestaurants(response.default.data.data);
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <section >
            {/* add .data befor map when use API */}
            {/* .slice(0, 5) */}
            {restaurants.map((restaurant) => (
                <div key={restaurant.locationId} className="block less-spacing gray-bg top-padd30">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-lg-12">
                                <div className="sec-box">
                                    <div className="remove-ext margn-btm">
                                        <div className="row">
                                            <div className="col-md-4 col-sm-6 col-lg-4">
                                                <div className="article-dev wow fadeIn" data-wow-delay="0.2s">
                                                    <figure>
                                                        <img src={restaurant.heroImgUrl} alt={restaurant.name} />
                                                    </figure>
                                                    <div className="article-data">
                                                        <div className="article-info-meta">
                                                            <span>{restaurant.currentOpenStatusText}</span>
                                                            <a href={restaurant.menuUrl} title="">Menu</a>

                                                        </div>
                                                        <div className="article-meta">
                                                            <h3>
                                                                <Link to={`/single/${restaurant.restaurantsId}/${categoryid}`} title="">
                                                                    {restaurant.name}
                                                                </Link>
                                                            </h3>


                                                        </div>
                                                        <div className="article-meta">
                                                            <div className="like-meta">
                                                                <span><i className="fa fa-star-o"></i> {restaurant.averageRating}</span>
                                                                <span><i className="fa fa-comment-o"></i> {restaurant.userReviewCount}</span>
                                                            </div>
                                                        </div>
                                                        <div className="article-meta">
                                                            {restaurant.establishmentTypeAndCuisineTags.slice(0, 3).map((tag, index) => (
                                                                <h5 key={index}>#{tag}</h5>
                                                            ))}

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Article;
