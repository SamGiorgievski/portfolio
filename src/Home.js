import React from 'react';
import './Home.scss';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


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
        <h1 className="projects__title"> Projects</h1>
        <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/600x400"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/600x400"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/600x400"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
      </div>
    </div>
  )
}
