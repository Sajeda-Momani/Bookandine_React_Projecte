import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PageTitle() {
    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState('25336960');
    const [searchName, setSearchName] = useState('');

    const backgroundStyle = {
        backgroundImage: 'url(images/topbg.jpg)',
    };

    const handleLocationChange = (value) => {
        setSelectedLocation(value);
    };

    const handleNameChange = (value) => {
        setSearchName(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(
                'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants',
                {
                    params: {
                        locationId: selectedLocation,
                    },
                    headers: {
                        'X-RapidAPI-Key': 'a346d90a2cmsh11fee1476477d3ep133068jsnf8d4802c7561',
                        'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
                      }
                }
            );
            console.log(selectedLocation);
            const filteredData = response.data.data.data;
            console.log(filteredData);
            // const filtered = filteredData.filter((rest) => rest.name === searchName);
            // console.log(filtered);
            console.log('filteredData:', filteredData);
            
            setFilterData(filteredData);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <section>
            <div className="block">
                <div className="fixed-bg" style={backgroundStyle}></div>
                <div className="page-title-wrapper text-center">
                    <div className="col-md-12 col-sm-12 col-lg-12">
                        <div className="page-title-inner">
                            <h1 itemprop="headline">Search Your Favourite Food</h1>
                            <form className="restaurant-search-form brd-rd2" onSubmit={handleSubmit}>
                                <div className="row mrg10">
                                    <div className="col-md-6 col-sm-5 col-lg-5 col-xs-12">
                                        <div className="input-field brd-rd2">
                                            <input
                                                onChange={(e) => handleNameChange(e.target.value)}
                                                value={searchName}
                                                className="brd-rd2"
                                                type="text"
                                                placeholder="Restaurant Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-4 col-lg-4 col-xs-12">
                                        <div className="input-field brd-rd2">
                                            <i className="fa fa-map-marker">
                                                <select
                                                    defaultValue={selectedLocation}
                                                    onChange={(e) => handleLocationChange(e.target.value)}
                                                    className="brd-rd2"
                                                >
                                                    <option value="25336960">Amman</option>
                                                    <option value="656904">Irbid</option>
                                                    <option value="293988">Jerash</option>
                                                </select>
                                            </i>
                                        </div>
                                    </div>

                                    <div className="col-md-2 col-sm-3 col-lg-3 col-xs-12">
                                        <button className="brd-rd2 red-bg" type="submit">
                                            SEARCH
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <div>{filterData.map((restaurant) => (
                                <div >
                                    <h2>{restaurant.name}</h2>
                                    {/* <p>Rating: {restaurant.averageRating}</p>
                                    <p>Open Status: {restaurant.currentOpenStatusText}</p> */}

                                </div>
                            ))}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PageTitle;
