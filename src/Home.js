import React from 'react';
import './Home.scss';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  return (
    <div className="home">
      <div className="about-me">
        <h1 className="about-me__title">Full-stack developer
        </h1>
        <h2 className="about-me__tech-stack">Tech stack:</h2>
        <div className="image-box">
          <img className="image-box__image" src="https://via.placeholder.com/1000x400"></img>
          <p className="image-box__text"> 
          I have been working in tech for 8 years. In my last position, I was a software project manager / scrum master managing the SDLC. I loved learning about web development from my team, so I decided to do finish full-stack web development bootcamp.
           </p>
        </div>
      </div>

      <div className="projects">
        <h1 className="projects__title"> Projects</h1>
        <Carousel className="projects__carousel" interval={null} fade={true} >
          <Carousel.Item>
            <img
              className="d-block carousel__image"
              src="https://via.placeholder.com/600x400"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>EatSafely</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <div className="carousel__buttons">
                <Button variant="secondary" className="carousel__button">Info</Button>
                <Button variant="secondary" className="carousel__button" href="https://github.com/SamGiorgievski/EatSafely">Github</Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block carousel__image"
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
              className="d-block carousel__image"
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
  )
}
