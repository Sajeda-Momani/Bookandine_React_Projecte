
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './data.json'



const CitiesSection = () => {
    
  return (
    <>
   
    <section style={{ marginTop: '50px' }}>
      <div className="block">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-12">
              <div className="title1-wrapper text-center">
                <div className="title1-inner">
                  <span>Website for Different Kind of Restaurants</span>
                  <h2 itemProp="headline">Cities</h2>
                </div>
              </div>
              <div className="remove-ext">
                <div className="row">
                  <div className="col-md-4 col-sm-6 col-lg-4">
                    <div className="popular-dish-box style2 wow fadeIn" data-wow-delay="0.2s">
                      <div className="popular-dish-thumb">
                        <a href="/?locationId=25336960" title="" itemProp="url">
                          <img
                            src="images/resource/popular-dish-img1.jpg"
                            alt="popular-dish-img1.jpg"
                            itemProp="image"
                          />
                        </a>
                        
                      </div>
                      <div className="popular-dish-info">
                        <h4 itemProp="headline">
                          <a href="/?locationId=25336960" title="" itemProp="url">
                            Amman
                          </a>
                        </h4>
                        <p itemProp="description">
                        Discover a world of culinary delights in the heart of the city, where restaurants offer diverse flavors
                        </p>
                        
                        <a
                          className="brd-rd4"
                          href="/?locationId=25336960"
                          title="Order Now"
                          itemProp="url"
                          style={{
                            marginRight: '5%',
                            width: '90%',
                            height: '40px',
                            textAlign: 'center',
                            fontSize: '15px',
                          }}
                        >
                          See Restaurants
                        </a>
                       
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 col-lg-4">
                    <div className="popular-dish-box style2 wow fadeIn" data-wow-delay="0.2s">
                      <div className="popular-dish-thumb">
                        <a href="/?locationId=25336960" title="" itemProp="url">
                          <img
                            src="images/resource/popular-dish-img3.jpg"
                            alt="popular-dish-img1.jpg"
                            itemProp="image"
                          />
                        </a>
                        
                      </div>
                      <div className="popular-dish-info">
                        <h4 itemProp="headline">
                          <a href="/?locationId=25336960" title="" itemProp="url">
                            Irbid
                          </a>
                        </h4>
                        <p itemProp="description">
                        Savor locally sourced ingredients and regional specialties at charming countryside restaurants                       
                        </p>
                        <a
                          className="brd-rd4"
                          href="/?locationId=25336960"
                          title="Order Now"
                          itemProp="url"
                          style={{
                            marginRight: '5%',
                            width: '90%',
                            height: '40px',
                            textAlign: 'center',
                            fontSize: '15px',
                          }}
                        >
                          See Restaurants
                        </a>
                       
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 col-lg-4">
                    <div className="popular-dish-box style2 wow fadeIn" data-wow-delay="0.2s">
                      <div className="popular-dish-thumb">
                        <a href="/?locationId=25336960" title="" itemProp="url">
                          <img
                            src="images/resource/popular-dish-img2.jpg"
                            alt="popular-dish-img1.jpg"
                            itemProp="image"
                          />
                        </a>
                        
                      </div>
                      <div className="popular-dish-info">
                        <h4 itemProp="headline">
                          <a href="/?locationId=25336960" title="" itemProp="url">
                            Jerash
                          </a>
                        </h4>
                        <p itemProp="description">
                        Experience the charm of countryside dining, where rustic restaurants offer a taste of tradition in picturesque settings                        
                        </p>
                        <a
                          className="brd-rd4"
                          href="/?locationId=25336960"
                          title="Order Now"
                          itemProp="url"
                          style={{
                            marginRight: '5%',
                            width: '90%',
                            height: '40px',
                            textAlign: 'center',
                            fontSize: '15px',
                          }}
                        >
                          See Restaurants
                        </a>
                       
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
};

export default CitiesSection;

