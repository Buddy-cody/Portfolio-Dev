import React from 'react';
import Portfolio1 from '../../assets/images (1).jpeg';
import Portfolio2 from "../../assets/images (2).jpeg";
import Portfolio3 from "../../assets/images (3).jpeg";
import Portfolio4 from "../../assets/image16.png";
import Portfolio5 from "../../assets/images.jpeg";
import Portfolio6 from "../../assets/download (1).jpeg";

import './works.css'

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="workDesc">
        I take pride in paying attention to the smallest details and show skills
        and experience to help business achieve their goals and create a strong
        online presence.
      </span>
      <div className="worksImgs">
        <img src={Portfolio1} alt="  " className="worksImg" />
        <img src={Portfolio2} alt="  " className="worksImg" />
        <img src={Portfolio3} alt="  " className="worksImg" />
        <img src={Portfolio4} alt="  " className="worksImg" />
        <img src={Portfolio5} alt="  " className="worksImg" />
        <img src={Portfolio6} alt="  " className="worksImg" />
      </div>
      <button className="workBtn">See More</button>
    </section>
  );
}

export default Works