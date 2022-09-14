import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";


function Action() {
		return (
			<>
			
				<div className="background1" alt="action">
				{/* <video playsInline autoPlay muted loop>
					<source src="../../videobg8.mp4" type="video/mp4"></source>
				</video> */}
      		<div className="opacityBlue">
        		<div className="wrapper2">
							<div className="container2" data-aos="fade-up" data-aos-duration="1000">

          		<h1 className="titreA medium letterSpacing marginStop" data-aos="fade-up" data-aos-duration="1000">ACTION</h1>
          		<h6 className="light letterSpacingS sousTitre" data-aos="fade-up" data-aos-duration="1000">SE CONCENTRER SUR L’ESSENTIEL : VOUS</h6>


						<Swiper
						slidesPerView={3}
						spaceBetween={-100}
						className="swiper"
						>
							<SwiperSlide>
								<Link to="/projets" className="textDeco">
									<div className="boxCarre">
										<p className="textAction1 letterSpacingS ">CONSEIL<br /><br /><span className="light">ACCOMPAGNEMENT<br />360°</span></p>
									</div>
								</Link>
							</SwiperSlide>
							
							<SwiperSlide>
									<div className="boxCarre">
								<Link to="/projets" className="textDeco">
									<p className="textAction1 letterSpacingS ">COMMUNICATION<br /><br /><span className="light">SOLUTION<br />SUR-MESURE</span></p>
								</Link>
									</div>
							</SwiperSlide>

							<SwiperSlide>
									<div className="boxCarre">
								<Link to="/projets" className="textDeco">
									<p className="textAction1 letterSpacingS ">EVENT<br /><br /><span className="light">LIVRAISON<br />CLÉS EN MAIN</span></p>
								</Link>
									</div>
							</SwiperSlide>

							<SwiperSlide>
								<Link to="/projets" className="textDeco">
									<div className="boxCarre">
										<p className="textAction1 letterSpacingS ">CONSEIL<br /><br /><span className="light">ACCOMPAGNEMENT<br />360°</span></p>
									</div>
								</Link>
							</SwiperSlide>

						</Swiper>
          

          		<h4 className="titreB light letterSpacing container center accroche" data-aos="fade-up" data-aos-duration="1000">AGIR ET RÉAGIR AVEC VOUS</h4>
          		<button className="btnS center light letterSpacingM marginBottom2" data-aos="fade-up" data-aos-duration="1000">EN COMPRENDRE +</button>
							</div>


        		</div>

      		</div>
    		</div>

			</>
		);
	}

 
export default Action;