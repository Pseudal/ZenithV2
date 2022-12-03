import React from 'react'
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

//swiper ou margin pour les espaces entre les blocs / les div 


function ProjectpageFive() {
		return (
			<>
<Swiper
      slidesPerView={1}
      centeredSlides={true}
      spaceBetween={0}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      }}
      className="swiper2"
      data-aos="fade-up" data-aos-duration="1000"
      >
			
			<div style={{backgroundImage: "url(/zenith/images/x9nes5V.jpg)"}} className="background">
				<div className='opacityBlue'>
					<div className='wrapper'>
						<div className='parentClientView'>
						<SwiperSlide>	
							<div className='clientGridView1'>
				
							<div className='boxFlex'></div>
							</div> </SwiperSlide>
                       
					   <SwiperSlide>
							<div className='clientGridView2'>
							<div className='boxFlex'></div>
                    
							</div>
							</SwiperSlide>

						<SwiperSlide>	
							<div className='clientGridView3'>
							<div className='boxFlex'></div>
                        

							</div> </SwiperSlide>

						<SwiperSlide	

							<div className='clientGridView4'>
							<div className='boxFlex'></div>
                               
							</div>
							</SwiperSlide>
						</div>
						cccc
					</div>
				</div>
			</div>
</Swiper>



		
		);
	}
 
export default ProjectpageFive;