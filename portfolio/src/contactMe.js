import React, { Fragment } from "react";
import contactPic from './images/contact.png'

export default function ContactMe(props) {
	return (
		<Fragment>
			<div id="contactMeSection">
				<h1>Get In Touch <br /><sub><em>Let's talk about work</em></sub></h1>
				<div id="firstInContactMe">
					<div><img src={contactPic} alt="That's me with certificate" /></div>
					<div id="aboutContact" style={{ padding: '16px 0 0 0', minHeight: '160px' }}>
						<div>
							<div>
								<i className="fas fa-envelope"> </i>
								<a href="mailto:ujjwalpandey.aps@gamil.com"
									target="_blank" rel="noopener noreferrer"> Ujjwalpandey.aps@gmail.com</a>
							</div>
							<div>
								<i className="fas fa-phone-square-alt"></i>
								<a href="tel:+918375990500"> +91-8375-990-500</a>
							</div>
						</div>
						<div>
							<div>
								<i className="fas fa-map-marker-alt"></i>Devli, South Delhi, New Delhi
							</div>
							<div>
								<i className="fab fa-linkedin"></i>
								<a href="https://www.linkedin.com/in/ujjwal-pandey-8bb562138/"
									target="_blank" rel="noopener noreferrer"> Ujjwal Pandey</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}