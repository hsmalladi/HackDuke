import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div>
      <div className='hero-container'>
        <video src='/videos/video-1.mp4' autoPlay loop muted />
        <h1>Carpooling Made Easy</h1>
        <p>An eco-friendly way to reach your destinations</p>
        <div className='hero-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            Sign Up
          </Button>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >
            Map <i className='far fa-play-circle' />
          </Button>
        </div>
      </div>
      <div className='about-container'>
        <h1 className='about-header'> About LinkPool </h1>
        <h3 className='about-text'> LinkPool is a website that individuals can use to find other people to carpool with that share a similar route. </h3>
        <h1 className='about-header'> Our Mission </h1>
        <h3 className='about-text'> Our mission is to reduce gas emissions from cars by promoting convenient and easy carpooling,
         while also helping people easily make connections with each other. </h3>
      </div>
    </div>


  );
}

export default HeroSection;
