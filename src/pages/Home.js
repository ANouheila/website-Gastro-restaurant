import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/about-img.jpg";
import "../styles/Home.css";
import { FaTimes } from 'react-icons/fa'
import slider1 from "../assets/slider-01.jpg"
import slider2 from "../assets/slider-02.jpg"
import slider3 from "../assets/slider-03.jpg"
import About from "./About"

function Home() {
  return (
    <div>
           <div id="slides" class="cover-slides">
        <ul class="slides-container">
          <li class="text-center">
            <img src={slider1} />
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                </div>
              </div>
            </div>
          </li>
        </ul>
       </div>
       <About className="about"/>

    </div>


  );
}

export default Home;