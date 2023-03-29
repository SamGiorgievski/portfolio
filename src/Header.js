import React from 'react';
import './Header.scss';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  return (
    <div className="header">
        <h1 className="header__title">
          Sam Giorgievski
        </h1>
        <div className="header__buttons">
          <Button variant="secondary" className="header__button">Github</Button>
          <Button variant="secondary" className="header__button">Linkedin</Button>
          <Button variant="secondary" className="header__button">Secondary</Button>
        </div>
      </div>
  )
}
