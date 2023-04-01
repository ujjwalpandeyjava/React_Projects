import React, { Fragment } from "react";
import Iframe from "react-iframe";
import projectsPic from './images/projectPic.png';

export default function WorkExample(props) {
	return (
		<Fragment>
			<div id="workExamplesSection">
				<h1>Projects by me</h1>
				<div id="firstInExamples">
					<div><img src={projectsPic} alt="Me with certificate" /></div>
					<div id="aboutExamples" className='container' >
						{/* <p>Work Examples<br /><sub><i>( Hover/Touch here )</i></sub></p>
						<div className="overlay" id="overlayID">
							<div className="details">
								Click eye to see all the projects in one project "links".
								<div className="eye">
									<a href="https://ujjwalpandeyjava.github.io/Links/examples.html"
										target="_blank" rel="noopener noreferrer">
										<i className="far fa-eye"></i>
									</a>
								</div>
							</div>
						</div> */}
						<Iframe src="https://ujjwalpandeyjava.github.io/Links/examples.html" width="100%" height="600" ></Iframe>
						{/* <Iframe src="http://127.0.0.1:5501/examples.html" width="100%" height="650" ></Iframe> */}

					</div>
				</div>
				{/* <ProfileSummary /> */}
			</div>
		</Fragment>
	)
}