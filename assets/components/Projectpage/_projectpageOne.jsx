import React from 'react'
import { Link } from "react-router-dom";

function ProjectpageOne(data) {
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
							<a href="#" className="">
								<img src="/zenith/images/bIO1r9F.png" alt="Logo" width={200} className="center" />
							</a>
						</div>

						<div className='container'>	

						<div className="clientpageText" data-aos="fade-up">
							<h1 className="medium marginStop clientDetail">{data.data.projet}</h1>
							<h6 className="light marginStop clientDetail">{data.data.secteur.secteur}</h6>
							{data.data.client ? <p className="light marginStop clientDetail">UN PROJET POUR : {data.data.client.nomClient}</p> :  <p className="light marginStop clientDetail">UN PROJET POUR : N/A</p>}
							{data.data.duree ? <p className="light clientDetail">DURÉE PROJET : {data.data.duree}</p> : <p className="light clientDetail">DURÉE PROJET : N/A</p>}
							
							

							<Link to={`/searchcat/${data.data.categorie[0].id}/${data.data.categorie[0].categorie}`}><p style={{display: "inline", textTransform: 'uppercase'}} className="light clientDetail2">{data.data.categorie[0].categorie}</p></Link>
							<p style={{display: "inline"}} className="light clientDetail2">   |   </p>
							{data.data.categorie[1] && <Link to={`/searchcat/${data.data.categorie[1].id}/${data.data.categorie[0].categorie}`} ><p className="light clientDetail2" style={{display: "inline", textTransform: 'uppercase'}}>{data.data.categorie[1].categorie}</p></Link>}
						</div>
						</div>
						<div className="containerCenter3" data-aos="fade-up">
							<h4 style={{ textTransform: 'uppercase'}} className="light letterSpacingS  discoverClient2">{data.data.mission}</h4>
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
 
export default ProjectpageOne;



