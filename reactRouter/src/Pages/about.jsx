import React from 'react'
import "../styles/about.css"

function about() {
  return (
   <div className='maindiv'>
     <div className="row">
    <div className="containers col-lg-6 col-md-6">
      <div className="pic"></div>
      <div className="box1"></div>
      <div className="box2"></div>
      <div className="social1">
        <i className="fa fa-facebook" aria-hidden="true"></i>
      </div>
      <div className="social2">
        <i className="fa fa-dribbble" aria-hidden="true"></i>
      </div>
      <div className="social3">
        <i className="fa fa-codepen" aria-hidden="true"></i>
      </div>
    </div>

    <div className="content col-md-offset-6 col-lg-offset-6">
      <center><h1 className="contentHead">ABOUT ME</h1></center>
      <h2>
  Hi there, <br/><br/>
  My name is Rishabh, and I'm a passionate frontend web developer. I recently experimented with a 45<sup>o</sup> transformed DIV with a -45<sup>o</sup> background, and it turned out to be an exciting journey.<br/><br/>
  I'm thrilled that it worked out so well.
  <br/><br/>
  Show your L<span>&hearts;</span>VE if you like my portfolio.
  <br/><br/>
  <p><span style={{ textAlign: 'right', color: '#000000', fontSize: '18px' }}>No matter what you say, that person in the picture is kind of cute, right?</span></p>
</h2>

    </div>
  </div>
   </div>
  )
}

export default about