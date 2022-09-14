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
					<source src="../../videobg.mp4" type="video/mp4"></source>
				</video>

				<div className="opacityBlue">
					<div className="wrapper">
						<div className="container center2">
			
							<div className="containerCenter" data-aos="fade-up">
								<Link to="/">
								<img src="https://i.imgur.com/bIO1r9F.png" alt="Logo" width={200} className="center" />
								</Link>							
							</div>

							<div className='parent5'>
								<div className="containerCenter2 divC4" >
									<h1 className="medium">Contactez Nous</h1> 
									<h6 className="light">Présentez votre projet et laissez-nous vos
									informations de contact. Nous reviendrons vers
									vous dans un délai de 24h.</h6>
								</div>

								<div class="form__group field  divC1">
									<input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
									<label for="name" class="form__label">Votre nom</label>

								</div>

								<div class="form__group2 field divC2">
									<input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
									<label for="name" class="form__label">Votre adresse e-mail</label>

								</div>

								<div class="textarea__group field divC3">
									<textarea type="input" class="form__field" placeholder="Name" name="name" id='name'  required />
									<label for="name" class="form__label">Votre besoin</label>

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



