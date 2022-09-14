import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Homepage() {
	AOS.init()
		return (
			<>
			<div className="background1" alt="homepage">

			<video playsInline autoPlay muted loop>
				<source data-truc="/zenith/video/videobg.mp4" src="/zenith/video/videobg.mp4" type="video/mp4"></source>
			</video>

				<div className="opacityBlue">
					<div className="wrapper">
						<div className="container center2">
			
						<div className="containerCenter" data-aos="fade-up">
								<img src="/zenith/images/bIO1r9F.png" alt="Logo" width={330} />
						</div>
						<div className="fbvi center">
								<h1 className="semibold" data-aos="fade-up"><span className="thin">FAITES</span> BRILLER <span className="thin"> VOS </span>IDÉES</h1>
						</div>

						<div className="line" data-aos="fade-up"></div>
						</div>

						
					</div>
				</div>
			</div>

			</>
		);
	}
 
export default Homepage;



