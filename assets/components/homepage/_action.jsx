import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import { Parallax } from 'react-parallax';


function Action() {
  return (
    <>
      {/* <div
        style={{ backgroundImage: "url(/zenith/images/x9nes5V.jpg)" }}
        className="background"
        alt="action"
      > */}
      <Parallax bgImage="/zenith/images/aWELhk8A.jpeg" blur={{ min: -1, max: 3 }} strength={0}>

      <div className="" style={{ paddingTop: "30px" }}>
        <div className="wrapper2">
          <div
            className="container2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h1
              className="titreA medium letterSpacing marginStop"
              id="patchnaze"
            >
              ACTION
            </h1>
            <h6 className="light letterSpacingS sousTitre">
              SE CONCENTRER SUR L’ESSENTIEL : VOUS
            </h6>

            <Swiper slidesPerView={3} spaceBetween={-100} className="swiper">
              <SwiperSlide>
                <Link to="/projets" className="textDeco">
                  <div
                    className="boxCarre"
                    style={{
                      backgroundImage:
                      "url(/zenith/images/pexels-andrea-piacquadio-3760093.jpg)",
                      backgroundSize: "cover",
                      }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        backdropFilter: "blur(5px)",
                      }}
                    >
                      <p className="textAction1 letterSpacingS ">
                        CONSEIL
                        <br />
                        <br />
                        <span className="light">
                          ACCOMPAGNEMENT
                          <br />
                          360°
                        </span>
                      </p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <Link to="/projets" className="textDeco">
                  <div
                    className="boxCarre"
                    style={{
                      backgroundImage:
                      "url(/zenith/images/COMM.jpg)",
                      backgroundSize: "cover",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        backdropFilter: "blur(5px)",
                      }}
                    >
                      <p className="textAction1 letterSpacingS ">
                        COMMUNICATION
                        <br />
                        <br />
                        <span className="light">
                          SOLUTION
                          <br />
                          SUR-MESURE
                        </span>
                      </p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>

              <SwiperSlide>
                <Link to="/projets" className="textDeco">
                  <div
                    className="boxCarre"
                    style={{
                      backgroundImage:
                      "url(/zenith/images/EVENT.jpg)",
                      backgroundSize: "cover",
                      }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        backdropFilter: "blur(5px)",
                      }}
                    >
                      <p className="textAction1 letterSpacingS ">
                        EVENT
                        <br />
                        <br />
                        <span className="light">
                          LIVRAISON
                          <br />
                          CLÉS EN MAIN
                        </span>
                      </p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>

            </Swiper>

            <h4
              className="titreB light letterSpacing container center accroche"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              AGIR ET RÉAGIR AVEC VOUS
            </h4>
            <button className="btnS center light letterSpacingM marginBottom2">
              EN COMPRENDRE +
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
      </Parallax>
    </>
  );
}

export default Action;
