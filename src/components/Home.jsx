 


import React, { useEffect, useRef } from "react";
import pdf from "../pdf/webd resume.pdf";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my portfolio",
        "My Name is Astha Chaurasia",
        "I'm Web developer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id="home">
        <div className="left">
          <h1>
            <span ref={typedRef}></span>
          </h1>
          <a
            href={pdf}
            download="Resume.pdf"
            className="btn btn-outline-warning my-3 "
          >
            Download Resume
          </a>
        </div>

        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img
              src="https://cdn.pixabay.com/photo/2022/05/27/11/17/coding-7224945_640.png"
              alt="hero"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;