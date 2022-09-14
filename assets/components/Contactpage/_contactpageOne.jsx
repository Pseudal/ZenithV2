import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";


function ContactPageOne() {
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

							<div className='parent5'>
								<div className="containerCenter2 divC4" >
									<h1 className="medium">Contactez Nous</h1> 
									<h6 className="light">Présentez votre projet et laissez-nous vos
									informations de contact. Nous reviendrons vers
									vous dans un délai de 24h.</h6>
								</div>

								<div className="form__group field  divC1">
									<input type="input" className="form__field" placeholder="Name" name="name" id='name' required />
									<label htmlFor="name" className="form__label">Votre nom</label>

								</div>

								<div className="form__group2 field divC2">
									<input type="input" className="form__field" placeholder="Name" name="name" id='name' required />
									<label htmlFor="name" className="form__label">Votre adresse e-mail</label>

								</div>

								<div className="textarea__group field divC3">
									<textarea type="input" className="form__field" placeholder="Name" name="name" id='name'  required />
									<label htmlFor="name" className="form__label">Votre besoin</label>

								</div>
							</div>

						</div>
						 
					</div>
				</div>
			</div>

			</>
		);
	}
 
export default ContactPageOne;



