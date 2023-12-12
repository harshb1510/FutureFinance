import React from "react";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../assets/profile.png";
import toast, { Toaster } from "react-hot-toast";
import { generateOTP } from "../helper/helper";
import { useFormik } from "formik";
import { passwordValidate } from "../helper/validate";
import useFetch from "../hooks/fetch.hook";
import { useAuthStore } from "../store/store";
import { verifyPassword } from "../helper/helper";
import ENV from '../cofig.js'



export default function Password() {
  const navigate = useNavigate();
  const { username } = useAuthStore((state) => state.auth);
  const [{ isLoading, apiData, serverError }] = useFetch(
    `${ENV.HOST}/user/${username}`
  );
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      const loginPromise = verifyPassword({
        username,
        password: values.password,
      });
      toast.promise(loginPromise, {
        loading: "Checking...",
        success: <b>Login Successfully...!</b>,
        error: <b>Password Not Match!</b>,
      });

      loginPromise
        .then((res) => {
          const { token } = res.data;
          localStorage.setItem("token", token);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
          formik.setFieldValue("password", ""); // Clear password field in case of an error
        });
    },
  });

  if (isLoading) return <h1 className="text-2xl font-bold">isLoading</h1>;
  if (serverError)
    return <h1 className="text-xl text-red-500">{serverError.message}</h1>;

  function handleRecover() {
    let sentPromise = generateOTP(username);

    toast.promise(sentPromise, {
      loading: "Sending...",
      success: <b>OTP has been send to your email!</b>,
      error: <b>Could not Send it!</b>,
    });

    sentPromise.then((OTP) => {
      console.log(OTP);
    });
  }

  return (
    <div className="password-container mx-auto">
      <div className="gradient2"></div>
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="username-wrapper profile-content flex justify-center items-center">
        <div className="">
          <div >
            <h4 style={{fontSize:"30px",marginBottom:"10px"}}>
              Hello {apiData?.firstName || apiData?.username}
            </h4>
            <span >
              Explore More by connecting with us.
            </span>
          </div>

          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile-image flex justify-center py-4">
              <img
                src={apiData?.profile || avatar}
                className="profile-avatar"
                alt="avatar"
              />
            </div>

            <div className=" textbox ">
              <input
                {...formik.getFieldProps("password")}
                className="profileInput"
                type="password"
                placeholder="Password"
              />
              <button className="usernameButton" type="submit">
                Sign In
              </button>
            </div>

            <div className="">
              <span className="text-gray-500">
                Forgot Password?{" "}
                <Link
                  className="profileLink"
                  to="/recovery"
                  onClick={handleRecover}
                >
                  Recover Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
