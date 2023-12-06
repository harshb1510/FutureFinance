import "./Contact.css";
import { useForm } from '@formspree/react';
import ENV from '../../cofig.js'

const Contact = () => {
  const [state, handleSubmit] = useForm(ENV.FORMSPREE_KEY);
  if (state.succeeded) {
    return(<div> <p style={{color:"white",textAlign:"center",fontSize:"50px",paddingTop:"260px",paddingBottom:"230"}}>Your message has been sent to us</p>;
            </div>)
    }
  return (
    <section id="contact">
      <div className="gradient2">
      </div>
  <div className="contact-box">
    <div className="contact-links">
      <h2 className="h2">CONTACT</h2>
      <div className="links">
        <div className="link">
          <><img className="links-image"  src="https://i.postimg.cc/m2mg2Hjm/linkedin.png" alt="linkedin"/></>
        </div>
        <div className="link">
          <><img  className="links-image" src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github"/></>
        </div>
        <div className="link">
          <><img  className="links-image" src="https://i.postimg.cc/W4Znvrry/codepen.png" alt="codepen"/></>
        </div>
        <div className="link">
          <><img  className="links-image" src="https://i.postimg.cc/NjLfyjPB/email.png" alt="email"/></>
        </div>
      </div>
    </div>
    <div className="contact-form-wrapper">
      <form action="https://formspree.io/f/xpzggoll" method="POST" onSubmit={handleSubmit}> 
        <div className="form-item">
          <input className="inputs" type="text" name="sender" required/>
          <label className="labels">Name:</label>
        </div>
        <div className="form-item">
          <input className="inputs" type="text" name="email" required/>
          <label className="labels">Email:</label>
        </div>
        <div className="form-item">
          <textarea className="textarea" name="message" required></textarea>
          <label className="labels">Message:</label>
        </div>
        <button className="submit-btn">Send</button>  
      </form>
    </div>
  </div>
  <div className='gradient2'>
  </div>
</section>
  );
};

export default Contact;
