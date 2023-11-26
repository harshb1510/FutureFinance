import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import avatar from '../assets/profile.png';
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { registerValidation } from '../helper/validate';
import { registerUser } from '../helper/helper';
import convertToBase64 from '../helper/convert';


import styles from '../styles/Username.module.css';

export default function Register() {

  const navigate = useNavigate();
  const [file, setFile] = useState()

  const formik = useFormik({
    initialValues : {
      email: '',
      username: '',
      password : '',
      pin:'',
      accountNumber: '',
    },
    validate : registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      values = Object.assign(values, { profile: file || '' });
      let registerPromise = registerUser(values);
    
      toast.promise(registerPromise, {
        loading: 'Creating...',
        success: <b>Register Successfully...!</b>,
        error: <b>Could not Register.</b>,
      });
    
      registerPromise
        .then(function () {
          navigate('/username');
        })
        .catch(error => {
          console.error(error);
          // Handle the error as needed, e.g., show a specific toast or message
          toast.error("Registration failed");
        });
    },
    
  })

  /** formik doensn't support file upload so we need to create this handler */
  const onUpload = async e => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  }

  return (
    <div className="container" style={{padding:"50px"}}>

      <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className='flex justify-center items-center '>
        <div className={styles.glass} style={{  paddingTop: '0px'}}>

          <div className="title flex flex-col items-center">
            <h4 style={{fontSize:"30px"}}>Register</h4>
          </div>

          <form className='' onSubmit={formik.handleSubmit}>
              <div className='profile flex justify-center'>
                  <label htmlFor="profile">
                    <img src={file || avatar} className={styles.profile_img} alt="avatar" />
                  </label>
                  
                  <input onChange={onUpload} type="file" id='profile' name='profile' />
              </div>

              <div className="textbox flex flex-col items-center " >
                  <input {...formik.getFieldProps('email')} className={styles.textbox} type="text" placeholder='Email' />
                  <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder='Username' />
                  <input {...formik.getFieldProps('password')} className={styles.textbox} type="password" placeholder='Password' />
                  <input {...formik.getFieldProps('pin')} className={styles.textbox} type="password" placeholder='PIN' />
                  <button className={styles.btn} type='submit'>Register</button>
              </div>

              <div className="text-center">
                <span className='text-gray-500'>Already Register? <Link className='text-red-500' to="/username">Login Now</Link></span>
              </div>

          </form>

        </div>
      </div>
    </div>
  )
}
