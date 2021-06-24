import React, { useState, useEffect }  from "react";
import './HeaderHome.css';


import { TwitchEmbed, TwitchEmbedLayout } from "twitch-player";
function HeaderHome(props) {

	return (
		<div className="header-home">
			{props.live ? <Live data={props} /> : <Counter data={props} />}
		</div>
	)
}
function Counter(props) {

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


	const [hasStream, setHasStream] = useState(false);

	useEffect(() => {

		if(!hasStream){ 

			new TwitchEmbed('twitch-embed', {
				width: 1280,
				height: 720,
				channel: 'm_bloodymary',
				layout: TwitchEmbedLayout.VIDEO
			});
			setHasStream(true);

	}


  }, [hasStream]);


	return (
		<>
		<div className="texture-bg-live" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/grain-texture.png'})` }}></div>
		<div className="texture-bg-live" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/Capture4.JPG'})` }}></div>
		<div className="container-header-live" >
			<div className="live-btn">Live</div>
			<div id="twitch-embed"></div>
			{false && 
			<video controls loop>
				<source src={process.env.PUBLIC_URL + '/vid1.mp4'} type="video/mp4"/>
			</video>
			}
		</div>
		</>
	)
}


export default HeaderHome;
