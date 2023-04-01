import React, { Fragment } from "react"
const colorOrangeRed = { "color": "orangered" };

export default function Navbar(props) {
	return (
		<Fragment>
			<div className="navbar" id="navbar">
				<h1>IAM<span style={colorOrangeRed}>UJJWALPANDEY</span></h1>
				<div className="hamburger">
					<input type="checkbox" id="check" />
					<label htmlFor="check">
						<i className="fas fa-bars" id="btn"></i>
						<i className="fas fa-times" id="cancel"></i>
					</label>
					<div className="sidebar move" >
						<h3><a href="#firstView">Home</a></h3>
						<h3><a href="#aboutSection">About</a></h3>
						<h3><a href="#educationSection">Education</a></h3>
						<h3><a href="#workExamplesSection">Work</a></h3>
						<h3><a href="#contactMeSection">Contact</a></h3>
						<h3><a href="#summarySection">Summary</a></h3>
					</div>
				</div>
				<div className="menus">
					<h3><a href="#firstView">Home</a></h3>
					<h3><a href="#aboutSection">About</a></h3>
					<h3><a href="#educationSection">Education</a></h3>
					<h3><a href="#workExamplesSection">Work</a></h3>
					<h3><a href="#contactMeSection">Contact</a></h3>
					<h3><a href="#summarySection">Summary</a></h3>
				</div>
			</div>
		</Fragment>
	)
}