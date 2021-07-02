import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeaderHome from './components/HeaderHome';
// import HeaderHome from './components/HeaderHome';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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


export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      about: false,
      timeLeft: {},
      live : false
    }
  }

  clickAbout = () => {
    this.setState({ about : !this.state.about });
  }

  addZero = (result) => {
    if(result < 10){
      result = "0" + result;
    }
    return result;
  }

  calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`06/10/${year}`) - +new Date();

    let timeLeft;
    if (difference > 0) {
      timeLeft = {
        days: this.addZero(Math.floor(difference / (1000 * 60 * 60 * 24))),
        hours: this.addZero(Math.floor((difference / (1000 * 60 * 60)) % 24)),
        minutes: this.addZero(Math.floor((difference / 1000 / 60) % 60))
        //seconds: Math.floor((difference / 1000) % 60)
      };
    }else{
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0
        //seconds: 0
      }
      this.setState({ 
        live : true
      });
    }
    return timeLeft;
  }

  componentDidMount() {
    this.setState({ 
      timeLeft : this.calculateTimeLeft() 
    });
  }

  componentDidUpdate() {
    if(!this.state.live){
      const timer = setTimeout(() => {
        this.setState({ 
          timeLeft : this.calculateTimeLeft() 
        });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }


  render(){
    return ( 
      <div className={this.state.about ? "display-about" : "display-content"}>
        <Navbar about={this.state.about} clickAbout={this.clickAbout}/>

        <ContentAbout />

        <HeaderHome about={this.state.about} date={this.state.timeLeft} live={this.state.live}/>
      </div>
    );
  }
}


