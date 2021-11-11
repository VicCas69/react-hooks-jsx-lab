import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id="about">About
    <h2>About Me</h2>
    <p>It's a beautiful night, we're looking for something dumb to do</p>
    <img src={image} alt="I made this"></img>
  </div>
  )
}

export default About;
