import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Element } from "react-scroll";
import { Parallax } from 'react-parallax';

function Creation(item) {
  let slider = []
  console.log(item)
  if(item.item.length >0) {
    item.item.forEach(element => {
      let newSlider = (<SwiperSlide key={element.id} className="swiperSlide2"><div className="boxCréation" onMouseOut={(e) => RemoveBlurDetail(e)} onMouseOver={(e) => BlurDetail(e)}><div style={{ width: "200px", height: "100%", position: "absolute"}}><p style={{pointerEvents: "none", display: "none", width: "200px", textAlign:"center",position:"absolute", left: "0px", top:"200px"}}>{item.item[0].mission}</p></div><img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={`images/imageprojet/${element.creation}`} alt="" /></div></SwiperSlide>)
      slider.push(newSlider)
    });
  }else{
    slider = ( <h1 className="titreA medium letterSpacing marginStop">rien a voir</h1> )
  }
  function BlurDetail(e){
    console.log(e)
    e.target.style.backdropFilter = "blur(4px)";
    e.target.children[0].style.display = "inline"
  }
  function RemoveBlurDetail(e){
    console.log(e)
    e.target.style.backdropFilter = "blur(0)";
    e.target.children[0].style.display = "none"
  }
  return (
    <>
      {/* <div style={{backgroundImage: "url(/zenith/images/x9nes5V.jpg)"}} className="background">

        <video playsInline autoPlay muted loop>
					<source src="/zenith/video/videobg4.mp4" type="video/mp4"></source>
				</video> */}
      {/* <Element name="scroll-to-element4" className="element"></Element> */}
      <Parallax bgImage="/zenith/images/Z1zIJCKk.jpeg" blur={{ min: -1, max: 3 }} strength={800}>

      <div className="" style={{paddingTop: '40px'}}>
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
              centeredSlides={false}
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
                  slidesPerView: 7,
                  spaceBetween: 1,
                },
              }}
              className="swiper2"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {slider}
              {/* <SwiperSlide className="swiperSlide2">
              <div className="boxCréation" onMouseOut={(e) => RemoveBlurDetail(e)} onMouseOver={(e) => BlurDetail(e)}><div style={{ width: "200px", height: "100%", position: "absolute"}}><p style={{pointerEvents: "none", display: "none", width: "200px", textAlign:"center",position:"absolute", left: "0px", top:"200px"}}>{item.item[1].mission}</p></div><img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={`/zenith/images/_DSC1300.jpg`} alt="" /></div>            
              </SwiperSlide>
              <SwiperSlide className="swiperSlide2">
              <div className="boxCréation" onMouseOut={(e) => RemoveBlurDetail(e)} onMouseOver={(e) => BlurDetail(e)}><div style={{ width: "200px", height: "100%", position: "absolute"}}><p style={{pointerEvents: "none", display: "none", width: "200px", textAlign:"center",position:"absolute", left: "0px", top:"200px"}}>{item.item[2].mission}</p></div><img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={`/zenith/images/1J4A5009 (1).jpg`} alt="" /></div>             
              </SwiperSlide>
              <SwiperSlide className="swiperSlide2">
              <div className="boxCréation" onMouseOut={(e) => RemoveBlurDetail(e)} onMouseOver={(e) => BlurDetail(e)}><div style={{ width: "200px", height: "100%", position: "absolute"}}><p style={{pointerEvents: "none", display: "none", width: "200px", textAlign:"center",position:"absolute", left: "0px", top:"200px"}}>{item.item[3].mission}</p></div><img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={`/zenith/images/Capture d’écran 2022-12-03 à 21.33.29.png`} alt="" /></div>            
              </SwiperSlide>
              <SwiperSlide className="swiperSlide2">
              <div className="boxCréation" onMouseOut={(e) => RemoveBlurDetail(e)} onMouseOver={(e) => BlurDetail(e)}><div style={{ width: "200px", height: "100%", position: "absolute"}}><p style={{pointerEvents: "none", display: "none", width: "200px", textAlign:"center",position:"absolute", left: "0px", top:"200px"}}>{item.item[4].mission}</p></div><img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={`/zenith/images/IMG_7487.jpg`} alt="" /></div>          
              </SwiperSlide>
              <SwiperSlide className="swiperSlide2">
              <div className="boxCréation" onMouseOut={(e) => RemoveBlurDetail(e)} onMouseOver={(e) => BlurDetail(e)}><div style={{ width: "200px", height: "100%", position: "absolute"}}><p style={{pointerEvents: "none", display: "none", width: "200px", textAlign:"center",position:"absolute", left: "0px", top:"200px"}}>{item.item[5].mission}</p></div><img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={`/zenith/images/IMG_0004.jpg`} alt="" /></div>
              </SwiperSlide>
              <SwiperSlide className="swiperSlide2">
              <div className="boxCréation" onMouseOut={(e) => RemoveBlurDetail(e)} onMouseOver={(e) => BlurDetail(e)}><div style={{ width: "200px", height: "100%", position: "absolute"}}><p style={{pointerEvents: "none", display: "none", width: "200px", textAlign:"center",position:"absolute", left: "0px", top:"200px"}}>{item.item[4].mission}</p></div><img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={`/zenith/images/IMG_9838.jpg`} alt="" /></div>          
              </SwiperSlide>
              <SwiperSlide className="swiperSlide2">
              <div className="boxCréation" onMouseOut={(e) => RemoveBlurDetail(e)} onMouseOver={(e) => BlurDetail(e)}><div style={{ width: "200px", height: "100%", position: "absolute"}}><p style={{pointerEvents: "none", display: "none", width: "200px", textAlign:"center",position:"absolute", left: "0px", top:"200px"}}>{item.item[5].mission}</p></div><img style={{ width: "100%", height: "100%", objectFit: "cover" }} src={`/zenith/images/DIA_0759.jpg`} alt="" /></div>
              </SwiperSlide> */}
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
                 DÉCOUVRIR +</Link>
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
