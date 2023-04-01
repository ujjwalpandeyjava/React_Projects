import React, { Fragment } from "react";
import educationPic from './images/ujjwalAvatarEducation.png'


export default function EducationSection(props) {
	return (
		<Fragment>
			<div id="educationSection">
				<h1>Education Journey</h1>
				<div id="firstInEducation">
					<div><img src={educationPic} alt="That's me with certificate" /></div>
					<div id="aboutEducation">
						<div><h1>ACADEMIC</h1></div>
						<div><p><span>2019-2021</span> <br />GNIIT in Cloud and Mobile Software Engineering <i>from NIIT</i></p></div>
						{/* <div><p><span>2018-Present</span> <br />1<sup>st</sup> division BCA Graduate</p></div> */}
						<div><p><span>2018-2021</span> <br />Qualified Offline BCA Graduate</p></div>
						<div><p><span>2017</span> <br />12th from CBSE</p></div>
						<div><p><span>2015</span> <br />10th from CBSE</p></div>
						<div><h1>Experience <sub>&</sub> Work</h1></div>
						<div><p>Practice and Graduation project<i><sub>(Chekout github)</sub></i></p></div>
						<div><p><span>Aug-Sept</span> <br />Daily Brief Ambassador</p></div>
						<div><p><span>Oct-Jan</span> <br />NetCreativeMind Solutions<i>(as Java Developer)</i></p></div>
						<div title="Works as Full-Stack developer"><p><span>Feb-Present</span><br />Safety labs <i>(as Full Stack Developer)</i></p></div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}