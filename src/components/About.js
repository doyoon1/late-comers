import React from "react";
import aaron from "../images/aaron.jpg";
import baetiong from "../images/baetiong.jpg";
import ceejay from "../images/ceejay.jpg";
import conde from "../images/conde.jpg";
import jhon from "../images/jhon.jpg";
import "../styles/About.css";

function About() {
  return (
    <div>
      <div className="title">About Us!</div>
      <div className="content">
        <div className="content_item">
          <img src={ceejay} />
          <div className="info">
            <h1>Ceejay M. Capangada</h1>
            <p>
              Age: 22 <br />
              Date of birth: Feb 27, 2001 <br />
              Religion: Catholic <br />
            </p>
          </div>
        </div>
        <div className="content_item">
          <img src={jhon} />
          <div className="info">
            <h1>Jhon Eduard Delfinado</h1>
            <p>
              Age: 22 <br />
              Date of birth: March 02, 2001 <br />
              Religion: Catholic <br />
            </p>
          </div>
        </div>
        <div className="content_item">
          <img src={aaron} />
          <div className="info">
            <h1>Sird Jhon Aaron L. Gutierrez</h1>
            <p>
              Age: 22 <br />
              Date of birth: Sep 15, 2000 <br />
              Religion: Catholic <br />
            </p>
          </div>
        </div>
        <div className="content_item">
          <img src={conde} />
          <div className="info">
            <h1>Karl Matthew Conde</h1>
            <p>
              Age: 22 <br />
              Date of birth: November, 2000 <br />
              Religion: Catholic <br />
            </p>
          </div>
        </div>
        <div className="content_item">
          <img src={baetiong} />
          <div className="info">
            <h1>John Carl Baetiong</h1>
            <p>
              Age: 22 <br />
              Date of birth: Nov 19, 2000 <br />
              Religion: Catholic <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
