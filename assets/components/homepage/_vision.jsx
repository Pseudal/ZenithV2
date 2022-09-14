import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Vision()  {

		return (
			<>

      {/* <video playsInline autoPlay muted loop>
					<source src="../../videobg6.mp4" type="video/mp4"></source>
				</video> */}

      <div className="opacityBlue">
        <div className="wrapper">
          <h1 className="titreA medium letterSpacing marginStop" data-aos="fade-up" data-aos-duration="1000">VISION</h1>
          <h6 className="light letterSpacingS sousTitre" data-aos="fade-up" data-aos-duration="1000">LA RENCONTRE QUI CHANGE TOUT</h6>

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

              <SwiperSlide className="swiperSlide">
                <div className="slider__contents">
                  <div className="parent3">

                      <div className="visionBox">
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
            </Swiper>




        </div>
      </div>
    </div>

			</>
		);
	}

 
export default Vision;