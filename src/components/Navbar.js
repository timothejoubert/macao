import React from 'react';
//import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar(props) {
	return (
		<div className={props.about ? "container-navbar open-about" : "container-navbar"}>
			<div className="container-logo">
				<img src={process.env.PUBLIC_URL + '/wave_logo.png'}/>
				{/* <h1>
					<span>w</span>
					<span>/</span>
					<span>a</span>
					<span>v</span>
					<span>/</span>
					<span>e</span>
				</h1> */}
			</div>
			<div className="container-about" onClick={() => props.clickAbout()} >
				<h2>About</h2>
			</div>
			{props.about ? <ContentAbout /> : null}	
		</div>
	)
}


function ContentAbout(){
	return 	(
		<div className="content-about-container">
			<div className="content-about">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In libero orci, dignissim at risus ac, <b>ornare vehicula tortor.</b> Vestibulum pharetra dictum dictum. Nunc eu ante id nibh lobortis blandit. Donec at urna ut odio dignissim maximus id vel tellus. Fusce sit amet erat lorem. Pellentesque vulputate ut dui ut mattis. <b>Integer a commodo tortor</b>, id accumsan sapien. Sed dictum lacinia sodales. Fusce congue nulla urna, in pretium ligula volutpat eu.</p>
				<br/><br/>
				<p>Donec odio quam, eleifend et ornare quis, facilisis vel mauris. Sed blandit felis a dignissim vulputate. Fusce faucibus, quam commodo elementum dapibus, diam nisl facilisis velit, at fermentum tellus ligula in tortor. Aenean ac metus ultricies, efficitur nunc quis, pellentesque ligula. In massa urna, fermentum a orci quis, luctus elementum enim. </p>
			</div>
		</div>
	)
}

export default Navbar;
