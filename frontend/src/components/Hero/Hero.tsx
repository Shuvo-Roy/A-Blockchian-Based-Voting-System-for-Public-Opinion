import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function Hero() {
  return (
    <>
    <Carousel>
                <div className='hero-img'>
                    <img className='' src="https://img.freepik.com/free-vector/election-campaing-scenes_52683-48033.jpg" />
                </div>
                <div className='hero-img'>
                    <img className='h-' src="https://img.freepik.com/free-photo/vote-elect-decision-choice-political-registration_53876-134039.jpg" />
                    
                </div>
                <div className='hero-img'>
                    <img className='h-' src="https://img.freepik.com/free-photo/closeup-fingerprint-paper_53876-40989.jpg" />
                    
                </div>
            </Carousel>
            
      </>
  )
}

export default Hero