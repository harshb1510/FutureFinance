import "./About.css";

const About = () => {
  return (
    <>
      <div className="transform">
        <h1>"Transforming banking for tomorrow"</h1>
      </div>
      <div className="gradient3"></div>
      
        <div className="about-container">
          <div className="about-left">
            <h3>About Us</h3>
            <span>
            At FutureFinance, we envision a future where banking is seamless, inclusive, and aligned with the technological advancements of tomorrow. We strive to be at the forefront of financial services, leveraging cutting-edge technology to enhance the overall banking experience.
            </span>
            <h2>Our Vision</h2>
            <span>
              Welcome to FutureFinance, where we are dedicated to
              transforming banking for tomorrow. Our commitment is to provide
              innovative and personalized financial solutions that cater to the
              evolving needs of our clients.
            </span>
            <h2>Our Mssion</h2>
            <span>
            Our mission is to empower individuals and businesses by offering comprehensive banking solutions that transcend traditional boundaries. We aim to foster financial well-being and contribute to the economic growth of the communities we serve.


            </span>
            <h2>Why Choose?</h2>
            <span>
             <ul>
              <li>
              Innovation: We embrace technology to bring you innovative and efficient banking solutions.
              </li>
              <li>
              Innovation: We embrace technology to bring you innovative and efficient banking solutions.
              </li>
              <li>
              Innovation: We embrace technology to bring you innovative and efficient banking solutions.
              </li>
             </ul>
            </span>
          </div>
          <div className="about-right">
            <div>
            <img src="/photos/1.png" alt="" className="about-image" />
            </div>
            <div>
            <img src="/photos/3.webp" alt="" className="about-image1" />
            </div>
            {/* <div>
            <img src="/photos/3.webp" alt="" className="about-image" />
            </div>
            <div>
            <img src="/photos/4.jpg" alt="" className="about-image" />
            </div> */}
          </div>
        </div>
    </>
  );
};

export default About;
