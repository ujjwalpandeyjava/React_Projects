import React, { Fragment, useState } from "react";
import aboutImage from './images/ujjwalAvatar3.png'
import './frag.css';
import Frag from "./frag";
import PreviewPDFs from "./previewPDFs";

function AboutSection(props) {
	const [viewPreview, setViewPreview] = useState(false);
	const previewPDFs = (viewPreview) ? < PreviewPDFs viewPreview={(x) => setViewPreview(x)} /> : "";
	return (
		<Fragment>
			<div id="aboutSection">
				<h1>About me</h1>
				<div id="firstInAbout">
					<div><img src={aboutImage} alt="That's me" /></div>
					<div id="aboutMe">
						<div>
							<div>
								Hi, am Ujjwal Pandey <br/>
							 	Graduate in: <span>GNIIT</span> <sub>(from<span> NIIT</span>),</sub> and <span>BCA</span> <sub>(from<span> IGNOU</span>)</sub>
								<br /><br />

							 	I am a skilled Full Stack Web Developer passionate about building innovative and user-friendly web applications using cutting-edge technologies, with <span>over 1.5+ yr of experience.</span><br/><br/>
								<span className="tech">I have successfully created responsive and scalable web applications with many technologies.</span>
								<br/><br/>

								As a passionate professional, I am eagerly seeking opportunities to collaborate with great engineers and companies.
								<br /><br />

								<u><strong>Interest area:</strong></u> <i>Working with different technologies.</i>
							</div>
							<div id="downloadCV" style={{ color: 'black', fontWeight:'bolder', fontSize:'18px' }} onClick={() => (!viewPreview) ? setViewPreview(true) : console.log(`Already 'true' change from open full pages module`)}>Resume/CV<br /><em><sub>Preview-Download</sub></em></div>
							{(previewPDFs)}
						</div>
						<div id="bars">
							<div><p>How good I am in?</p><hr /></div>
							<div className='group'>
								<p> <span>Full-Stack Web Development</span><span>99%</span></p>
								<section><Frag percent="100%" /></section>
							</div>
							<div className='group'>
								<p><span>Client side Development</span><span>97%</span></p>
								<section><Frag percent="97%" /></section>
							</div>
							<div className='group'>
								<p><span>Back-end Development</span><span>85%</span></p>
								<section><Frag percent="85%" /></section>
							</div>
							<div className='group'>
								<p><span>ReactJs app Development</span><span>80%</span></p>
								<section><Frag percent="80%" /></section>
							</div>
							<div className='group'>
								<p><span>Competitive programming</span><span>60%</span></p>
								<section><Frag percent="60%" /></section>
							</div>
							<div className="group">
								<p style={{color: '#0977c3'} }><span>There is always room for improvement</span><span role="img" aria-label="wink emoji">😉</span></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default AboutSection;