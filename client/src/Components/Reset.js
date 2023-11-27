import React, { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { resetPasswordValidation } from '../helper/validate'
import { resetPassword } from '../helper/helper'
import { useAuthStore } from '../store/store';
import { useNavigate, Navigate } from 'react-router-dom';
import useFetch from '../hooks/fetch.hook'

import styles from '../styles/Username.module.css';

export default function Reset() {

  const { username } = useAuthStore(state => state.auth);
  const navigate = useNavigate();
  const [{ isLoading, apiData, status, serverError }] = useFetch(`http://localhost:8080/api/user/${username}`)

  const formik = useFormik({
    initialValues : {
      password : '',
      confirm_pwd: ''
    },
    validate : resetPasswordValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit : async values => {
      
      let resetPromise = resetPassword({ username, password: values.password })

      toast.promise(resetPromise, {
        loading: 'Updating...',
        success: <b>Reset Successfully...!</b>,
        error : <b>Could not Reset!</b>
      });

      resetPromise.then(function(){ navigate('/password') })

    }
  })


  if(isLoading) return <h1 className='text-2xl font-bold'>isLoading</h1>;
  if(serverError) return <h1 className='text-xl text-red-500'>{serverError.message}</h1>
  if(status && status !== 201) return <Navigate to={'/password'} replace={true}></Navigate>

  return (
    <div className="recovery-container">
      <div className="gradient2"></div>
      <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className='username-wrapper flex justify-center items-center h-screen'>
        <div className="profile-content" >

          <div >
            <h4 style={{fontSize:"30px",marginBottom:"10px"}}>Reset</h4>
            <span >
              Enter new password.
            </span>
          </div>

          <form className="profile-form" onSubmit={formik.handleSubmit}>
              <div className="textbox flex flex-col items-center gap-6">
                  <input {...formik.getFieldProps('password')} className="profileInput" type="text" placeholder='New Password' />
                  <input {...formik.getFieldProps('confirm_pwd')} className="profileInput" type="text" placeholder='Repeat Password' />
                  <button className="usernameButton" type='submit'>Reset</button>
              </div>

          </form>

        </div>
      </div>
    </div>
  )
}