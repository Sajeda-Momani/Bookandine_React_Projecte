import React from 'react';

function PageTitle() {
    const backgroundStyle = {
        backgroundImage: 'url(images/topbg.jpg)',
    };

    return (
        <section>
            <div className="block">
                <div className="fixed-bg" style={backgroundStyle}></div>
                <div className="page-title-wrapper text-center">
                    <div className="col-md-12 col-sm-12 col-lg-12">
                        <div className="page-title-inner">
                            <h1 itemprop="headline">Search Your Favourite Food</h1>
                            <form className="restaurant-search-form brd-rd2">
                                <div className="row mrg10">
                                    <div className="col-md-6 col-sm-5 col-lg-5 col-xs-12">
                                        <div className="input-field brd-rd2">
                                            <input
                                                className="brd-rd2"
                                                type="text"
                                                placeholder="Restaurant Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-4 col-lg-4 col-xs-12">
                                        <div className="input-field brd-rd2">
                                            <i className="fa fa-map-marker"></i>
                                            <input
                                                className="brd-rd2"
                                                type="text"
                                                placeholder="Search Location"
                                            />
                                            <i className="fa fa-location-arrow"></i>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-sm-3 col-lg-3 col-xs-12">
                                        <button className="brd-rd2 red-bg" type="submit">
                                            SEARCH
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PageTitle;
