import React, { useState } from 'react'
import { Link } from "react-router-dom";

function Footer() {
	//INFO https://www.freecodecamp.org/news/beginner-react-project-build-basic-forms-using-react-hooks/
	const [values, setValues] = useState({
		email: '',
	});

	const handleEmailInputChange = (event) => {
		event.persist();
		setValues((values) => ({
			...values,
			email: event.target.value,
			
		}));
		console.log(values.email)
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ "email": values.email, "new": true }),
		};
		fetch('/api/emails', requestOptions)
			.then(response => response.json())
	};

		return (
			<>
				<div className="demiblocFooter" alt="footer">
      		        <div className="demibloc2">
						<div className="emptyS"></div>
						<h2 className="titreE light letterSpacing marginStop">ET SI ON SE LANÇAIT ?</h2>
						<button className="btnL center light letterSpacingM">
							<Link to="/contact" className="textDeco">CONTACT</Link>
						</button>
						<h4 className=" light letterSpacing container center">ENSEMBLE, ÉCRIVONS VOTRE HISTOIRE</h4>

					</div>
				</div>

				<div className="demiblocFooter2" alt="footer">
					<div className="demibloc2">
						<div className="parent4">
							<div className="divC">
								<img className="center" src="/zenith/images/wX2LCIT.png" alt="" width="220" />
								<p className="titreF light letterSpacingXS">ZENITH <br /> VAL D’EUROPE <br /> HELLO@AGENCEZENITH.COM <br /> 06.11.86.65.80.</p>
							</div>

							<div className="divD">
								<h4 className="titreD medium letterSpacing marginBottom">REJOIGNEZ <br /> L’AVENTURE</h4>
								<div className="rs2 centerFlex center">
      						<a className="fb2" href='https://www.facebook.com/AGENCEZENITH/'></a>
      						<a className="insta2" href='https://www.instagram.com/agencezenith/?hl=fr'></a>
      						<a className="linkedin2" href='https://www.linkedin.com/company/agence-zenith/'></a>
    						</div>
								<form onSubmit={handleSubmit} >
									<h4 className="titreD medium letterSpacing marginBottom ">NEWSLETTER</h4>
									<input className="inputMail center"
									type="email" 
									id="email" 
									size="30" name="email" 
									value={values.email}
									onChange={handleEmailInputChange}
									required></input>
								</form>
							</div>

							<div className="divE">
								<h4 className="titreC medium letterSpacing">SITE MAP</h4>
								<ul className='ul2'>
									<li className='li2'>
										<a href="" className="footerText light text-h5">ACCUEIL</a>
									</li>
									<li className='li2'>
										<a href="" className="footerText light text-h5">PROJETS</a>
									</li>
									<li className='li2'>
										<a href="" className="footerText light text-h5">ÉQUIPE</a>
									</li>
									<li className='li2'>
										<a href="" className="footerText light text-h5">CONTACT</a>
									</li>
								</ul>
							</div>
						</div>
							<p className="light footerCredit letterSpacingS">© AGENCE ZENITH / TOUS DROITS RÉSERVÉS</p>
					</div>
				</div>
          
			</>
		);
	}

 
export default Footer;