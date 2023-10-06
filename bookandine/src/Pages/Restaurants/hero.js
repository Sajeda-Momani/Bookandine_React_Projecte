import React from 'react';

function PageTitle() {
    return (
        <section>
            <div className="block">
                <div className="fixed-bg" style={{ backgroundImage: 'url(images/topbg.jpg)' }}></div>
                <div className="page-title-wrapper text-center">
                    <div className="col-md-12 col-sm-12 col-lg-12">
                        <div className="page-title-inner">
                            <h1 itemprop="headline">Restaurant List</h1>
                            <span>A Great Restaurant Website</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PageTitle;
