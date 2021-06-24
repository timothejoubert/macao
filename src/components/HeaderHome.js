import React from "react";
import './HeaderHome.css';

function HeaderHome(props) {
	console.log(props.live);

	return (
		<div className="header-home">
			{props.live ? <Live data={props} /> : <Counter data={props} />}
		</div>
	)
}
function Counter(props) {
	console.log(props.data);

	return (
		<>
			<div className="container-header-vid">
				<video autoPlay loop>
					<source src={process.env.PUBLIC_URL + '/vid1.mp4'} type="video/mp4"/>
				</video>
			</div>
			<div className={props.data.about ? "counter-container open-about" : "counter-container"}>
				<div className="counter-item days">
					<span className="counter-days">{props.data.date.days}</span>
					<span>Days</span>
				</div>
				<div className="separator">:</div>
				<div className="counter-item hours">
					<span className="counter-hours">{props.data.date.hours}</span>
					<span>hours</span>
				</div>
				<div className="separator">:</div>
				<div className="counter-item minutes">
					<span className="counter-minutes">{props.data.date.minutes}</span>
					<span>minutes</span>
				</div>
			</div>
			<div className={props.data.about ? "before-live open-about" : "before-live"}>Before live</div>
		</>
	)
}


function Live(props) {
	return (
		<>
		<div className="texture-bg-live" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/grain-texture.png'})` }}></div>
		<div className="texture-bg-live" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/Capture4.JPG'})` }}></div>
		<div className="container-header-live" >
			<div className="live-btn">Live</div>
			<video controls loop>
				<source src={process.env.PUBLIC_URL + '/vid1.mp4'} type="video/mp4"/>
			</video>
		</div>
		</>
	)
}


export default HeaderHome;
