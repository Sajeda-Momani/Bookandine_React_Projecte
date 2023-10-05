import React from 'react';

import PageTitle from './hero'; 
import Path from './path'; 
import Article from './cards'; 
import Pagination from './pagination'; 

const Restaurants = () => {
    return (
        <div>
            <PageTitle />
            <Path />
            <Article />
            <Pagination  />
        </div>
    );
}

export default Restaurants;
