// import React from "react";

// const Navbar = () => {
//   return (
//     <>
//       <div className="container nav_bar"
//       data-aos="fade-down"
//       data-aos-duration="1000" 
//       >
//         <div className="left nav_items">Portfolio</div>
//         <div className="right">
//           <a href="#home" className="nav_items">
//             Home
//           </a>
//           <a href="#AboutMe" className="nav_items">
//           About Me
//           </a>
//           <a href="#skills" className="nav_items">
//             Skills
//           </a>
//           <a href="#projects" className="nav_items">
//             Projects
//           </a>
//           <a href="#contact" className="nav_items">
//             Contact
//           </a>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div
        className="container nav_bar"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="left nav_items">Portfolio</div>
        
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <div className={`rightnav ${menuOpen ? "open" : ""}`}>
          <a href="#home" className="nav_items" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#AboutMe" className="nav_items" onClick={() => setMenuOpen(false)}>
            About Me
          </a>
          <a href="#skills" className="nav_items" onClick={() => setMenuOpen(false)}>
            Skills
          </a>
          <a href="#projects" className="nav_items" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a href="#contact" className="nav_items" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
