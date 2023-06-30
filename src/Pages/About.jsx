import React, { useRef, useEffect, useState } from "react";
import about_top from "../Assets/about1.png";
import about3 from "../Assets/footer-logo.png";
import about4 from "../Assets/about3.png";
import mission from "../Assets/mission.png";
import contact from "../Assets/contact.png";
import "../CSS/About.css";
import about2 from "../Assets/about2.png";
import VanillaTilt from "vanilla-tilt";
import { Center, Text, Title } from "@mantine/core";
import Aos from "aos";
import { useMediaQuery } from "@mantine/hooks";

function About() {
  // Window Scroll To Top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [1])

  // UseRef
  const img1 = useRef(null)
  const img2 = useRef(null)
  //useState
  const [image, setImage] = useState(img1)

  // Vanilla Tilt in useEffect
  useEffect(() => {
    VanillaTilt.init(image.current, {
      max: 30,
      speed: 1000,
      scale: 1.2,
      glare: false,
    })
  }, [image])

  // Aos Init
  Aos.init()

  // Mantine Query
  const Query = useMediaQuery('(max-width:1060px)')

  return (
    <div className="about-main">
      <div className="about-top">
        <div className="about-left">
          <img
            data-aos='fade-right' data-aos-delay="500"
            src={about_top}
            ref={img1}
            onMouseOver={() => setImage(img1)}
          ></img>
        </div>
        <div className="about-right">
          <h3 className="about-top-content"
            data-aos='fade-left' data-aos-delay="500">
            Empowering early-stage
            <br /> ventures with end to end <br />
            Solution
          </h3>
        </div>
        <Center className="about_brand_logo">
          <img
            data-aos='zoom-in'
            data-aos-delay="500"
            className="about-btm-img" src={about2}></img>
        </Center>
      </div>
      {/* About Second Section */}
      <div className="about-second-section">
        <div className="abt-second-left">
          <div data-aos='fade-right' data-aos-delay="500">
            <div className="abt-second-div">
              <h3>About</h3>
            </div>
            <p className="abt-second-content">
              "We play the role a Doctor
              <br />
              for your brand, the one stop
              <br />
              solution for early stage
              <br />
              ventures, scaling ventures or
              <br />
              even to ignition a venture <br />
              from scratch"
            </p>
            <button className="abt-second-btn scale_1">Join Exclusive OG-list</button>
          </div>
        </div>
        <div className="about-second-right">
          <img ref={img1}
            data-aos='fade-left' data-aos-delay="500"
            onMouseOver={() => setImage(img1)} src={about4}></img>
        </div>
      </div>
      {/* Mission Section */}
      <div className="mission-main">
        <div className="mission-left">
          <div data-aos='fade-right' data-aos-delay="500">
            <h2 className="mission-title">Motto</h2>
            <p className="mission-content ">
              "To be pioneers of <br />
              innovation of the new
              <br />
              digital era"
            </p>
          </div>
        </div>
        <div className="mission-right">
          <div data-aos='fade-left' data-aos-delay="500">
            <h2 className="mission-title">Mission</h2>
            <p className="mission-content">
              We at Omnigrid make it our
              <br />
              Mission to
            </p>
            <p className="mission-content ">
              "Consistency learn and <br />
              exponentially innovate and <br />
              access new blue oceans of
              <br />
              markets to create first mover
              <br />
              advantage solutions.
            </p>
          </div>
        </div>
      </div>
      {/* Contact Section */}
      <div className="contact-main">
        <form className="contact-form">
          <h3 className="contact-title" data-aos='zoom-in' data-aos-delay="500">Contact us</h3>
          <div className="contact-div">
            <h4 className="contact-sub-title" data-aos='fade-right' data-aos-delay="500">Name </h4>
            <input
              data-aos='fade-left' data-aos-delay="500"
              type="text"
              placeholder="Input Name Here"
              className="contact-input"
            ></input>
          </div>
          <div className="contact-div">
            <h4 className="contact-sub-title" data-aos='fade-right' data-aos-delay="500">Subject</h4>
            <input
              data-aos='fade-left' data-aos-delay="500"
              type="text"
              placeholder="Input Subject Here"
              className="contact-input"
            ></input>
          </div>
          <div className="contact-div">
            <h4 className="contact-sub-title" data-aos='fade-right' data-aos-delay="500">Inquiry</h4>
            <input
              data-aos='fade-left' data-aos-delay="500"
              type="text"
              placeholder="Input Description Here"
              className="description"
            ></input>
          </div>
          <button className="contact-btn" data-aos='zoom-in' data-aos-delay="500" >Send enquiry</button>
        </form>
        <img src={contact} data-aos='zoom-in' data-aos-delay="500" className="card-img"></img>
      </div>
    </div >
  );
}
export default About;
