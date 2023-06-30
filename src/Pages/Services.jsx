import React, { useRef, useEffect, useState } from "react";
import "../CSS/Services.css";
import services1 from "../Assets/services1.png";
import ring from "../Assets/ring.png";
import square from "../Assets/square.png";
import coins from "../Assets/coins.png";
import number from "../Assets/number.png";
import text from "../Assets/omnibux2.png";
import text2 from "../Assets/text.png"
import services2 from "../Assets/services2.png";
import card1 from "../Assets/card1.png";
import card2 from "../Assets/card2.png";
import services_mobile from "../Assets/services-mobile.png";
import flow from "../Assets/flow.png";
import breaker1 from "../Assets/breaker1.png";
import breaker2 from "../Assets/breaker2.png";
import breaker3 from "../Assets/breaker3.png";
import omni_bottom from "../Assets/omni-bottom.png";
import VanillaTilt from "vanilla-tilt";
import about2 from "./../Assets/about2.png"
import { Center, Text, Title } from "@mantine/core";
import Vector from "./../Assets/Vector.png"
import Aos from "aos";

function Services() {
  // Window Scroll To Top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [1])

  // Aos Init 
  Aos.init()

  // useReff 
  const img1 = useRef(null)
  const img2 = useRef(null)
  const img3 = useRef(null)
  const img4 = useRef(null)
  const img5 = useRef(null)
  const img6 = useRef(null)
  const img7 = useRef(null)
  const img8 = useRef(null)
  const img9 = useRef(null)
  const img10 = useRef(null)
  const img11 = useRef(null)
  const img12 = useRef(null)
  const img13 = useRef(null)

  // useState 
  const [image, setImage] = useState(img1)

  useEffect(() => {
    VanillaTilt.init(image.current, {
      max: 30,
      speed: 1000,
      scale: 1.2,
      glare: false,
    });
  }, [image]);

  return (
    <div className="services-main">
      <div className="services-top">
        <div className="services-left " ref={img1} onMouseOver={() => setImage(img1)}
          data-aos='fade-right' data-aos-delay="500">
          <img src={services1} className="services" />
          <img src={ring} className="ring" />
          <img src={square} className="square" />
          <img src={coins} className="coins" />
          <img src={number} className="number" />
          <img src={text2} className="text2"></img>
        </div>
        <div className="services-right">
          <h3 className="services-top-content" data-aos='fade-left' data-aos-delay="500" >
            The All in One Social Networking
            <br /> Platform For All Your Hyper Local
            <br />
            Social Needs
          </h3>
        </div>
        <Center className="brand_logo" data-aos='zoom-in' data-aos-delay="500" >
          <img src={about2} />
        </Center>
      </div>
      <div className="home-sub-div">
        <h3 
        className="home-sub-title scale_1" 
        data-aos='zoom-in' 
        data-aos-delay="500" >OmniGrid Social</h3>
      </div>

      {/* Services Second Section */}
      <div className="services-second-section">
        <div className="services-second-left">
          <div>
            <p className="services-second-content" data-aos='fade-right' data-aos-delay="500" >
              <span className="sub-title">OG social </span> is an all in one{" "}
              <br />
              social networking platform that <br />
              connects nightlife industries <br />
              like bars, clubs, and food &<br /> beverage industry restaurants,
              <br /> cafes, walk in business
              <br /> altogether linking the consumer <br />
              goods industry through creating a <br />
              common collusive marketplace.
              <br /> with a universal social
              <br />
              networking currency to avail
              <br />
              discount creadits. Tailor made
              <br />
              for interpersonal and <br />
              hyperlocal networking.
            </p>
            <button className="services-second-btn" data-aos='fade-right' data-aos-delay="500" >
              Join Exclusive OG-list
            </button>
          </div>
        </div>
        <div className="services-second-right">
          <img
            data-aos='fade-left' data-aos-delay="500"
            ref={img2} onMouseOver={() => setImage(img2)}
            src={services2}
          ></img>
        </div>
      </div>

      {/* Services SignUp Section */}
      <div className="signup-main">
        <div className="signup-top">
          <img src={Vector} className="vector1" data-aos='fade-right' data-aos-delay="500" />
          <div>
            <h3 className="signup-title" data-aos='zoom-in' data-aos-delay="500" >
              Sign Up to be the First Exclusive Members of
              <span> OG Social</span>
            </h3>
            <div className="signup-form">
              <button data-aos='fade-right' data-aos-delay="500" >Join Whitelist</button>
              <input type="text" placeholder="Input Email Here" data-aos='fade-left' data-aos-delay="500" />
            </div>
          </div>
          <img src={Vector} className="vector2" data-aos='fade-left' data-aos-delay="500" />
        </div>
      </div>
      <div className="signup-two">
        <div className="signup-card-div">
          <h3 className="signup-title-two" data-aos='zoom-in' data-aos-delay="500" >
            "Swipe Match, Vibe, Meet, Repeat"
          </h3>
          <div className="signup-card-left">
            <img data-aos='fade-right' data-aos-delay="500" src={card1} ref={img3} onMouseOver={() => setImage(img3)} />
          </div>
          <div className="signup-card-right">
            <img data-aos='fade-left' data-aos-delay="500" src={card2} ref={img4} onMouseOver={() => setImage(img4)} />
          </div>
        </div>
        <div className="signup-card-div card-div-two">
          <div className="signup-card-right">
            <img data-aos='fade-right' data-aos-delay="500" src={card1} ref={img5} onMouseOver={() => setImage(img5)} />
          </div>
          <div className="signup-card-left">
            <img data-aos='fade-left' data-aos-delay="500" src={card2} ref={img6} onMouseOver={() => setImage(img6)} />
          </div>
        </div>
      </div>
      <div className="image">
        <img data-aos='fade-up' data-aos-delay="500" src={services_mobile} ref={img7} onMouseOver={() => setImage(img7)} />
      </div>
      <div className="bcg_linear1" >
        <div>
          <h1 data-aos='zoom-in' data-aos-delay="500"  >Smooth & Seamless End User Flow</h1>
        </div>
        <div className="flow_diagram" ref={img13} onMouseOver={() => setImage(img13)}>
          <img src={flow} data-aos='zoom-in' data-aos-delay="500" />
        </div>
      </div>
      <div className="omnibux-section">
        <h3 className="omnibux" data-aos='zoom-in' data-aos-delay="500">
          Empower Networking Through
          <br />
          The Universal Social Networking
          <br />
          Currency omnibux
        </h3>
        <div className="omni-second-div">
          <div className="omni-left">
            <p data-aos='fade-right' data-aos-delay="500">
              "Bringing to You An
              <br />
              Universal Currency For
              <br />
              All Your Social <br />
              Networking Needs"
            </p>
          </div>
          <div className="omni-right" >
            <div className="red" ref={img8} onMouseOver={() => setImage(img8)} data-aos='fade-left' data-aos-delay="500">
              <img src={services1} className="services" />
              <img src={ring} className="ring-two" />
              <img src={square} className="square-two" />
              <img src={coins} className="coins-two" />
              <img src={number} className="number-two" />
              <img src={text} className="text"></img>
            </div>
          </div>
        </div>
        <div className="omni-second-div omni-bottom-div">
          <div className="omni-left omni-left-two">
            <button className="scale_2" data-aos='fade-right' data-aos-delay="500">Join the OG-list</button>
          </div>
          <div className="omni-right omni-right-two">
            <p data-aos='fade-left' data-aos-delay="500">
              "Get and use your
              <br />
              universal currency in <br />
              venues you socialize to
              <br />
              receive discounts the bill <br />
              spent"
            </p>
          </div>
        </div>
      </div>

      {/* Icebreaker Section */}
      <div className="breaker-main">
        <div className="omni-btm-div" ref={img9}
          onMouseOver={() => setImage(img9)}>
          <img data-aos='zoom-in' data-aos-delay="500" src={omni_bottom} className="omni-bottom" />
        </div>
        <div className="breaker-top">
          <div className="breaker-left">
            <h3 data-aos='fade-right' data-aos-delay="500">
              Interactive
              <br />
              Icebreaker <br />
              Sessions
            </h3>
          </div>
          <div className="breaker-right">
            <h3 data-aos='fade-left' data-aos-delay="500">
              Interactive Icebreaker
              <br />
              Sessions To Find The <br />
              Vibe Of Your Clique
            </h3>
          </div>
        </div>
        <div className="breaker-img-flex">
          <img src={breaker1} ref={img10}
            data-aos='fade-right' data-aos-delay="500"
            onMouseOver={() => setImage(img10)} className="breaker1" />
          <img src={breaker2} ref={img11}
            data-aos='zoom-in' data-aos-delay="500"
            onMouseOver={() => setImage(img11)} className="breaker2" />
          <img src={breaker3} ref={img12}
            data-aos='fade-left' data-aos-delay="500"
            onMouseOver={() => setImage(img12)} className="breaker3" />
        </div>
      </div>
    </div>
  );
}
export default Services;
