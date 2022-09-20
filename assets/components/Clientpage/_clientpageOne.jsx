import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";


function ClientpageOne(data) {
	
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

						<div className='container'>	

						<div className="clientpageText" data-aos="fade-up">
							<h1 className="medium marginStop clientDetail">{data.data.nomClient}</h1>
							<h6 className="light marginStop clientDetail">{data.data.secteur.secteur}</h6>

							{data.data.duree ? <p className="light clientDetail">DURÉE PROJET : {data.data.duree}</p> : <p className="light clientDetail">DURÉE PROJET : N/A</p>}

							<p style={{display: "inline", textTransform: 'uppercase'}} className="light clientDetail2">{data.data.categorie[0].categorie}</p>
							<p style={{display: "inline"}} className="light clientDetail2">   |   </p>
							{data.data.categorie[1] && <p className="light clientDetail2" style={{display: "inline", textTransform: 'uppercase'}}>{data.data.categorie[1].categorie}</p>}
						</div>
						</div>
						<div className="containerCenter3" data-aos="fade-up">
							<h4 className="light letterSpacingS  discoverClient2">REINVENTER UNE IDENTITÉ <br /> DE MARQUE</h4>
						</div>

						<div className="containerCenter" data-aos="fade-up">
							<p className="light  discoverClient">DÉCOUVREZ</p>
							<div className="lineClient" ></div>
						</div>

						</div>
					</div>
				</div>
			</div>

			</>
		);
	}
 
export default ClientpageOne;



