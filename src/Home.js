import React from 'react';
import './Home.scss';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import selfie from "./assets/profile_pic.jpg";

export default function Home() {
  return (
    <div className="home">
      <div className="about-me">
        <div className="image-box">
          <img className="image-box__image" src={selfie} alt="Profile picture"></img>
          <h2 className="image-box__title">Full-stack web developer
          </h2>
          <h3 className="image-box__tech-stack">Stack: Javascript, Ruby</h3>
          </div>

        <ul className="highlights"> 
          <li>8 years of experience in tech</li> 
          
          <li>Last position: software project manager / scrum master.</li>
         
          <li>Full-stack bootcamp grad 2023</li>
           </ul>
      </div>

      <div className="projects">
        <h2 className="projects__title"> Projects</h2>
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
