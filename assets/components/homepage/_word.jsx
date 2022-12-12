import React, { useState } from "react";
import { Element } from "react-scroll";
import Marquee from "react-fast-marquee";
import "swiper/css";
import { Parallax } from 'react-parallax';
import "../../stylesheets/bulma/helpers/spacing.sass"

const Wordpage = ({}) => {
  return (
    <>
      {/* <Parallax bgImage="/zenith/images/6Wvemm3K.jpeg" blur={{ min: -1, max: 3 }} strength={0}> */}
      <div
        style={{ backgroundImage: "url(/zenith/images/6Wvemm3K.jpeg)", height:"570px"}}
        className="demibloc"
        alt="wordpage"
      >
        {/* <video playsInline autoPlay muted loop> */}
          {/* <source src="/zenith/video/videobg4.mp4" type="video/mp4"></source> */}
        {/* </video> */}

        <div className="" alt="Liste de mots"style={{height:'100%'}}>
          <div
            style={{width:'100%'}}
            data-aos="zoom-in"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <div className="parent">
            <Marquee style={{width:"100%", overflow: 'hidden', display: 'flex', alignItems: 'center', height:"170px"}} gradient={false}>
              <h1 className="wordpage letterSpacing light  grid1" id="wordpage">
                RÉACTIVITÉ
              </h1>
              <h1 className="margin medium wordpageText grid2">·</h1>
              <h1
                className="wordpage letterSpacing outline normal grid3"
              >
                PROXIMITÉ
              </h1>
              <h1 className=" margin medium wordpageText outline grid4">·</h1>
              <h1  className="wordpage light letterSpacing grid5">
                PASSION
              </h1>
              <h1 className=" wordpageText  medium grid6">·</h1>
              <h1  className="wordpage normal outline letterSpacing grid7">
                STRATÉGIE
              </h1>
              <h1 className=" wordpageText outline medium grid6">·</h1>
            </Marquee>
            <Marquee style={{width:"100%", overflow: 'hidden', display: 'flex', alignItems: 'center', height:"170px"}} direction={"right"} gradient={false}>
              <h1  className="wordpage normal letterSpacing grid9">
                EVENT
              </h1>
              <h1 className=" wordpageText medium grid10">·</h1>
              <h1
                
                className="wordpage marron normal letterSpacing grid11"
              >
                ZENITH
              </h1>
              <h1 className=" wordpageText outline medium grid12">·</h1>
              <h1  className="wordpage normal letterSpacing grid13">
                CONSEIL
              </h1>
              <h1 className=" wordpageText medium grid14">·</h1>
              <h1  className="wordpage normal letterSpacing grid15">
                COMMUNICATION
              </h1>
              <h1 className=" wordpageText outline medium grid6">·</h1>
              </Marquee>
              <Marquee style={{width:"100%", overflow: 'hidden', display: 'flex', alignItems: 'center', height:"170px"}} gradient={false} >
              <h1
                
                className="wordpage medium letterSpacing grid17"
              >
                CRÉATIVITÉ
              </h1>
              <h1  className=" wordpageText medium grid18">·</h1>
              <h1  className="wordpage light outline letterSpacing grid19">
                RÊVER
              </h1>
              <h1  className=" wordpageText outline medium grid20">·</h1>
              <h1 className="wordpage light letterSpacing grid21">
                AMBITION
              </h1>
              <h1  className=" wordpageText medium grid22">·</h1>
              <h1
                className="wordpage outline normal letterSpacing grid23"
              >
                IMAGINATION
              </h1>
              <h1 className=" wordpageText outline  medium grid6">·</h1>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
      {/* </Parallax> */}
    </>
  );
};

export default Wordpage;
