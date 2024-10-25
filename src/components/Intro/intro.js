import React from 'react';
import './intro.css';
import bg from '../../assets/undraw_Certificate_re_yadi-removebg-preview.png';
import { Link } from "react-scroll";
import Hire from '../../assets/bag.png'


const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Buddy</span>
          <br />
          Website Developer
        </span>
        <p className="introPara">
          I am a Skilled Web Developer with experience in creating visually<br/>
          appearing and user friendly websites.
        </p>
        <Link>
          <button className="btn">
            <img src={Hire} alt=" " className='btnImg'/>
             Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  );
}

export default Intro