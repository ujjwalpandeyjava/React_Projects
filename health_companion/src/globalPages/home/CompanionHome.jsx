import { Link, Outlet } from 'react-router-dom'
import homeStyle from './CompanionHome.module.css'
import { useState } from 'react'

function CompanionHome() {
	const [closeButton, setCloseButton] = useState(true);
	return (
		<div className={homeStyle.home}>
			{closeButton ? <div className={homeStyle.notAuthenticated}><span>User not authorized</span><span className={homeStyle.closeButton} onClick={(old) => setCloseButton(!old)}>X</span></div> : null}
			<center><h1>Health Bot Home</h1></center>
			<Link to="../" relative='path'>Main</Link> | <Link to="">Home</Link> | <Link to="contact"> Contact</Link>

			<div className={homeStyle.navbar}>
				<div className={homeStyle.navbar}>Health Companion</div>
				<div className={homeStyle.navbar}>
					<div>Home</div>
					<div>Why we</div>
					<div>About</div>
					<div>Contact</div>
				</div>
			</div>
			<br />
			<br />
			<br />
			<h2 align="center">Add a form to login and sign up</h2>
			<Outlet />
		</div>
	)
}

export default CompanionHome