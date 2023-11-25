import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="gradient2">

      </div>
  <div className="contact-box">
    <div className="contact-links">
      <h2 className="h2">CONTACT</h2>
      <div className="links">
        <div className="link">
          <a><img className="links-image"  src="https://i.postimg.cc/m2mg2Hjm/linkedin.png" alt="linkedin"/></a>
        </div>
        <div className="link">
          <a><img  className="links-image" src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github"/></a>
        </div>
        <div className="link">
          <a><img  className="links-image" src="https://i.postimg.cc/W4Znvrry/codepen.png" alt="codepen"/></a>
        </div>
        <div className="link">
          <a><img  className="links-image" src="https://i.postimg.cc/NjLfyjPB/email.png" alt="email"/></a>
        </div>
      </div>
    </div>
    <div className="contact-form-wrapper">
      <form>
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
