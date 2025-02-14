import React from "react";

const AboutMe = () => {
  return (
    <> 
    <h1>About Me</h1>
    <div className="container ex" id="AboutMe">
       
      <div
        className="ex-items text-center my-5"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div className="left">
           
        </div>
        <div className="right">
          <h2>Hi, I'm Astha Chaurasia</h2>
          <h4>
            <span style={{ color: "yellowgreen" }}>Web Developer & ML Enthusiast</span>
          </h4>
          <p style={{ color: "yellow" }}>
            Passionate about technology, coding, and solving real-world problems through
            software development. I love working on projects that involve web
            development, artificial intelligence.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutMe;
