import React, { useRef } from "react";
import "./contact.css";
import Wall1 from "../../assets/image1.png";
import Wall2 from "../../assets/image2.png";
import Wall3 from "../../assets/image3.png";
import Wall4 from "../../assets/image4.png";
import Wall5 from "../../assets/image7.png";
import Wall6 from "../../assets/image9.png";
import Wall7 from "../../assets/image6.png";
import Wall8 from "../../assets/image8.png";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email sent !");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
          I have the opportunity to work with a deserve grove group of
          companies. some of the notable companies I have worked with includes
        </p>
        <div className="clientImgs">
          <img src={Wall5} alt=" " className="clientImg" />
          <img src={Wall6} alt=" " className="clientImg" />
          <img src={Wall7} alt=" " className="clientImg" />
          <img src={Wall8} alt=" " className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" />
          <input type="email" className="email" placeholder="Your Email" />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <a href="https://www.youtube.com">
              <img src={Wall1} alt="social media" className="link" />
            </a>
            <a href="https://www.instagram.com">
              <img src={Wall2} alt="social media" className="link" />
            </a>
            <a href="https://www.facebook.com">
              <img src={Wall3} alt="social media" className="link" />
            </a>
            <a href="https://wa.me">
              <img src={Wall4} alt="social media" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
