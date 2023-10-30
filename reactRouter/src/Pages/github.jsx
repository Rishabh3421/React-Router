import React from 'react';
import '../styles/socialacc.css'; 

const SocialIcons = () => {
  return (
    <div className="hero">
      <h1>Connect with me</h1>

      <div className="social-links">
        <a href=""><i className="fab fa-facebook-f"></i></a>
        <a href=""><i className="fab fa-instagram"></i></a>
        <a href=""><i className="fab fa-twitter"></i></a>
        <a href=""><i className="fab fa-github"></i></a>
        <a href=""><i className="fab fa-linkedin-in"></i></a>
      </div>
    </div>
  );
};

export default SocialIcons;
