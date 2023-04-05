import React from 'react';
import './Header.scss';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <div className="header-flex"> 
          <h1 className="header__title">
            Sam Giorgievski
          </h1>
          <div className="header__buttons">
            <Button variant="secondary" className="header__button" href="https://github.com/SamGiorgievski">Github</Button>
            <Button variant="secondary" className="header__button" href="https://www.linkedin.com/in/samgiorgievski/">Linkedin</Button>
          </div>
        </div>
        <ul className="header__nav">
          <li>
            <Link to="/" className="header__nav-buttons">About me</Link>
          </li>
          <li>
            <Link to="/projects" className="header__nav-buttons">Projects</Link>
          </li>
        </ul>
      </div>
  )
}
