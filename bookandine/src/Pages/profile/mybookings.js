import React from "react";
function MyBookings() {
    return (
        <div className="tab-content">
            <div className="tabs-wrp brd-rd5">
                <h4>MY BOOKINGS</h4>
                <div className="select-wrap-inner">
                    <div className="select-wrp2">
                        <select>
                            <option>Select Booking Status</option>
                            <option>Select Booking Status</option>
                            <option>Select Booking Status</option>
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
                <div className="booking-table">
                    <table>
                        <thead>
                            <tr><th>RESTAURANT NAME</th><th>DATE</th><th>STATUS</th></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><h5><a href="#" title="">Jet's Kitchen ( #8589 )</a></h5></td>
                                <td>Aug 17, 2017</td>
                                <td><span className="brd-rd3 processing">PROCESSING</span> <a className="detail-link brd-rd50" href="#" title=""><i className="fa fa-chain"></i></a></td>
                            </tr>
                            {/* Add more table rows as needed */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MyBookings;