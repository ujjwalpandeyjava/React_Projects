import React, { Fragment, useState } from 'react'
import floatingImage from './images/ujjwalAvatar1Copy.png'
import myPicture from './images/IMG-20210325-WA0006.jpg'
import './App.css';

function App() {

  let [scrollerDisplaying, setScrollerDisplaying] = useState("flex")  // "flex"/"none"
  let scrollerDisplayingWhat = { "display": scrollerDisplaying };

  const colorOrangeRed = { "color": "orangered" };

  //  Hiding the scroller more indicator when page scrolled 80px
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    // console.log('Screen scrolled and the current scroll pos is = ' + currentScrollPos);
    if (currentScrollPos > 80 && scrollerDisplaying === "flex") {
      // console.warn('changed to none');
      setScrollerDisplaying("none")
    }
    else if (currentScrollPos < 80 && scrollerDisplaying === "none") {
      // console.warn('changed to flex');
      setScrollerDisplaying("flex")
    }
  }

  const socialIcons =
    <div className="socialIcons">
      <div className="icon">
        <div className="tooltip">Facebook</div>
        <span><a href="https://ujjwalpandeyjava.github.io/Links/" target="_blank" rel="noopener"><i className="fab fa-facebook-f"></i></a></span>
      </div>
      <div className="icon">
        <div className="tooltip">Twitter</div>
        <span><a href="https://ujjwalpandeyjava.github.io/Links/" target="_blank" rel="noopener"><i className="fab fa-twitter"></i></a></span>
      </div>
      <div className="icon">
        <div className="tooltip">LinkedIn</div>
        <span><a href="https://ujjwalpandeyjava.github.io/Links/" target="_blank" rel="noopener"><i className="fab fa-linkedin"></i></a></span>
      </div>
      <div className="icon">
        <div className="tooltip">Instagram</div>
        <span><a href="https://ujjwalpandeyjava.github.io/Links/" target="_blank" rel="noopener"><i className="fab fa-instagram"></i></a></span>
      </div>
      <div className="icon">
        <div className="tooltip">Github</div>
        <span><a href="https://ujjwalpandeyjava.github.io/Links/" target="_blank" rel="noopener"><i className="fab fa-github"></i></a></span>
      </div>
    </div>
  const navbar = <Fragment>
    <div className="navbar" id="navbar">
      <h1>IAM<span style={colorOrangeRed}>UJJWALPANDEY</span></h1>
      <div className="hamburger"><i className="fas fa-bars"></i></div>
      <div className="menus">
        <h3>Home</h3>
        <h3>About</h3>
        <h3>Education</h3>
        <h3>Work</h3>
        <h3>Contact</h3>
      </div>
    </div>
  </Fragment>
  const firstView = <Fragment>
    <div className="firstView">
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

  return (
    <Fragment>
      {navbar}
      <div className="main">
        {firstView}
        {/* <div style="display: block; height: 30px;"></div> */}
        <div className="about">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis molestiae tenetur, et
          pariatur dignissimos qui at harum eligendi iste optio, cum voluptas quam. Assumenda at tenetur, numquam
          dolore, doloribus iste aut veniam dolorem in consectetur alias repudiandae iure non sint. Quidem error
          aliquam quis repudiandae!</div>
        <div className="education">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vitae quasi excepturi. Odio,
          consequatur voluptatem. Ipsam odio, repellat aliquid, sint vel officiis quisquam enim nostrum, rerum est
          dicta! Sed tempora sapiente corporis animi modi at beatae magni dolorum reprehenderit minus aspernatur
          quibusdam ratione delectus, necessitatibus quidem, a iure alias inventore accusamus. Voluptatum nemo dolor
          quaerat?</div>
        <div className="workEg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores numquam ratione
          officiis doloribus rem earum quo labore? Tempore, necessitatibus facere voluptatem magnam a veritatis enim
          facilis ea fugit unde aliquam accusamus vel eligendi quasi, totam sed excepturi voluptas ipsa dignissimos
          nostrum nemo. Illo sed dignissimos molestias eligendi officiis possimus consectetur neque, id facilis
          quaerat consequatur in aut necessitatibus facere vel tempore eius nesciunt voluptatibus nihil mollitia!
        </div>
        <div className="contact">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat placeat odio quod doloribus
          ipsum. Doloremque dicta ipsum fugit similique suscipit. Ad deleniti fugit quod nemo blanditiis itaque
          similique impedit. Excepturi quam quidem cumque fuga, voluptatibus deserunt?</div>
      </div>

      <div className="footer"></div>
      <script src="Js.js"></script>
    </Fragment >
  );
}

export default App;
