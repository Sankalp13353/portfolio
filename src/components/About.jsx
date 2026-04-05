import React from "react";
import "../About.css";
import profilePic from "./profile.jpg";  

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <div className="about-left">
          <p>
            Hi! I’m Sankalp, a passionate frontend developer and competitive
            programmer. I enjoy building interactive web apps and solving
            challenging problems on coding platforms.
          </p>

          <div className="coding-stats">
            <h3>Competitive Coding</h3>
            <div className="platforms">
              <div className="platform-card">
                <h4>LeetCode</h4>
                <p>Rating: 1350+</p>
                <p>Questions Solved: 120+</p>
              </div>
              <div className="platform-card">
                <h4>Codeforces</h4>
                <p>Rating: 800+</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-right">
          <img src={profilePic} alt="Sankalp" className="profile-img" />
        </div>
      </div>
    </section>
  );
};

export default About;
