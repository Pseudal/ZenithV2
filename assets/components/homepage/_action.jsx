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
      <Parallax bgImage="https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" blur={{ min: -1, max: 3 }} strength={400}>

      <div className="opacityBlue" style={{ paddingTop: "30px" }}>
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
                        "url(https://www.businessmarches.com/wp-content/uploads/2015/11/shutterstock_195467156.jpg)",
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
                        "url(https://www.permis-de-exploitation.com/pix/boite-de-nuit-pratique-business.jpg)",
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
                        "url(https://static.wixstatic.com/media/bb5e3b_4a0958f2b3a0490f8942a00b65550d51~mv2_d_6000_3000_s_4_2.jpg/v1/fill/w_1588,h_794,al_c,q_85,usm_1.20_1.00_0.01,enc_auto/bb5e3b_4a0958f2b3a0490f8942a00b65550d51~mv2_d_6000_3000_s_4_2.jpg)",
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

              <SwiperSlide>
                <Link to="/projets" className="textDeco">
                  <div className="boxCarre">
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
