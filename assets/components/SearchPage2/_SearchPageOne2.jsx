import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

function SearchPageOne2(data) {
	console.log(data)
	AOS.init()
		return (
			<>


			<div className="background1" alt="homepage">

			<video playsInline autoPlay muted loop>
				<source src="/zenith/video/videobg.mp4" type="video/mp4"></source>
			</video>

				<div className="opacityBlue">
					<div className="wrapper">
						<div className="container center2">
			
						<div className="containerCenter" data-aos="fade-up">
							<Link to="/">
								<img src="/zenith/images/bIO1r9F.png" alt="Logo" width={200} className="center" />
							</Link>	
						</div>

						<div className="workpageText" data-aos="fade-up">
							<h1 className="medium">RESULTAT POUR "{data.data}"</h1>
							{/* <p className="light">LOGO. WEB DESIGN. CATEGORIE</p> */}
						</div>

						</div>

						
					</div>
				</div>
			</div>

			</>
		);
	}
 
export default SearchPageOne2;



