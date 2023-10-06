import React, { createContext, useEffect, useState } from 'react';
import '../layouts/navbar.css';
import axios from 'axios';

import RestaurantImageCarousel from '../components/sections/Single/thumb';
import RestaurantDetailTitle from '../components/sections/Single/detailtitle';
import DishesList from '../components/sections/Single/menutab';
import RestaurantGallery from '../components/sections/Single/gallary';
import CustomerReviews from '../components/sections/Single/review';
import BookTable from '../components/sections/Single/book';
import RestaurantInfo from '../components/sections/Single/restinfo';
import YourOrder from '../components/sections/Single/order';
import NavBar from '../layouts/NavBar';
import Footer from '../layouts/Footer';

function Single() {
    const [restaurantLocation, setRestaurantLocation] = useState({});
    const [restaurantHours, setRestaurantHours] = useState({});
    const [restaurantCuisine, setRestaurantCuisine] = useState({});
    const [restaurantimage, setRestaurantimage] = useState();
    const [restaurantcontact, setRestaurantcontact] = useState({
        address: '',
        phone: '',
        email: '',
        website: '',
    });

    const [restaurantmap, setRestaurantmap] = useState({
        latitude: '',
        longitude: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/getRestaurantDetails',
                params: {
                    restaurantsId: 'Restaurant_Review-g293986-d928988-Reviews-Fame_Restaurant-Amman_Amman_Governorate',
                    currencyCode: 'USD'
                },
                headers: {
                    'X-RapidAPI-Key': '8c056b8a2dmshe4d0847825ab8fcp1905abjsnf3ca565eec6b',
                    'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                setRestaurantLocation(response.data.data.location);
                setRestaurantCuisine(response.data.data.location.cuisine);
                setRestaurantHours(response.data.data.hours);
                setRestaurantimage(response.data.data.location.photo.images.large.url);
                setRestaurantmap(response.data.data.overview.location);
                setRestaurantcontact(response.data.data.overview.contact);
                console.log(response.data.data.location);

            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);
    const position=[restaurantmap.latitude, restaurantmap.longitude];
    return (
        <>


            <section>
                <div className="block gray-bg top-padd30">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-lg-12">
                                <div className="sec-box">
                                    <div className="sec-wrapper">
                                        <div className="row">
                                            <div className="col-md-12 col-sm-12 col-lg-12">
                                                <div className="restaurant-detail-wrapper">
                                                    <div className="restaurant-detail-info">
                                                        <RestaurantImageCarousel image={restaurantimage} />
                                                        <RestaurantDetailTitle openStatus={restaurantHours.openStatus}
                                                            location={restaurantLocation.location_string}
                                                            name={restaurantLocation.name}
                                                            description={restaurantLocation.description}
                                                            rate={restaurantLocation.rating}
                                                            hours={restaurantHours.hoursTodayText} />

                                                        <div className="restaurant-detail-tabs">
                                                            <ul className="nav nav-tabs">
                                                                <li className="active"><a href="#menu" data-toggle="tab"><i className="fa fa-cutlery"></i> Menu</a></li>
                                                                <li><a href="#gallery" data-toggle="tab"><i className="fa fa-picture-o"></i> Gallery</a></li>
                                                                <li><a href="#reviews" data-toggle="tab"><i className="fa fa-star"></i> Reviews</a></li>
                                                                <li><a href="#bookTable" data-toggle="tab"><i className="fa fa-book"></i> Book A Table</a></li>
                                                                <li><a href="#restaurantInfo" data-toggle="tab"><i className="fa fa-info"></i> Restaurant Info</a></li>
                                                            </ul>

                                                            <div className="tab-content">
                                                                <div className="tab-pane fade in active" id="menu">
                                                                    <DishesList />
                                                                </div>
                                                                <div className="tab-pane fade" id="gallery">
                                                                    <RestaurantGallery />
                                                                </div>
                                                                <div className="tab-pane fade" id="reviews">
                                                                    <CustomerReviews  name={restaurantLocation.name}/>
                                                                </div>
                                                                <div className="tab-pane fade" id="bookTable">
                                                                    <BookTable  name={restaurantLocation.name}   />
                                                                </div>

                                                                <div className="tab-pane fade" id="restaurantInfo">

                                                                    <RestaurantInfo
                                                                    address={restaurantcontact.address}
                                                                    phone={restaurantcontact.phone}
                                                                    email={restaurantcontact.email}
                                                                    website={restaurantcontact.website}
                                                                    position={position}
                                                                    />

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
                    </div>
                </div>
            </section>

        </>
    );
}

export default Single;
