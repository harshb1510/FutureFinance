// Profile.jsx

import React, { useState } from 'react';
import avatar from '../assets/profile.png';
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { profileValidation } from '../helper/validate';
import convertToBase64 from '../helper/convert';
import useFetch from '../hooks/fetch.hook';
import { updateUser } from '../helper/helper';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import ENV from '../cofig.js'

import './Profile.css'; // Import the CSS file

export default function Profile() {
  const [file, setFile] = useState();
  const user = localStorage.getItem('token');
  const decodedUser = user ? jwtDecode(user) : null;
  const username = decodedUser.username;

  const [{ isLoading, apiData, serverError }] = useFetch(`${ENV.HOST}/user/${username}`);
  
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: apiData?.firstName || '',
      lastName: apiData?.lastName || '',
      email: apiData?.email || '',
      mobile: apiData?.mobile || '',
      address: apiData?.address || '',
    },
    enableReinitialize: true,
    validate: profileValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, { profile: file || apiData?.profile || '' });
      let updatePromise = updateUser(values);

      toast.promise(updatePromise, {
        loading: 'Updating...',
        success: <b>Update Successfully...!</b>,
        error: <b>Could not Update!</b>,
      });

      navigate('/');
    },
  });

  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };

  function userLogout() {
    localStorage.removeItem('token');
    navigate('/');
  }

  if (isLoading) return <h1>Loading...</h1>;
  if (serverError) return <h1>{serverError.message}</h1>;

  return (
    <div className="profile-container">
      <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className="profile-wrapper">
        <div className="profile-content">
          <div className="profile-title">
            <h4>Profile</h4>
            <span>You can update the details.</span>
          </div>

          <form className="profile-form" onSubmit={formik.handleSubmit}>
            <div className="profile-image">
              <label htmlFor='profile'>
                <img
                  src={apiData?.profile || file || avatar}
                  alt='avatar'
                  className="profile-avatar"
                />
              </label>
              <input className='profilePhotoInput' onChange={onUpload} type='file' id='profile' name='profile' />
            </div>

            <div className="profile-details">
              <div className="profile-name">
                <input {...formik.getFieldProps('firstName')} type='text' placeholder='First Name' className='profileInput' />
                <input {...formik.getFieldProps('lastName')} type='text' placeholder='Last Name' className='profileInput'/>
              </div>

              <div className="profile-contact">
                <input {...formik.getFieldProps('mobile')} type='text' placeholder='Mobile No.' className='profileInput' />
                <input {...formik.getFieldProps('email')} type='text' placeholder='Email*' className='profileInput' />
              </div>

              <input {...formik.getFieldProps('address')} type='text' placeholder='Address' className='profileInput' />

            </div>
            {apiData?
            (<><span className='text-3xl'>Account Number</span><span className='text-xl weight300'>{apiData.accountNumber}</span></>):(<div></div>)
            }
            
              <button className="profile-update-btn" type='submit'>Update</button>

            <div className=" profile-logout ">
              <span>
                Come back later?{' '}
                <button className="profile-logout-btn" onClick={userLogout}>
                  Logout
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
