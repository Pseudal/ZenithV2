import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Creation() {
  return ( 
    <>
        {/* <video playsInline autoPlay muted loop>
					<source src="../../videobg4.mp4" type="video/mp4"></source>
				</video> */}

        <div className="opacityBlue">
          <div className="wrapper2">
            <h1 className="titreA medium letterSpacing marginStop" data-aos="fade-up" data-aos-duration="1000">CRÉATION</h1>
            <h6 className="light letterSpacingS sousTitre" data-aos="fade-up" data-aos-duration="1000">UNE HISTOIRE. UN ENJEU. UNE RÉPONSE.</h6>

      <Swiper
      slidesPerView={7}
      centeredSlides={true}
      className="swiper2"
      data-aos="fade-up" data-aos-duration="1000"
      >
        <SwiperSlide className="swiperSlide2">
          <div className="boxCréation">1
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide2">
          <div className="boxCréation">2
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide2">
          <div className="boxCréation">3
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide2">
          <div className="boxCréation">4
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide2">
          <div className="boxCréation">5
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide2">
          <div className="boxCréation">6
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide2">
          <div className="boxCréation">7
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide2">
          <div className="boxCréation">8
          </div>
        </SwiperSlide>
      </Swiper>
      
      
      <h4 className="titreB light letterSpacing container center accroche" data-aos="fade-up" data-aos-duration="1000">PROPULSER L’IMAGINAIRE PLUS LOIN</h4>
      <button className="marginBottom2 btnS center light letterSpacingM" data-aos="fade-up" data-aos-duration="1000">
      <Link to="/projets" className="textDeco">DÉCOUVRIR</Link>

      </button>
      </div>
      

      </div>
      </>
      );
    }
    
    export default Creation;
    
    // const items = ['', '', '', '', '', '','','','','','','',]
    // const setting = {
    //   dragSpeed: 0.4,
    //   itemWidth: 200,
    //   itemHeight: 464,
    //   itemSideOffsets: 40,
    // }
    // const itemStyle = {
    //   width: `${setting.itemWidth}px`,
    //   height: `${setting.itemHeight}px`,
    //   margin: `0px ${setting.itemSideOffsets}px`
    // }


            {/* <div className='containerC'>
              <Carousel _data={items} {...setting}>
                {
                  items.map((i, _i) => (
                    <div
                      key={_i}
                      className='item'
                      style={{ ...itemStyle }}>
                    </div>
                  ))
                }
              </Carousel>
            </div> */}