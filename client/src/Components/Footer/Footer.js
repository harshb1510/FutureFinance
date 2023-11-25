import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState(""); // State to store email input

  const templateParams = {
    from_name: "Future Finance",
    from_email: "akshatgtc@gmail.com",
    to_email: email,
    message: "Thank you for subscribing to Future Finance",
  };

  const submitForm = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_m5wpqnq",
        "template_xk3pp1q",
        templateParams,
        "bKs4oP1IZMlG27n--"
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        setSubscribed(true);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <section>
      <div className="footerWrapper">
        <div className="footerLeft">
         <Link to='/'>
          
           <h3 className="footerLogo">FutureFinance</h3>
          </Link>
          <p>
            @2023 FutureFinance
            <br />
            All rights reserved
          </p>
        </div>
        <div className="footerCenter">
          <div className="footerCenterLeft">
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "white" }}
            >
              <div className="footerCenterLeftItems">About Us</div>
            </Link>

            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "white" }}
            >
              <div className="footerCenterLeftItems">Contact Us</div>
            </Link>
            <Link
              to="/testimonial"
              style={{ textDecoration: "none", color: "white" }}
            >
              <div className="footerCenterLeftItems">Testimonials</div>
            </Link>
            
          </div>
          <div className="footerCenterRight">
            <div className="footerCenterLeftItems">Help Center</div>
           <Link to="terms">
           
            <div className="footerCenterLeftItems">Term of Service</div>
           </Link>
            
            <div className="footerCenterLeftItems">Privacy Policy</div>
          </div>
        </div>{" "}
        <form className="footerRight" onSubmit={submitForm}>
          <h2>Stay up to Date</h2>
          {!subscribed ? (
            <>
              <input
                type="text"
                placeholder="Your email Address"
                className="footerInput"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email state
              />
              <button className="footerInputButton" type="submit">
                Submit
              </button>
            </>
          ) : (
            <h1>Thank you for subscribing</h1>
          )}
        </form>
      </div>
    </section>
  );
};

export default Footer;