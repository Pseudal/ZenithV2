import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Element } from "react-scroll";
import { Parallax } from 'react-parallax';

function Creation(item) {
  console.log(item);
  function BlurDetail(e){
    console.log(e)
    e.target.style.backdropFilter = "blur(4px)";
  }
  function RemoveBlurDetail(e){
    console.log(e)
    e.target.style.backdropFilter = "blur(0)";
  }
  return (
    <>
      {/* <div style={{backgroundImage: "url(/zenith/images/x9nes5V.jpg)"}} className="background">

        <video playsInline autoPlay muted loop>
					<source src="/zenith/video/videobg4.mp4" type="video/mp4"></source>
				</video> */}
      {/* <Element name="scroll-to-element4" className="element"></Element> */}
      <Parallax bgImage="https://images.unsplash.com/photo-1504966981333-1ac8809be1ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" blur={{ min: -1, max: 3 }} strength={400}>

      <div className="opacityBlue" style={{paddingTop: '40px'}}>
        <div
          data-aos="zoom-in"
          data-aos-mirror=""
          data-aos-once="false"
          data-aos-anchor-placement=""
        >
          <div className="wrapper2">
            <h1
              className="titreA medium letterSpacing marginStop"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              CRÉATION
            </h1>
            <h6
              className="light letterSpacingS sousTitre"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              UNE HISTOIRE. UN ENJEU. UNE RÉPONSE.
            </h6>

            <Swiper
            style={{height: '500px'}}
              slidesPerView={1}
              centeredSlides={true}
              spaceBetween={0}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 1,
                },
              }}
              className="swiper2"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <SwiperSlide className="swiperSlide2">
                <div className="boxCréation" onMouseOut={(e) => RemoveBlurDetail(e)} onMouseOver={(e) => BlurDetail(e)}><span style={{ width: "68%", height: "100%", position: "absolute", }}><p style={{pointerEvents: "none", boxSizing: "content-box",}}>{item.item[0].mission}</p></span><img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={`/images/imageprojet/${item.item[0].header}`} alt="" /></div>
              </SwiperSlide>
              <SwiperSlide className="swiperSlide2">
                <div className="boxCréation"><img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={`/images/imageprojet/${item.item[1].header}`} alt="" /></div>              
              </SwiperSlide>
              <SwiperSlide className="swiperSlide2">
                <div className="boxCréation"><img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={`/images/imageprojet/${item.item[2].header}`} alt="" /></div>              
              </SwiperSlide>
              <SwiperSlide className="swiperSlide2">
                <div className="boxCréation"><img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={`/images/imageprojet/${item.item[3].header}`} alt="" /></div>              
              </SwiperSlide>
              <SwiperSlide className="swiperSlide2">
                <div className="boxCréation"><img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={`/images/imageprojet/${item.item[4].header}`} alt="" /></div>              
              </SwiperSlide>
              <SwiperSlide className="swiperSlide2">
                <div className="boxCréation"><img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={`/images/imageprojet/${item.item[5].header}`} alt="" /></div>              
              </SwiperSlide>
              <SwiperSlide className="swiperSlide2">
                <div className="boxCréation">7</div>
              </SwiperSlide>
              <SwiperSlide className="swiperSlide2">
                <div className="boxCréation">8</div>
              </SwiperSlide>
            </Swiper>
            <div
              data-aos="fade-up"
              data-aos-duration="1000">
            <h4
              className="titreB light letterSpacing container center accroche"
            >
              PROPULSER L’IMAGINAIRE PLUS LOIN
            </h4>
            <button
              className="marginBottom2 btnS center light letterSpacingM"
            >
              <Link to="/projets" className="textDeco">
                DÉCOUVRIR
              </Link>
            </button>
            </div>
          </div>
        </div>
      </div>
      </Parallax>
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

{
  /* <div className='containerC'>
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
            </div> */
}
