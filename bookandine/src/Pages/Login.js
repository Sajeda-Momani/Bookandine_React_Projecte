/* eslint-disable */
// Code from line 40 to 45
/* eslint-enable */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

const Login = () => {
    const [user, setUser] = useState({});
    const [state, setState] = useState({
        email: '',
        password: '',
    });
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleCallbackResponse(response) {
        console.log("Encoded JWT ID token: " + response.credential);
        var userObject = jwt_decode(response.credential);
        console.log('userObject', userObject);
        setUser(userObject);

        // Add user information to session storage
        // sessionStorage.setItem('userId', userObject.id); // Assuming userObject has an 'id' property
        sessionStorage.setItem('userName', userObject.name); // Assuming userObject has a 'name' property

        // Save the user record to the API
        axios.post('https://651d054444e393af2d5904a6.mockapi.io/users', {
            // id: userObject.id, // Assuming userObject has an 'id' property
            name: userObject.name, // Assuming userObject has a 'name' property
            email: userObject.email, // Assuming userObject has a 'name' property
            // Add other properties as needed
        })
            .then(response => {
                console.log('User record saved:', response.data);
                sessionStorage.setItem('userId', response.data.id); // Assuming userObject has an 'id' property

            })
            .catch(error => {
                console.error('Error saving user record:', error);
            });
    }

    useEffect(() => {
        // eslint-disable-next-line

        google.accounts.id.initialize({
            client_id: "653580128748-s2hs2morpdgqck7pg3keeu10d8apjc53.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });

        // eslint-disable-next-line

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large" }
        );
    }, []);

    const handleChange = (evt) => {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value,
        });
    };

    const handleOnSubmit = async (evt) => {
        evt.preventDefault();

        try {
            const response = await axios.get(
                `https://651d054444e393af2d5904a6.mockapi.io/users?email=${state.email}&password=${state.password}`
            );

            const user = response.data;

            if (user.length > 0) {
                alert('Login successful!');
                setIsLoggedIn(true);
                sessionStorage.setItem('userId', user[0].id);
                sessionStorage.setItem('userName', user[0].name);
                console.log(sessionStorage.getItem('userId'));
            } else {
                alert('Login failed. Please check your credentials.');
            }
        } catch (error) {
            alert('Login failed.');
        }

        setState({
            email: '',
            password: '',
        });
    };

    return (
        <div className="col-md-6 col-sm-12 col-lg-6">
            <div className="sign-popup-inner brd-rd5">
                <div className="sign-popup-title text-center">
                    <h4 itemprop="headline">SIGN IN</h4>
                    <span>with your social network</span>
                </div>
                <div className="popup-social text-center">
                    <a className="facebook brd-rd3" href="#" title="Facebook" itemprop="url" target="_blank">
                        <i className="fa fa-facebook"></i> Facebook
                    </a>
                    <div className="twitter brd-rd3" id="signInDiv"></div>
                    {/* {user && (
            <div>
              <h1>{user.name}</h1>
            </div>
          )} */}
                    <a className="twitter brd-rd3" href="#" title="Twitter" itemprop="url" target="_blank">
                        <i className="fa fa-twitter"></i> Twitter
                    </a>
                </div>
                <span className="popup-seprator text-center">
                    <i className="brd-rd50">or</i>
                </span>
                <form className="sign-form" onSubmit={handleOnSubmit}>
                    <div className="row">
                        <div className="sign-popup-title text-center">
                            <span>use your account</span>
                        </div>
                        <div className="col-md-12 col-sm-12 col-lg-12 col-xs-12">
                            <input
                                className="brd-rd3"
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={state.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-md-12 col-sm-12 col-lg-12 col-xs-12">
                            <input
                                className="brd-rd3"
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={state.password}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="col-md-12 col-sm-12 col-lg-12 col-xs-12">
                            <button className="red-bg brd-rd3" type="submit">
                                SIGN IN
                            </button>
                            <div className="col-md-12 col-sm-12 col-lg-12 col-xs-12">
                                <a className="sign-btn" href="#" title="" itemprop="url">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
