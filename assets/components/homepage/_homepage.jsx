import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Element } from "react-scroll";
import { Parallax } from 'react-parallax';

function Homepage() {
  AOS.init();
  return (
    <>
      {/* <div  style={{backgroundImage: "url(/zenith/images/x9nes5V.jpg)"}} className="background" alt="homepage" > */}

      <video playsInline autoPlay muted loop>
					<source src="/zenith/video/videobg.mp4" type="video/mp4"></source>
				</video> 
      {/* <Parallax bgImage="https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" blur={{ min: -1, max: 3 }} strength={400}> */}

      <div className="opacityBlue">
        <div className="wrapper">
          <div
            className="container2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="container center2">
              <div
                className="containerCenter"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <img src="/zenith/images/bIO1r9F.png" alt="Logo" width={330} />
              </div>

              <div className="fbvi center">
                <h1
                  className="semibold"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <span className="thin">FAITES</span> BRILLER{" "}
                  <span className="thin"> VOS </span>IDÉES
                </h1>
              </div>

              <div
                className="line"
                data-aos="fade-up"
                data-aos-duration="800"
              ></div>
              <Element name="scroll-to-element2" className="element"></Element>
            </div>
          </div>
        </div>
      </div>
      {/* </Parallax> */}
      {/* </div> */}
    </>
  );
}

export default Homepage;
