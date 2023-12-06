// CreditCard.js
import React, { useEffect, useState } from "react";
import "./getCard.css";
import jwtDecode from "jwt-decode";
import ENV from '../../cofig.js'



const CreditCard = () => {

  const [transformStyle, setTransformStyle] = useState("none");

  const user = localStorage.getItem("token");
  const decodedUser =   user? jwtDecode(user):null;
  // const { username } = useAuthStore(state => state.auth)

  const [name, setName] = useState("")
  
  const username = decodedUser? decodedUser.username:null;

  useEffect(() => {
    const fetchUser = () => {
      if(username){
    fetch(`${ENV.HOST}/user/${username}`)
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      setName(data.username)
      // console.log(profile)
    })
    .catch(err => console.log(err))
  
  }
  }
    fetchUser()

  }, [username])
  
  

  const constrain = 200;

  const transforms = (x, y, el) => {
    const box = el.getBoundingClientRect();
    const calcX = -(y - box.y - box.height / 2) / constrain;
    const calcY = (x - box.x - box.width / 2) / constrain;

    return `perspective(100px) rotateX(${calcX}deg) rotateY(${calcY}deg)`;
  };

  const transformElement = (el, xyEl) => {
    setTransformStyle(transforms.apply(null, xyEl));
  };

  useEffect(() => {
    const mouseOverContainer = document.querySelector(".wrapper");
    const cardLayer = document.querySelector(".card");

    const handleMouseMove = (e) => {
      const xy = [e.clientX, e.clientY];
      const position = xy.concat([cardLayer]);

      window.requestAnimationFrame(() => {
        transformElement(cardLayer, position);
      });
    };

    mouseOverContainer.addEventListener("mousemove", handleMouseMove);

    return () => {
      mouseOverContainer.removeEventListener("mousemove", handleMouseMove);
    };
  }, ); // Empty dependency array to run the effect only once

  return (
    <div className="wrapper">
              <div className="gradient2"></div>
      <div className="card">
        {" "}
        <div className="card-details">
          {" "}
          <div className="top">
            {" "}
            <div className="title">
              {" "}
              <div className="hexagon">
                {" "}
                <div className="trapezoid" id="t-1"></div>{" "}
                <div className="trapezoid" id="t-2"></div>{" "}
                <div className="trapezoid" id="t-3"></div>{" "}
                <div className="trapezoid" id="t-4"></div>{" "}
              </div>{" "}
              <p className="name">FutureFinance</p>{" "}
            </div>{" "}
            <div className="chip">
              {" "}
              <img
                className="getCard-images"
                src="https://raw.githubusercontent.com/dasShounak/freeUseImages/main/chip.png"
                alt="chip"
              />{" "}
            </div>{" "}
          </div>{" "}
          <div className="bottom">
            {" "}
            <h3 className="cardholder">{name}</h3>{" "}
            <div className="type">
              {" "}
              <div className="logo">
                {" "}
                <img
                  className="getCard-images"
                  src="https://raw.githubusercontent.com/dasShounak/freeUseImages/main/Visa-Logo-PNG-Image.png"
                  alt="Visa"
                />{" "}
              </div>{" "}
              <p className="subcategory">Finance</p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default CreditCard;
