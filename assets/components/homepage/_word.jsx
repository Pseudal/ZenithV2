import React, { useState } from "react";
import { Element } from "react-scroll";
import Marquee from "react-fast-marquee";
import "swiper/css";
import { Parallax } from 'react-parallax';

const Wordpage = ({}) => {
  return (
    <>
      <Parallax bgImage="https://images.unsplash.com/photo-1516331138075-f3adc1e149cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1508&q=80" blur={{ min: -1, max: 3 }} strength={400}>
      <div
        //style={{ backgroundImage: "url(/zenith/images/x9nes5V.jpg)" }}
        className="demibloc"
        alt="wordpage"
      >
        {/* <video playsInline autoPlay muted loop> */}
          {/* <source src="/zenith/video/videobg4.mp4" type="video/mp4"></source> */}
        {/* </video> */}

        <div className="opacityBlue" alt="Liste de mots">
          <div
            style={{width:'100%'}}
            data-aos="zoom-in"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <div className="parent">
            <Marquee style={{width:"100%", overflow: 'hidden'}} gradient={false}>
              <h1 className="wordpage light  grid1" id="wordpage">
                RÉACTIVITÉ
              </h1>
              <h1 className=" margin medium wordpageText grid2">·</h1>
              <h1
                className="wordpage outline normal grid3"
              >
                PROXIMITÉ
              </h1>
              <h1 className=" margin medium wordpageText outline grid4">·</h1>
              <h1  className="wordpage light  grid5">
                PASSION
              </h1>
              <h1 className=" wordpageText  medium grid6">·</h1>
              <h1  className="wordpage normal  grid7">
                STRATÉGIE
              </h1>
              <h1 className=" wordpageText outline medium grid6">·</h1>
            </Marquee>
            <Marquee style={{width:"100%", overflow: 'hidden'}} direction={"right"} gradient={false}>
              <h1  className="wordpage normal  grid9">
                COMMUNICATION
              </h1>
              <h1 className=" wordpageText medium grid10">·</h1>
              <h1
                
                className="wordpage marron normal  grid11"
              >
                ZENITH
              </h1>
              <h1 className=" wordpageText outline medium grid12">·</h1>
              <h1  className="wordpage normal  grid13">
                CONSEIL
              </h1>
              <h1 className=" wordpageText medium grid14">·</h1>
              <h1  className="wordpage normal  grid15">
                EVENT
              </h1>
              <h1 className=" wordpageText outline medium grid6">·</h1>
              </Marquee>
              <Marquee style={{width:"100%", overflow: 'hidden'}} gradient={false} >
              <h1
                
                className="wordpage outline medium  grid17"
              >
                CRÉATIVITÉ
              </h1>
              <h1 className=" wordpageText medium grid18">·</h1>
              <h1  className="wordpage light  grid19">
                RÊVER
              </h1>
              <h1 className=" wordpageText outline medium grid20">·</h1>
              <h1  className="wordpage light  grid21">
                AMBITION
              </h1>
              <h1 className=" wordpageText medium grid22">·</h1>
              <h1
                
                className="wordpage outline normal  grid23"
              >
                IMAGINATION
              </h1>
              <h1 className=" wordpageText outline  medium grid6">·</h1>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
      </Parallax>
    </>
  );
};

export default Wordpage;
