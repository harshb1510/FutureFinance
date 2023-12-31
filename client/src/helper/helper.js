import emailjs from "@emailjs/browser";
import axios from "axios";
import jwt_decode from "jwt-decode";
import ENV from "../cofig.js"


axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

/** Make API Requests */

/** To get username from Token */
export async function getUsername() {
  const token = localStorage.getItem("token");
  if (!token) return Promise.reject("Cannot find Token");
  let decode = jwt_decode(token);
  return decode;
}

/** authenticate function */
export async function authenticate(username) {
  try {
    
    return await axios.post(`${ENV.HOST}/authenticate`, {
      username,
    });
  } catch (error) {
    return { error: "Username doesn't exist...!" };
  }
}

/** get User details */
export async function getUser({ username }) {
  try {
    const { data } = await axios.get(
      `${ENV.HOST}/user/${username}`
    );
    
    return { data };
  } catch (error) {
    return { error: "Password doesn't Match...!" };
  }
}

/** register user function */
export async function registerUser(credentials) {
  try {
    let { username, email } = credentials;
    
    const {
      data: { msg },
      status,
    } = await axios.post(`${ENV.HOST}/register`, credentials);

    /** send email */
    // if (status === 201) {
    //   await axios.post(`${ENV.HOST}/registerMail`, {
    //     username,
    //     userEmail: email,
    //     text: msg,
    //   });
    // }

    return Promise.resolve(msg);
  } catch (error) {
    return Promise.reject({ error });
  }
}

/** login function */
export async function verifyPassword({ username, password }) {
  try {
    if (username) {
      const { data } = await axios.post(`${ENV.HOST}/login`, {
        username,
        password,
      });
      return Promise.resolve({ data });
    }
  } catch (error) {
    return Promise.reject({ error: "Password doesn't Match...!" });
  }
}

/** update user profile function */
export async function updateUser(response) {
  try {
    const token = await localStorage.getItem("token");
    
    
    const data = await axios.put(
      `${ENV.HOST}/updateuser`,
      response,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    

    return Promise.resolve({ data });
  } catch (error) {
    return Promise.reject({ error: "Couldn't Update Profile...!" });
  }
}

/** generate OTP */
export async function generateOTP(username) {
  try {
    const {
      data: { code },
      status,
    } = await axios.get(`${ENV.HOST}/generateOTP`, {
      params: { username },
    });

    // send mail with the OTP
    if (status === 201) {
      let {
        data: { email },
      } = await getUser({ username });
      let text = `Your Password Recovery OTP is ${code}. Verify and recover your password.`;

      //   await axios.post("${ENV.HOST}/registerMail", {
      //     username,
      //     userEmail: email,
      //     text,
      //     subject: "Password Recovery OTP",

      const templateParams = {
        from_name: "Future Finance",
        from_email: "akshatgtc@gmail.com",
        to_email: email,
        message: text,
      };

      emailjs
      .send(
        "service_m5wpqnq",
        "template_xk3pp1q",
        templateParams,
        "bKs4oP1IZMlG27n--"
      )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
    }
    return Promise.resolve(code);
  } catch (error) {
    return Promise.reject({ error });
  }
}

/** verify OTP */
export async function verifyOTP({ username, code }) {
  try {
    const { data, status } = await axios.get(
      `${ENV.HOST}/verifyOTP`,
      { params: { username, code } }
    );
    return { data, status };
  } catch (error) {
    return Promise.reject(error);
  }
}

/** reset password */
export async function resetPassword({ username, password }) {
  try {
    console.log("hiiiii")
    const { data, status } = await axios.put(
      `${ENV.HOST}/resetPassword`,
      { username, password }
    );
    return Promise.resolve({ data, status });
  } catch (error) {
    return Promise.reject({ error });
  }
}
