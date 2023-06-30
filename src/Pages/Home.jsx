import React, { useRef, useState, useEffect } from "react";
import "../CSS/Home.css";
import home from "../Assets/home.png";
import icon from "../Assets/home-logo.png";
import home2 from "../Assets/home2.png";
import key from "../Assets/key.png";
import event from "../Assets/event.png";
import symbol1 from "../Assets/symbol1.png";
import symbol2 from "../Assets/symbol2.png";
import market1 from "../Assets/market1.png";
import market_top from "../Assets/market-top.png";
import process1 from "../Assets/process1.png";
import process2 from "../Assets/process2.png";
import social from "../Assets/social.png";
import corporate from "../Assets/corporate.png";
import design from "../Assets/design.png";
import contact from "../Assets/contact.png";
import hands from "../Assets/hands.png";
import about2 from "../Assets/about2.png";
import tv_logo from "../Assets/tv-logo.png";
import VanillaTilt from "vanilla-tilt"
import Aos from "aos";
import { Center } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";


function Home() {
  // Window Scroll To Top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [1])

  // AOS Init
  Aos.init()

  // USeRef
  const img1 = useRef(null)
  const img2 = useRef(null)
  const img3 = useRef(null)
  const img4 = useRef(null)
  const img5 = useRef(null)
  const img6 = useRef(null)
  const img7 = useRef(null)
  const img8 = useRef(null)
  const img9 = useRef(null)

  // USeState
  const [isZoomed, setIsZoomed] = useState(false);
  const [refChange, setRefChange] = useState(img1)

  // UseEffect
  useEffect(() => {
    VanillaTilt.init(refChange.current, {
      max: 30,
      speed: 1000,
      scale: 1.2,
      glare: false,
    });
  }, [refChange]);

  // Mantine Query
  const Query = useMediaQuery("(max-width:500px)")

  return (
    <div className="home-main">
      <div className="home-top" >
        <div ref={img1} className="home-left" data-tilt data-aos="zoom-in" data-aos-delay="500">
          <img src={home} onMouseOver={() => setRefChange(img1)} className="home-img"></img>
        </div>

        <div className="home-right" >
          <h3 className="home-top-content" data-aos="zoom-in" data-aos-delay="500">
            Bringing to You an End to End Solution
            {Query ? "" : <br />}
            For All Your Brand Needs
          </h3>
        </div>
        <Center className="about_brand_logo">
          <img
            className="home_btm_img" src={about2}></img>
        </Center>
      </div>
      <div className="home-sub-div">
        <h3 className="home-sub-title"
          data-tilt data-aos="zoom-in"
          data-aos-delay="100">OmniGrid Business Lab</h3>
      </div>

      {/* Home Second Section */}
      <div className="home-second">
        <div data-tilt data-aos="zoom-in" data-aos-delay="100">
          <img
            src={home2}
            ref={img2}
            onMouseOver={() => setRefChange(img2)}
            className="home-two-img"
          ></img>
        </div>
      </div>
      {/* Home Third Section */}
      <div className="home-third-main">
        <div className="home-third-left">
          <h3 data-aos="fade-right" data-aos-delay="100" >
            Every Brand Has Its Uniquec {Query ? "" : <br />}
            Challenges That Require Unique {Query ? "" : <br />}
            Solution
          </h3>
        </div>
        <div className="home-third-right">
          <img data-aos="fade-left" data-aos-delay="100" onMouseOver={() => setRefChange(img3)} ref={img3} src={key}></img>
        </div>
      </div>

      {/* Marketing Section */}
      <div className="market-section">
        <div className="market-left">
          <h3 data-aos="fade-right" data-aos-delay="100">
            Digital
            <br />
            Marketing
          </h3>
        </div>
        <div className="market-right">
          <img data-aos="fade-left"
            data-aos-delay="100" ref={img4}
            onMouseOver={() => setRefChange(img4)}
            src={market1}></img>
        </div>
        <img
          data-aos="zoom-in" data-aos-delay="500"
          src={market_top}
          ref={img5}
          onMouseOver={() => setRefChange(img5)}
          className="market-top"
        />
      </div>

      {/* Events Bottom */}
      <div className="event-bottom-main">
        <div className="event-btm-content tilt">
          <img src={symbol1} className="symbol1 tilt"></img>
          <p data-aos="zoom-in" data-aos-delay="200">
            A global creative agency bringing to you the
            {Query ? "" : <br />}
            essence of Design, Development Until Delivery
            {Query ? "" : <br />}
            to exponentially your busines
          </p>
          <img src={symbol2} className="symbol2"></img>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="social-main">
        <div className="social-left">
          <div className="social-left-img">
            <img data-aos="fade-right" data-aos-delay="100" ref={img6} src={social}></img>
          </div>

        </div>
        <div className="social-right">
          <h3 data-aos="fade-left" data-aos-delay="100">
            Social Media
            <br />
            Marketing
          </h3>
        </div>
      </div>
      {/* Process Section */}
      <div className="process-main">
        <div className="process-left">
          <img data-aos="fade-right" data-aos-delay="100" src={process1}></img>
        </div>
        <div className="process-right" data-aos="fade-left" data-aos-delay="100">
          <h3>Tailored Solutions for Your Venture</h3>
          <p>
            We believe that every business is <br />
            unique, and your website should
            <br />
            reflect that. Our team takes the time
            <br />
            to understand your brand, goals, and
            <br />
            target audience. We tailor our web <br />
            development service to meet your
            <br />
            specific needs, creating a<br /> customised solution that aligns
            with
            <br />
            your vision and drives tangible
            <br />
            results.
          </p>
        </div>
      </div>

      {/* Corporate Section */}
      <div className="corporate-main">
        <div className="corporate-left">
          <h3 data-aos="fade-right" data-aos-delay="100">
            Corporate
            <br />
            Branding
          </h3>
        </div>
        <div className="corporate-right">
          <img
            data-aos="fade-left" data-aos-delay="100"
            src={corporate}
            ref={img7}
            onMouseOver={() => setRefChange(img7)}
            className={isZoomed ? "corporate-zoomed" : "corporate"}
          />
        </div>
      </div>
      {/* Global Creative Section */}
      <div className="event-bottom-main">
        <div className="event-btm-content">
          <img src={symbol1} className="symbol1"></img>
          <p data-aos="zoom-in" data-aos-delay="100">
            Crafting a strategy branding and setting <br />
            standardizations throughout all areas of the
            <br />
            value chain of the venture
          </p>
          <img src={symbol2} className="symbol2"></img>
        </div>
      </div>

      {/* Design And Development */}
      <div className="design-main">
        <div className="design-left" data-aos="fade-right" data-aos-delay="100"  >
          <img src={design} className="tv" />
          <img src={tv_logo} className="tv-logo" ref={img8}
            onMouseOver={() => setRefChange(img8)}></img>
        </div>
        <div className="design-right">
          <h3 data-aos="fade-left" data-aos-delay="100">
            Web & App
            <br />
            Development
          </h3>
        </div>
      </div>
      {/* Corporate Bottom */}
      <div className="event-bottom-main">
        <div className="event-btm-content">
          <img src={symbol1} className="symbol1"></img>
          <p data-aos="zoom-in" data-aos-delay="100">
            Materialising a corporate brand identity with set <br />
            branding rules and guideline to effectively
            <br />
            brand and market the venture
          </p>
          <img src={symbol2} className="symbol2"></img>
        </div>
      </div>

      {/* Event Section */}
      <div className="event-main">
        <div className="event-left">
          <img ref={img9}
            data-aos="fade-right" data-aos-delay="100"
            onMouseOver={() => setRefChange(img9)} src={event}></img>
        </div>
        <div className="event-right">
          <h3 data-aos="fade-left" data-aos-delay="100">
            Event
            <br />
            Management
          </h3>
        </div>
      </div>

      {/* Design Bottom */}
      <div className="event-bottom-main for-hands">
        <div className="event-btm-content">
          <img src={symbol1} className="symbol1"></img>
          <p data-aos="zoom-in" data-aos-delay="100">
            Solving Strategic, product and scaling blockers <br />
            for ventures of all forms and sizes
          </p>
          <img src={symbol2} className="symbol2"></img>
        </div>
      </div>
      {/* Home Enquiry Form */}

      <div className="contact-main home-contact-form">
        <form className="contact-form">
          <div className="hands-div">
            <img data-aos='fade-down' data-aos-delay="500" data-aos-duration="2000" data-aos-mirror='false'
              src={hands} className="hands"></img>
          </div>
          <h3 className="contact-title" data-aos="zoom-in" data-aos-delay="100">Request a Free Consultation</h3>
          <div className="contact-div">
            <h4 className="contact-sub-title" data-aos="fade-right" data-aos-delay="100">Email</h4>
            <input
              data-aos="fade-left" data-aos-delay="100"
              type="text"
              placeholder="Input Email Here"
              className="contact-input"
            ></input>
          </div>
          <div className="contact-div">
            <h4 className="contact-sub-title" data-aos="fade-right" data-aos-delay="100">Name</h4>
            <input
              data-aos="fade-left" data-aos-delay="100"
              type="text"
              placeholder="Input Name Here"
              className="contact-input"
            ></input>
          </div>
          <div className="contact-div">
            <h4 className="contact-sub-title" data-aos="fade-right" data-aos-delay="100">Subject</h4>
            <input
              data-aos="fade-left" data-aos-delay="100"
              type="text"
              placeholder="Input Subject Here"
              className="contact-input"
            ></input>
          </div>
          <div className="contact-div">
            <h4 className="contact-sub-title" data-aos="fade-right" data-aos-delay="100">Inquiry</h4>
            <input
              data-aos="fade-left" data-aos-delay="100"
              type="text"
              placeholder="Input Description Here"
              className="description"
            ></input>
          </div>
          <button data-aos="zoom-in" data-aos-delay="100" className="contact-btn">Send enquiry</button>
        </form>
        <img data-aos="zoom-in" data-aos-delay="100" src={contact} className="card-img"></img>
      </div>
    </div >
  );
}
export default Home;
