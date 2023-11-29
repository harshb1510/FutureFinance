import { Link } from "react-router-dom";
import "./Carousel.css";
import CountUp from "react-countup";


const Carousel = () => {
  
  return (
    <section>
      <div className="carousel-container">
        <div className="gradientCarousel">
              </div>
                
        <div className="carousel-left">
          <h2 className="carousel-text">
            MAKE PAYMENTS
            <br /> EASY AND SIMPLIFY <br /> YOUR FINANCES
          </h2>
          <h3>
            <p>

            A new way to make payments easy,reliable and secure.
            <br /> You can manage all your transactions from your mobile phone
            </p>
          </h3>
          <div className="carousel-banner">
           <Link to="/payment"><button className="carousel-button">Get Started Now!</button></Link>
            <div className="carousel-banner-images">
              <img
                src="https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=1200"
                className="banner-img"
                alt=""
                />
              <img
                src="https://images.pexels.com/photos/2853592/pexels-photo-2853592.jpeg?auto=compress&cs=tinysrgb&w=1200"
                className="banner-img"
                alt=""
                />
              <img
                src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1200"
                className="banner-img"
                alt=""
                />
              <img
                src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1200"
                className="banner-img"
                alt=""
                />
            </div>
          </div>
          <div className="countUp">
            <div>
              <CountUp start={0} end={12} duration={2} />
              <span>M+</span>
            </div>
            <div>
              <CountUp start={0} end={1200} duration={1} />
              <span>+</span>
            </div>
          </div>
        </div>
        <div className="carousel-right">
          <div className="bannerCircle">    
          <div className="gradient2">
              </div>    
          <img src="/photos/carousel.png" alt="" className="paymentImg"  />
          </div>
        </div> 
      </div>
      <div className="halfCircle">
        <div>
        <h1>-Process</h1>
        <span>How It Works</span>
        </div>
        <div className="carouselCircles">
          <div className="carouselCircle">1</div>
          <span className="carouselNumberLine"></span>
          <div className="carouselCircle" >2</div>
          <span className="carouselNumberLine"></span>
          <div className="carouselCircle">3</div>
        </div>
        <div className="carouselItems">
        <div className="carouselItem">Register 
          </div>
          
          <div className="carouselItem">Login</div>
          <div className="carouselItem">Success</div>
        </div>
      </div>
   
    </section>
  );
};

export default Carousel;
