import React, { Fragment } from "react";
import AdJavaImage from './images/AdvancedJava.jfif';
import cssImage from './images/css.jpg';
import dsAlgoImage from './images/dsalog.jfif';
import etcImage from './images/etc.jfif';
// import GAEImage from './images/GAE.jpg';
import GoogleCloudImage from './images/Google_Cloud.png';
import gitImage from './images/git.jfif';
import hibernateImage from './images/hibernate.png';
import htmlImage from './images/html.jpg';
import javaImage from './images/java.jpg';
import jsImage from './images/js.jpg';
import mongoDBImage from './images/mongoDB.png';
import msOfficeImage from './images/msOffice.jfif';
import MySQLImage from './images/mySQL.jpg';
import reactImage from './images/ReactJS.jpg';
import restAPIImage from './images/restAPI.jfif';
import springImage from './images/spring1.jpg';
import figma from './images/figma.png';
import eclipseIDE from './images/eclipse_IDE.jfif';
import vsCode from './images/VS_Code.png';
import jQuery from './images/jQuery.png';
import sfImage from './images/salesforce.png';
import postman from './images/postman.png';


export default function WorkingLanguages(props) {
	return (
		<Fragment>
			<div className="workingWith">
				<h2 id="workH3">I work with <sub><i>Click to get details</i></sub></h2>
				<div id="aboutExamples" className='workWith' style={{
					margin: "30px auto", minWidth: "85%",
					maxWidth: "1150px", overflow: "auto",
					boxShadow: "inset 0 -3px 7px #969696",
					borderRadius: "12px",
					alignItems: "baseline",
					alignContent: "flex-start"
				}}>
					<div><a href="http://www.google.com/search?q=Java" target="_blank" rel="noopener noreferrer"><img src={javaImage} alt="Java" /></a></div>
					<div><a href="http://www.google.com/search?q=Advanced+Java" target="_blank" rel="noopener noreferrer"><img src={AdJavaImage} alt="Advnaced java" /></a></div>
					<div><a href="http://www.google.com/search?q=JS" target="_blank" rel="noopener noreferrer"><img src={jsImage} alt="JavaScript" /></a></div>
					<div><a href="http://www.google.com/search?q=React" target="_blank" rel="noopener noreferrer"><img src={reactImage} alt="ReactJS" /></a></div>
					<div><a href="http://www.google.com/search?q=DS-Algo" target="_blank" rel="noopener noreferrer"><img src={dsAlgoImage} alt="DS-Algo" /></a></div>
					<div><a href="https://www.google.com/search?q=google+cloud" target="_blank" rel="noopener noreferrer"><img src={GoogleCloudImage} alt="Google Cloud" /></a></div>
					{/* <div><a href="http://www.google.com/search?q=GAE" target="_blank" rel="noopener noreferrer"><img src={GAEImage} alt="GAE" /></a></div> */}
					<div><a href="http://www.google.com/search?q=RestApi" target="_blank" rel="noopener noreferrer"><img src={restAPIImage} alt="Rest API" /></a></div>
					<div><a href="http://www.google.com/search?q=Spring" target="_blank" rel="noopener noreferrer"><img src={springImage} alt="Spring" /></a></div>
					<div><a href="http://www.google.com/search?q=Hibernate" target="_blank" rel="noopener noreferrer"><img src={hibernateImage} alt="Hibernate" /></a></div>
					<div><a href="http://www.google.com/search?q=HTML" target="_blank" rel="noopener noreferrer"><img src={htmlImage} alt="HTML" /></a></div>
					<div><a href="http://www.google.com/search?q=Git" target="_blank" rel="noopener noreferrer"><img src={gitImage} alt="Git" /></a></div>
					<div><a href="http://www.google.com/search?q=Figma+UI/UI" target="_blank" rel="noopener noreferrer"><img src={figma} alt="Figma UI/UX designs" /></a></div>
					<div><a href="http://www.google.com/search?q=CSS" target="_blank" rel="noopener noreferrer"><img src={cssImage} alt="CSS" /></a></div>
					<div><a href="http://www.google.com/search?q=MongoDB" target="_blank" rel="noopener noreferrer"><img src={mongoDBImage} alt="MongoDB" /></a></div>
					<div><a href="http://www.google.com/search?q=MySQL" target="_blank" rel="noopener noreferrer"><img src={MySQLImage} alt="MySQL" /></a></div>
					<div><a href="http://www.google.com/search?q=eclipse+IDE" target="_blank" rel="noopener noreferrer"><img src={eclipseIDE} alt="Eclipse IDE" /></a></div>
					<div><a href="http://www.google.com/search?q=VSCode" target="_blank" rel="noopener noreferrer"><img src={vsCode} alt="Visual Studio Code" /></a></div>
					<div><a href="http://www.google.com/search?q=jQuery" target="_blank" rel="noopener noreferrer"><img src={jQuery} alt="jQuery" /></a></div>
					<div><a href="http://www.google.com/search?q=salesforce" target="_blank" rel="noopener noreferrer"><img src={sfImage} alt="Salesforce" /></a></div>
					<div><a href="http://www.google.com/search?q=Postmantocheck_API" target="_blank" rel="noopener noreferrer"><img src={postman} alt="postman to check API" /></a></div>
					<div><a href="http://www.google.com/search?q=MS+Office" target="_blank" rel="noopener noreferrer"><img src={msOfficeImage} alt="MS Office" /></a></div>
					<div><a href="http://www.google.com/search?q=front+and+back+end+frameworks" target="_blank" rel="noopener noreferrer"><img src={etcImage} alt="others on need" /></a></div>
				</div>
			</div>
		</Fragment >
	)
}