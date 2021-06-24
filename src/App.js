import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeaderHome from './components/HeaderHome';
// import HeaderHome from './components/HeaderHome';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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

  calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`05/16/${year}`) - +new Date();

    let timeLeft;
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60)
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
      <>
        <Navbar about={this.state.about} clickAbout={this.clickAbout}/>
        <HeaderHome about={this.state.about} date={this.state.timeLeft} live={this.state.live}/>
      </>
    );
  }
}