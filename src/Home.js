import React from 'react';
import './Home.scss';


export default function Home() {
  return (
    <div className="home">
      <h1 className="home__title1">Hi, I'm Sam, a full-stack developer.
      </h1>
      <h1 className="home__title2">Here's a little bit about me, and what i've been working on!</h1>
      <div>
        <img className="home__image" src="https://via.placeholder.com/1000x400"></img>
        <p> I've been in tech for 8 years. Recently, I was a software project manager / scrum master in charge of delivering features. I completed a web development bootcamp, and have been developing apps since. </p>
      </div>
    </div>
  )
}
