import React from 'react'
import "../styles/home.css"

function home() {
  return (
    <div>
    <div id="welcome-section">
    <div className="forest" />
    <div className="silhouette" />
    <div className="moon" />
    <div className="container">
      <h1>
        <span className="line">I do</span>
        <span className="line">modern web design</span>
        <span className="line">
          <span className="color">&</span> code.
        </span>
      </h1>
      <div className="buttons">
        <a href="#projects">my portfolio</a>
        <a href="#contact" className="cta">
          get in touch
        </a>
      </div>
    </div>
  </div>
  </div>
  )
}

export default home