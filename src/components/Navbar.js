import React from 'react';
import './Navbar.css';


function Navbar(props) {
	return (
		<div className={props.about ? "container-navbar open-about" : "container-navbar"}>
			<div className="container-logo">
				<img src={process.env.PUBLIC_URL + '/wave_logo.png'}/>
			</div>

			<div className="container-right-nav">
				<div className="container-donate" >
						<a href="#" target="_blank">Donate</a>
					</div>
				<div className="container-about" onClick={() => props.clickAbout()} >
					<h2>About</h2>
				</div>
			</div>
		</div>
	)
}




export default Navbar;
