import React from "react";
import axios from "axios";
import './Login.css';

const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;

function Register({ setIsLoggedIn }) {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleOnSubmit = async (evt) => {
    evt.preventDefault();

    if (state.password !== state.password_confirmation) {
      alert("Passwords do not match");
      return;
    }

    if (!EMAIL_REGEX.test(state.email)) {
      alert("Invalid email address");
      return;
    }

    if (!PASSWORD_REGEX.test(state.password)) {
      alert("Password must have at least 8 characters, one uppercase, one lowercase, and one number");
      return;
    }

    try {
      const response = await axios.post(
        "https://651d054444e393af2d5904a6.mockapi.io/users",
        state
      );

      alert(`User registered successfully with ID: ${response.data.id}`);
      setIsLoggedIn(true);

      setState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      });
    } catch (error) {
      console.error("Error registering user:", error);
      alert("An error occurred while registering. Please try again later.");
    }
  };

  return (
    <div className="col-md-6 col-sm-12 col-lg-6">
      <div className="sign-popup-inner brd-rd5">
        <div className="sign-popup-title text-center">
          <h4 itemprop="headline">SIGN UP</h4>
          <span>with your social network</span>
        </div>
        <div className="popup-social text-center">
          <a className="facebook brd-rd3" href="#" title="Facebook" itemprop="url" target="_blank">
            <i className="fa fa-facebook"></i> Facebook
          </a>
          <a className="google brd-rd3" href="#" title="Google Plus" itemprop="url" target="_blank">
            <i className="fa fa-google-plus"></i> Google
          </a>
          <a className="twitter brd-rd3" href="#" title="Twitter" itemprop="url" target="_blank">
            <i className="fa fa-twitter"></i> Twitter
          </a>
        </div>
        <span className="popup-seprator text-center">
          <i className="brd-rd50">or</i>
        </span>
        <form className="sign-form" onSubmit={handleOnSubmit}>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-12 col-xs-12">
              <input className="brd-rd3" type="text" name="name" value={state.name} onChange={handleChange} placeholder="Name" required />
            </div>
            <div className="col-md-12 col-sm-12 col-lg-12 col-xs-12">
              <input className="brd-rd3" type="email" name="email" value={state.email} onChange={handleChange} placeholder="Email" required />
            </div>
            <div className="col-md-12 col-sm-12 col-lg-12 col-xs-12">
              <input
                className="brd-rd3"
                type="password"
                name="password"
                value={state.password}
                onChange={handleChange}
                placeholder="Password"
                required
              />
            </div>
            <div className="col-md-12 col-sm-12 col-lg-12 col-xs-12">
              <input
                className="brd-rd3"
                type="password"
                name="password_confirmation"
                value={state.password_confirmation}
                onChange={handleChange}
                placeholder="Password Confirmation"
                required
              />
            </div>
            <div className="col-md-12 col-sm-12 col-lg-12 col-xs-12">
              <button className="red-bg brd-rd3" type="submit">
                REGISTER NOW
              </button>
            </div>
            <div className="col-md-12 col-sm-12 col-lg-12 col-xs-12">
              <a className="sign-btn" href="#" title="" itemprop="url">
                Already Registered? Sign in
              </a>
              <a className="recover-btn" href="#" title="" itemprop="url">
                Recover my password
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
