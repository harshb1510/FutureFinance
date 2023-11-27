import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import avatar from '../assets/profile.png';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { usernameValidate } from '../helper/validate'
import { useAuthStore } from '../store/store'
import "./Profile.css"


export default function Username() {

  const navigate = useNavigate();
  const setUsername = useAuthStore(state => state.setUsername);

  const formik = useFormik({
    initialValues : {
      username : ''
    },
    validate : usernameValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit : async values => {
      setUsername(values.username);
      navigate('/password');
    }
  })

  return (
    <div className='username-container '>
      <div className="gradient2"></div>
      <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className='username-wrapper profile-content flex justify-center'>
        <div className=" profile-content">

          <div >
            <h4 style={{fontSize:"30px",marginBottom:"10px"}}>Hello Again!</h4>
            <span >
              Explore More by connecting with us.
            </span>
          </div>

          <form className='profile-form' onSubmit={formik.handleSubmit}>
              <div className=' profile-image flex justify-center py-4' style={{padding:"10px"}}>
                  <img src={avatar} className="profile-avatar" alt="avatar" />
              </div>

              <div className="textbox">
                  <input {...formik.getFieldProps('username')} className="profileInput" type="text" placeholder='Username' />
                  <button className="usernameButton" type='submit'>Let's Go</button>
              </div>

              <div className="text-center py-4">
                <span >Not a Member? <Link className='profileLink' to="/register">Register Now</Link></span>
              </div>
          </form>
        </div>
      </div>
    </div>
  )
}