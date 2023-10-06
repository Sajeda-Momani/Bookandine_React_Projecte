import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function BookTable({name}) {

    const navigate = useNavigate();
    const [bookingData, setBookingData] = useState({
        date: '',
        time: '',
        peopleNumber: '',
    });
    const [successMessage, setSuccessMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBookingData({
            ...bookingData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        // const isLoggedIn = sessionStorage.getItem('isLoggedIn');
        const isLoggedIn = true;

        if (isLoggedIn == false) {
            navigate('/login');
            return;
        }

        const finalBookingData = {
            restaurant_name: name,
            date: bookingData.date,
            people_number: bookingData.peopleNumber,
            time: String(bookingData.time),
            userId: 1
        };

        try {
            const response = await axios.post('https://651d054444e393af2d5904a6.mockapi.io/users/1/bookings', finalBookingData);

            if (response.status === 201) {
                setBookingData({
                    date: '',
                    time: '',
                    peopleNumber: '',
                });
                setSuccessMessage('Table booked successfully!');
                setTimeout(() => {
                    setSuccessMessage('');
                }, 3000);
            } else {
                console.error('Failed to book table');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="book-table">
            <h4 className="title3" itemprop="headline">
                <span className="sudo-bottom sudo-bg-red">Book</span> This Restaurant Table
            </h4>

            {successMessage && <div className="alert alert-success">{successMessage}</div>}


            <form onSubmit={handleSubmit}>
                <br></br>
                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="date">Select Date</label>
                            <div className="input-group">
                                <input
                                    className="form-control"
                                    type="date"
                                    id="date"
                                    placeholder="Select Date"
                                    name='date'
                                    required
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="time">Select Time</label>
                            <div className="input-group">
                                <input
                                    className="form-control"
                                    type="time"
                                    id="time"
                                    placeholder="Select Time"
                                    name='time'
                                    required
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="form-group">
                            <label htmlFor="number">Number Of People</label>
                            <div className="input-group">
                                <input
                                    className="form-control"
                                    type="number"
                                    name="peopleNumber"
                                    id="number"
                                    required
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                        <br></br>
                    </div>
                    <div className="col-md-12">
                        <button className="btn btn-danger" type="submit">
                            Book Table
                        </button>
                    </div>
                </div>
            </form>

        </div>

    );
}

export default BookTable;
