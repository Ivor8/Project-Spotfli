import React from 'react';
import propery from '../../../assets/vector1.png';
import '../propertySeeker/register.css';
import Navbar from '../../navbar/VisitorNav';

const RegisisterPropertyOwner = () => {
  return (
    <>
    <Navbar />
    <div className='register-container'>
      <div className="register">
        <div className="register-form-container">
            <div className="register-img">
                <img src={propery} alt="" />
            </div>
            <div className="register-form">
                <h2>Property Owner <i className="fa-solid fa-key"></i></h2>
                <form>
                    <label htmlFor="username">User Name:</label>
                    <input type="text" placeholder='Ivor Dev'/>

                    <label htmlFor="email">Email:</label>
                    <input type="email" placeholder='me123@gmail.com'/>

                    <div className="gender">
                        <label htmlFor="male">Male:</label>
                        <input type="radio" name='gender'/>

                        <label htmlFor="male">Female:</label>
                        <input type="radio" name='gender'/>
                    </div>

                    <label htmlFor="username">Date Of Birth</label>
                    <input type="date" />

                    <label htmlFor="password">Password:</label>
                    <input type="password" />

                    <label htmlFor="confirm-pass">Confirm Password:</label>
                    <input type="password" />

                    <div className="terms-conditions">
                        <input type="checkbox" /> 
                        <span>Agreed to SPOTFLI <a href="">Terms and Conditions</a></span>
                    </div>
                    <button className="register-btn">Register</button>
                </form>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default RegisisterPropertyOwner
