import React from 'react';
import './Home.scss';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import selfie from "./assets/profile_pic.jpg";
import EatSafely from "./assets/EatSafelyPicture.png"
import Restaurant from "./assets/RestaurantOrderPic.png"
import Scheduler from "./assets/SchedulerPic.png"

export default function Home() {
  return (
    <div className="home">
      <div className="about-me">
        <div className="image-box">
          <img className="image-box__image" src={selfie} alt="Profile picture"></img>
          <h2 className="image-box__title">Full-stack web developer
          </h2>
          <h3 className="image-box__tech-stack">Javascript, React, Ruby, SQL, Python</h3>
          </div>
        <div className="highlights">
          <h3 className="highlights__title"> Highlights</h3>
          <ul> 
            <li>8 years of experience in tech</li> 
            <li>Last position: software project manager / scrum master</li>
            <li>Full-stack bootcamp grad 2023</li>
            </ul>
           </div>
      </div>

      <div className="projects">
        <h1 className="projects__title"> Projects</h1>
        <Carousel className="projects__carousel" 
        interval={null} 
        fade={true}
        variant="dark">
          <Carousel.Item>
            <img
              className="d-block carousel__image"
              src={EatSafely}
              alt="First slide"
            />
            
            <Carousel.Caption className="captions">
            <div className="captiontest"> 
              <h3>EatSafely</h3>
              <p>Take a picture of a product's ingredient labels, translate it to text, compare it with a list of your personal intolerances, and see if it's safe for consumption  </p>
              </div>
              <div className="carousel__buttons">
                <Button variant="secondary" className="carousel__button">Info</Button>
                <Button variant="secondary" className="carousel__button" href="https://github.com/SamGiorgievski/EatSafely">Github</Button>
                
                
              </div>
            </Carousel.Caption>
            
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block carousel__image"
              src={Restaurant}
              alt="Second slide"
            />

            <Carousel.Caption className="captions">
              <h3>Restaurant Order System</h3>
              <p>Fill your cart and send food orders as a customer, or login to the restaurant-owner portal to review and accept orders. Users will be notified via twilio api.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block carousel__image"
              src={Scheduler}
              alt="Third slide"
            />

            <Carousel.Caption className="captions">
              <h3>Interview Scheduler</h3>
              <p>
              Single page react app to view available interview timeslots, and create/edit delete appointments with interviewers.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}
