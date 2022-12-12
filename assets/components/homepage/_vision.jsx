import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Parallax } from 'react-parallax';

function Vision()  {

		return (
			<>

      {/* <video playsInline autoPlay muted loop>
					<source src="/zenith/video/videobg6.mp4" type="video/mp4"></source>
				</video> */}
      {/* <div style={{backgroundImage: "url(/zenith/images/x9nes5V.jpg)"}} className='background'> */}

      <Parallax bgImage="/zenith/images/aWELhk8A.jpeg" strength={0}>

      <div className="" style={{paddingTop: '200px'}}>
      <div data-aos="zoom-in" data-aos-mirror="true"data-aos-once="false"data-aos-anchor-placement="top-center">
        <div className="wrapper" style={{height:"1000px"}}>
          <h1 className="titreA medium letterSpacing marginStop" data-aos="fade-up" data-aos-duration="1000">VISION</h1>
          <h6 className="light letterSpacingS sousTitre" data-aos="fade-up" data-aos-duration="1000">UNE RENCONTRE QUI CHANGE TOUT</h6>

          <div className="slider">
            <Swiper
            slidesPerView={1}
            centeredSlides={true}
            className="swiper3"
            data-aos="fade-up" data-aos-duration="1000"
            >
              <SwiperSlide className="swiperSlide">
                <div className="slider__contents">
                  <div className="parent3">

                      <div className="visionBox">
                        <img style={{width: '100%', height: '100%', objectFit: 'cover'}}src="https://static.wixstatic.com/media/bb5e3b_a105239bfd1848b4892939d8798cd657~mv2.jpg/v1/crop/x_109,y_0,w_734,h_900/fill/w_270,h_348,al_c,q_80,usm_1.20_1.00_0.01,enc_auto/bb5e3b_a105239bfd1848b4892939d8798cd657~mv2.jpg" alt="" />
                      </div>

                      <ul>
                      <h2 className="visionText2 medium">MATHIS</h2>
                      <li className="visionText light text-h4">CONSEIL</li> 
                      <li className="visionText light text-h4">NÉGOCIATION</li> 
                      <li className="visionText light text-h4">ÉVÉNEMENTIEL</li> 
                      <li className="visionText light text-h4">GESTION DE PROJET</li> 
                      <li className="visionText light text-h4">DIRECTION ARTISTIQUE</li> 
                      <li className="visionText light text-h4">DIRECTION D'EXPLOITATION</li>
                      <li className="visionText light text-h4">DÉVELOPPEMENT COMMERCIAL </li>
                      </ul>
                      
                  </div>
                </div>
              </SwiperSlide>
              
              <SwiperSlide className="swiperSlide">
                <div className="slider__contents">
                  <div className="parent3">

                      <div className="visionBox">
                        <img style={{width: '100%', height: '100%', objectFit: 'cover'}}src="https://static.wixstatic.com/media/94b255_74885d374cf84214899c9df60d653638~mv2.jpg/v1/fill/w_284,h_371,al_c,q_80,usm_1.20_1.00_0.01,enc_auto/AVATAR%20RON%20B.jpg" alt="" />
                      </div>

                      <ul>
                      <h2 className="visionText2 medium">RON</h2>
                      <li className="visionText light text-h4">CONSEIL</li> 
                      <li className="visionText light text-h4">NÉGOCIATION</li> 
                      <li className="visionText light text-h4">ÉVÉNEMENTIEL</li> 
                      <li className="visionText light text-h4">GESTION DE PROJET</li> 
                      <li className="visionText light text-h4">DIRECTION ARTISTIQUE</li> 
                      <li className="visionText light text-h4">DIRECTION D'EXPLOITATION</li>
                      <li className="visionText light text-h4">DÉVELOPPEMENT COMMERCIAL </li>
                      </ul>
                      
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>




        </div>
      </div>
    </div>
    </div>
    </Parallax>
			</>
		);
	}

 
export default Vision;