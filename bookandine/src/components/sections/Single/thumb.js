
function RestaurantImageCarousel({image}) {

    return (
      <div className="restaurant-detail-thumb">
        <ul className="restaurant-detail-img-carousel">
          <li><img style={{width:'800px',textAlign:'center',marginLeft:'150px'}} className="brd-rd3" src={image} alt="restaurant-detail-big-img1-1.jpg" itemprop="image" /></li>

        </ul>

      </div>
    );
  }

export default RestaurantImageCarousel;
