import React, { Fragment, useState } from 'react'
import AboutSection from './aboutSection'
import './App.css'
import ContactMe from './contactMe'
import EducationSection from './educationSection'
import Footer from './footer'
import myPicture from './images/IMG-20210325-WA0006.jpg'
import floatingImage from './images/ujjwalAvatar1Copy.png'
import Navbar from './navbar'
import SocialIcons from './socialIcons'
import WorkExample from './workExample'
import WorkingLanguages from './workingLanguages'
import SummaryTilt from './tiltEffect/summaryTilt'
import 'idempotent-babel-polyfill';


function App() {
  let [scrollerDisplaying, setScrollerDisplaying] = useState("flex")  // "flex"/"none"
  let scrollerDisplayingWhat = { "display": scrollerDisplaying };
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
  const firstView = <Fragment>
    <div id="firstView" className="firstView">
      <div className="whoIAm">
        <div className="name">Who I AM?
        </div>
        <div className="wrapper">
          <div className="static-txt">I am a &#9;</div>
          <ul className="dynamic-texts">
            <li><span>Web Developer</span></li>
            <li><span>Java Developer</span></li>
            <li><span>ReactJS Dev.</span></li>
            <li><span><span role="img" aria-label='Wink emoji'>😉</span>Full-Stack Dev.</span></li>
          </ul>
        </div>
        <SocialIcons />
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
  return (
    <Fragment>
      <Navbar />
      <div className="main">
        {firstView}
        <AboutSection />
        <EducationSection />
        <WorkExample />
        <WorkingLanguages />
        <ContactMe />
        <Footer />
        <SummaryTilt />
      </div>

    </Fragment >
  );
}

export default App;
