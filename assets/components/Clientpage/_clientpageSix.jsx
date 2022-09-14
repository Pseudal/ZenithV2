import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";


function ClientpageSix() {
	AOS.init()
		return (
			<>

					<div className='demiblocOpacity'>
						<div className='containerCenter marginTopS'>
						<h4 className='medium centerText'>UN TÉMOIGNAGE</h4>
						<p className='light centerText'>« UNE RÉACTIVITÉ RARE » <br />
								Du premier rdv au lancement, les équipes se sont montrées d’une disponibilité et d’une réactivité rare. <br />
								<br /> M. JACQUES MARTIN <br /><br />
								DIRECTEUR DES OPÉRATIONS</p>
						</div>
					</div>


				<div className='demiblocClient'>
					<div className='demiblocOpacity'>
						<div className='parentClientNextPrev'>
							<div className='ClientNextPrev1'>
								<h6 className='light rightText marginTopS'>PROJET PRÉCÉDENT</h6>
								<h5 className='rightText'>NOM CLIENT</h5>
								<h6 className='light rightText'>REINVENTER UNE <br /> INDENTITÉ DE MARQUE</h6>
							</div>
							<div className='ClientNextPrev2'>
								<h6 className='light leftText marginTopS'>PROJET PRÉCÉDENT</h6>
								<h5 className='leftText'>NOM CLIENT</h5>
								<h6 className='light leftText'>REINVENTER UNE <br /> INDENTITÉ DE MARQUE</h6>
							</div>
						</div>
					</div>
				</div>



			</>
		);
	}
 
export default ClientpageSix;