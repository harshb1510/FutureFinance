import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../assets/profile.png";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { registerValidation } from "../helper/validate";
import { registerUser } from "../helper/helper";
import convertToBase64 from "../helper/convert";

export default function Register() {
  const navigate = useNavigate();
  const [file, setFile] = useState();

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      pin: "",
      accountNumber: "",
    },
    validate: registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = Object.assign(values, { profile: file || "" });
      let registerPromise = registerUser(values);
      console.log("Hello");
      toast.promise(registerPromise, {
        loading: "Creating...",
        success: <b>Register Successfully...!</b>,
        error: <b>Could not Register.</b>,
      });

      registerPromise
        .then(function () {
          navigate("/username");
        })
        .catch((error) => {
          console.error(error);
          toast.error("Registration failed");
        });
    },
  });

  /** formik doensn't support file upload so we need to create this handler */
  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };
  
  


  return (
    <div className="register-container">
      <div className="gradient2"></div>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="register-wrapper flex justify-center items-center ">
        <div className="profile-content">
          <div>
            <h4 style={{ fontSize: "30px" }}>Register</h4>
          </div>

          <form className="profile-form" onSubmit={formik.handleSubmit}>
            <div className="profile-image flex justify-center">
              <label htmlFor="profile">
                <img
                  src={file || avatar}
                  className="profile-avatar"
                  alt="avatar"
                />
              </label>

              <input
                className="profilePhotoInput"
                profileInput
                onChange={onUpload}
                type="file"
                id="profile"
                name="profile"
              />
            </div>

            <div className="textbox flex flex-col items-center ">
              <input
                {...formik.getFieldProps("email")}
                className="profileInput"
                type="text"
                placeholder="Email"
              />
              <input
                {...formik.getFieldProps("username")}
                className="profileInput"
                type="text"
                placeholder="Username"
              />
              <input
                {...formik.getFieldProps("password")}
                className="profileInput"
                type="password"
                placeholder="Password"
              />
              <input
                {...formik.getFieldProps("pin")}
                className="profileInput"
                type="password"
                placeholder="PIN"
              />
              <button className="usernameButton" type="submit">
                Register
              </button>
            </div>

            <div className="text-center">
              <span className="text-gray-500">
                Already Register?{" "}
                <Link className="profileLink" to="/username">
                  Login Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
