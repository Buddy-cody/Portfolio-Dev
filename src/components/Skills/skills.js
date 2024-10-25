import React from 'react';
import './skills.css';
import Web from '../../assets/image10.png';
import App from '../../assets/image11.png';
import Game from '../../assets/image12.png';


const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I am a Skilled and Passionate Developer with Experience with Creating
        user friendly websites. I am a Skilled and Passionate Developer with
        Experience with Creating user friendly websites.I take pride in paying
        attention to the smallest details and show skills and experience to help
        business achieve their goals and create a strong online presence
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={Web} alt=" " className="skillBarImg" />
          <div className="skillBarText">
            <h2>WEB Development</h2>
            <p>This is a demo text, you can write own content</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={App} alt=" " className="skillBarImg" />
          <div className="skillBarText">
            <h2>APP Development</h2>
            <p>This is a demo of text, you can write own content</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Game} alt=" " className="skillBarImg" />
          <div className="skillBarText">
            <h2>GAME Development</h2>
            <p>This is a demo of text, you can write own content</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills