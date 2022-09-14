import React from 'react'

function MiniFooter() {
		return (
			<>


				<div style={{backgroundImage: "url(/zenith/images/x9nes5V.jpg)"}} className="demiblocFooter2" alt="footer">
					<div className="demibloc2">
						<div className="parent4">
							<div className="divC">
								<img className="center" src="/zenith/images/wX2LCIT.png" alt="" width="220" />
								<p className="titreC light letterSpacingXS">ZENITH <br /> VAL D’EUROPE <br /> HELLO@AGENCEZENITH.COM <br /> 06.11.86.65.80.</p>
							</div>

							<div className="divD">
								<h4 className="titreD medium letterSpacing marginBottom">REJOIGNEZ <br /> L’AVENTURE</h4>
								<div className="rs2 centerFlex center">
      						<a className="fb2" href='https://www.facebook.com/AGENCEZENITH/'></a>
      						<a className="insta2" href='https://www.instagram.com/agencezenith/?hl=fr'></a>
      						<a className="linkedin2" href='https://www.linkedin.com/company/agence-zenith/'></a>
    						</div>
									<h4 className="titreD medium letterSpacing marginBottom ">NEWSLETTER</h4>
									<input className="inputMail center" type="email" id="email" pattern=".+@globex\.com" size="30" required></input>
							</div>

							<div className="divE">
								<h4 className="titreC medium letterSpacing">SITE MAP</h4>
								<ul className='ul2'>
									<li>
										<a href="" className="footerText light text-h5">ACCUEIL</a>
									</li>
									<li>
										<a href="" className="footerText light text-h5">PROJETS</a>
									</li>
									<li>
										<a href="" className="footerText light text-h5">ÉQUIPE</a>
									</li>
									<li>
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

 
export default MiniFooter;