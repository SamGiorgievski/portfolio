import React from 'react';
import './Home.scss';


export default function Home() {
  return (
    <div className="home">
      <div className="about-me">
        <h1 className="about-me__title1">Hi, I'm Sam, a full-stack developer.
        </h1>
        <h1 className="about-me__title2">Here's a little bit about me, and what i've been working on!</h1>
        <div className="image-box">
          <img className="image-box__image" src="https://via.placeholder.com/1000x400"></img>
          <p className="image-box__text"> I've been in tech for 8 years. Recently, I was a software project manager / scrum master in charge of delivering features. I completed a web development bootcamp, and have been developing apps since. </p>
        </div>
      </div>

      <div className="projects">
        <h1> Projects</h1>
      </div>
    </div>
  )
}
