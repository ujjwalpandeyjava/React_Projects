import React, { Fragment, useState } from 'react'
import floatingImage from './images/ujjwalAvatar1Copy.png'
import aboutImage from './images/ujjwalAvatar3.png'
import educationPic from './images/ujjwalAvatarEducation.png'
import contactPic from './images/contact.png'
import projectsPic from './images/projectPic.png'
import UjjwalResume from './Ujjwal_Resume.pdf'
import myPicture from './images/IMG-20210325-WA0006.jpg'
import './App.css';
import Frag from './frag';

function App() {
  let [scrollerDisplaying, setScrollerDisplaying] = useState("flex")  // "flex"/"none"
  let scrollerDisplayingWhat = { "display": scrollerDisplaying };
  const colorOrangeRed = { "color": "orangered" };
  window.onscroll = function () {
    //  Hiding the scroller more indicator when page scrolled 80px
    var currentScrollPos = window.pageYOffset;
    // console.log('Screen scrolled and the current scroll pos is = ' + currentScrollPos);
    if (currentScrollPos > 120 && scrollerDisplaying === "flex") {
      // console.warn('changed to none');
      setScrollerDisplaying("none")
    }
    else if (currentScrollPos < 120 && scrollerDisplaying === "none") {
      // console.warn('changed to flex');
      setScrollerDisplaying("flex")
    }
  }
  const socialIcons = <Fragment>
    <div className="socialIcons">
      <div className="icon">
        <div className="tooltip">Facebook</div>
        <span><a href="https://ujjwalpandeyjava.github.io/Links/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a></span>
      </div>
      <div className="icon">
        <div className="tooltip">Twitter</div>
        <span><a href="https://ujjwalpandeyjava.github.io/Links/" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a></span>
      </div>
      <div className="icon">
        <div className="tooltip">LinkedIn</div>
        <span><a href="https://ujjwalpandeyjava.github.io/Links/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a></span>
      </div>
      <div className="icon">
        <div className="tooltip">Instagram</div>
        <span><a href="https://ujjwalpandeyjava.github.io/Links/" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></span>
      </div>
      <div className="icon">
        <div className="tooltip">Github</div>
        <span><a href="https://ujjwalpandeyjava.github.io/Links/" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a></span>
      </div>
    </div>
  </Fragment>
  const navbar = <Fragment>
    <div className="navbar" id="navbar">
      <h1>IAM<span style={colorOrangeRed}>UJJWALPANDEY</span></h1>
      <div className="hamburger"><i className="fas fa-bars"></i></div>
      <div className="menus">
        <h3> <a href="#firstView">Home</a></h3>
        <h3><a href="#aboutSection">About</a></h3>
        <h3><a href="#educationSection">Education</a></h3>
        <h3><a href="#workExamplesSection">Work</a></h3>
        <h3><a href="#contactMeSection">Contact</a></h3>
      </div>
    </div>
  </Fragment>
  const firstView = <Fragment>
    <div className="firstView" id="firstView">
      <div className="whoIAm">
        <div className="name">Who I AM?
        </div>
        <div className="wrapper">
          <div className="static-txt">I am a &#9;</div>
          <ul className="dynamic-txts">
            <li><span>Web Developer</span></li>
            <li><span>Java Developer</span></li>
            <li><span>React Developer</span></li>
            <li><span>😉#Full-Stack Developer </span></li>
          </ul>
        </div>
        {socialIcons}
        <div id="myAvatar"><img src={floatingImage} alt="It's me" /></div>
      </div>
      <div className="whoIamPic">
        <div>
          <img src={myPicture} alt="It me Ujjwal Pandey" />
        </div>
      </div>
      <section id="scroller" style={scrollerDisplayingWhat}>
        <p>Scroll Down</p>
        <div><span>&bull;</span></div>
      </section>
    </div>
  </Fragment>
  const aboutSection = <Fragment>
    <div id="aboutSection">
      <h1>About me</h1>
      <div id="firstInAbout">
        <div><img src={aboutImage} alt="That's me" /></div>
        <div id="aboutMe">
          <div>
            <div>My name is Ujjwal Pandey, pursuing graduation in:<br /><span> BCA</span> from<span> IGNOU</span>
              and <span>GNIIT</span> from<span> NIIT</span><br /><br />
              I am a full stack Web Developer,
              I work with Java, Advanced-Java, JavaScript, React, MySQL, MongoDB, and so on... according to the projects I am working on.
              <br /><br />My <strong>"area of Interest"</strong> includes "Full-stack Web app Development" and working with different technologies.
              I am looking to connect with engineers and company to work with and on same field of interest.
            </div>
            <div id="downloadCV"><a href={UjjwalResume} download='file.pdf'>Download CV</a></div>
          </div>
          <div id="bars">
            <div ><p>How good I am in?</p><hr /></div>
            <div className='group'>
              <p><span>Back-end Development</span><span>85%</span></p>
              <section><Frag percent="85%" /></section>
            </div>
            <div className='group'>
              <p><span>Front-end Development</span><span>90%</span></p>
              <section><Frag percent="90%" /></section>
            </div>
            <div className='group'>
              <p><span>ReactJs app Development</span><span>80%</span></p>
              <section><Frag percent="80%" /></section>
            </div>
            <div className='group'>
              <p> <span>Full-Stack app Development</span><span>100%</span></p>
              <section><Frag percent="100%" /></section>
            </div>
            <div className='group'>
              <p><span>Competative Coding</span><span>60%</span></p>
              <section><Frag percent="60%" /></section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
  const educationSection = <Fragment>
    <div id="educationSection">
      <h1>Education Journey</h1>
      <div id="firstInEducation">
        <div><img src={educationPic} alt="That's me with certificate" /></div>
        <div id="aboutEducation">
          <div><h1>ACADEMIC</h1></div>
          <div><p><span>2018-Present</span> <br />GNIIT in Clound and Mobile Software Engineering from NIIT</p></div>
          <div><p><span>2018-Present</span> <br />BCA from IGNOU</p></div>
          <div><p><span>2017</span> <br />12th from CBSE</p></div>
          <div><p><span>2015</span> <br />10th from CBSE</p></div>
          <div><h1>Educational Work</h1></div>
          <div><p>Graduation and practice Projects <i><sub>(Give an eye to my github)</sub></i></p></div>
          <div><p><span>Aug-Sept (2 months)</span> <br />Daily Brief Ambassador</p></div>
          <div><p>I am a Fresher</p></div>
        </div>
      </div>
    </div>
  </Fragment>
  const workExample = <Fragment>
    <div id="workExamplesSection">
      <h1>Projects by me</h1>
      <div id="firstInExamples">
        <div><img src={projectsPic} alt="That's me with certificate" /></div>
        <div id="aboutExamples">
          Work Examples
        </div>
      </div>
    </div>
  </Fragment>
  const contactMe = <Fragment>
    <div id="contactMeSection">
      <h1>Get In Touch <br /><sub><em>Let's talk about work</em></sub></h1>
      <div id="firstIncontactMe">
        <div><img src={contactPic} alt="That's me with certificate" /></div>
        <div id="aboutContact">
          <div>
            <div>
              <i class="fas fa-envelope"> </i>
              <a href="mailto:ujjwalpandey.aps@gamil.com"
                target="_blank"> Ujjwalpandey.aps@gmail.com</a>
            </div>
            <div>
              <i class="fas fa-phone-square-alt"></i>
              <a href="tel:+918375990500"> +91-8375-990-500</a>
            </div>
          </div>
          <div>
            <div>
              <i class="fas fa-map-marker-alt"></i> South Delhi, New Delhi
            </div>
            <div>
              <i class="fab fa-linkedin"></i>
              <a href="https://www.linkedin.com/in/ujjwal-pandey-8bb562138/"
                target="_blank" rel="noreferrer"> Ujjwal Pandey</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
  const footer = <Fragment>
    <div className="footer">
      Created by: <i>Ujjwal Pandey</i> for <i>Ujjwal Pandey</i> using ReactJs
    </div>
  </Fragment>
  return (
    <Fragment>
      {navbar}
      <div className="main">
        {firstView}
        {aboutSection}
        {educationSection}
        {workExample}
        {contactMe}
      </div>
      {footer}

    </Fragment >
  );
}

export default App;
