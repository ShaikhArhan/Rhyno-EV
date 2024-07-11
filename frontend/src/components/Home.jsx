import React, { useState, useEffect } from 'react';
import "../Home.css";
import { Contact } from './Contact';
import { Carousel } from './Carousel';
import { CustomColor } from './CustomColor';

export const Home = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [bikeColor, setBikeColor] = useState('red');

  const taglines = ["Elegance", "Minimalism", "Comfort"];

  useEffect(() => {
    const showSlides = (n) => {
      let i;
      const slides = document.getElementsByClassName("mySlides");
      const dots = document.getElementsByClassName("dot");

      if (slides.length === 0) return;

      if (n > slides.length) {
        setSlideIndex(1);
        return;
      }
      if (n < 1) {
        setSlideIndex(slides.length);
        return;
      }

      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }

      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
    };

    showSlides(slideIndex);
  }, [slideIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prevIndex) => (prevIndex + 1) % taglines.length);
    }, 3000); // Change the word every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const plusSlides = (n) => {
    setSlideIndex(slideIndex + n);
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  return (
    <>
      {/* Background Animation */}
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      {/* Changing words */}
      <div className="header-tagline">
        Let's Elevate Your Ride Experience With Rhyno
        <br />
        Where Superiority Meets <span style={{ color: "#F9ED32", fontFamily: "Poppins, sans-serif" }}>{taglines[taglineIndex]}</span>
      </div>
      {/* Slide show */}
      <div className="slideshow-container">
        <div className="mySlides fade">
          <img src="/images/red.png" style={{ width: "100%" }} />
          <div className="text" style={{ fontFamily: "Playwrite DE Grund, cursive" }}>SE03 Lite</div>
        </div>
        <div className="mySlides fade">
          <img src="/images/black.png" style={{ width: "100%" }} />
          <div className="text">SE03</div>
        </div>
        <div className="mySlides fade">
          <img src="/images/blue.png" style={{ width: "100%" }} />
          <div className="text">SE03 Max</div>
        </div>
        <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
        <a className="next" onClick={() => plusSlides(1)}>❯</a>
      </div>
      <br />
      <div style={{ textAlign: "center" }}>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>
      {/* Three products description */}
      <div id='home-product1' >
        <div id="container1">
          <div className="image">
            <img src="/images/red.png" alt="RHYNO EV" />
          </div>
          <div className="text">
            <h1>Indulge in the perfect harmony of power and range with this Rhyno.</h1>
            <p>Offering an exhilarating experience with its robust <span>2000W motor</span>, it ensures a thrilling ride while still delivering an impressive <span>80-100km range </span> on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhyno. Boasting a formidable combination of a<span> 2000W motor</span> and a <span>2.7kWh battery</span>, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!</p>
          </div>
        </div>
        <div id="container2">
          <div className="text" style={{ textAlign: "left" }}>
            <h1>Indulge in the perfect harmony of power and range with this Rhyno.</h1>
            <p>Offering an exhilarating experience with its robust <span>2000W motor</span>, it ensures a thrilling ride while still delivering an impressive <span>80-100km range</span> on a single charge. Like its counterparts, this machine features the safety assurance of a <span>fire-safe advanced LFP battery</span>, along with the comprehensive benefits of owning a<span> Rhyno</span>. Boasting a formidable combination of a <span>2000W motor</span> and a <span>2.7kWh battery</span>, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!</p>
          </div>
          <div className="image">
            <img src="/images/black.png" alt="RHYNO EV" />
          </div>
        </div>
        <div id="container3">
          <div className="image">
            <img src="/images/blue.png" alt="RHYNO EV" />
          </div>
          <div className="text">
            <h1>This Rhyno is tuned for long drives and no thrills.</h1>
            <p>Like all other variants, this machine comes with a<span> fire-safe advanced LFP battery</span> and all the other benefits of owning a Rhyno, along with a perfect blend of battery capacity and<span> motor power to provide up to 150 km range </span>on a single charge. While it may not provide a thrilling ride, it promises a dependable and unwavering presence on the long stretches.</p>
          </div>
        </div>
      </div>
      {/* customiz colour */}
      <CustomColor/>
      {/* Contact Component */}
      <Contact />
      {/* USP (rotating carousel effect) */}
      <Carousel />
      <div id='USPimage'>
        <img src={"/images/USPleft.png"} alt="" srcset="" />
        <img src={"/images/USPright.png"} alt="" srcset="" />
      </div>

    </>
  );
};