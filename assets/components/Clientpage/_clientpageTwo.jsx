import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";


function ClientpageTwo() {
	AOS.init()
		return (
			<>
				<div className='demiblocClient'>
					<div className='demiblocClientOpacity'>
						<div className='parentClient'>

							<div className='clientGrid1'>
								<h4 className='light'>UNE DEMANDE</h4>
								<p className='light containerCenterClient'>Spécialisé dans le domaine suivant, NOM CLIENT
																													propose depuis 2010 de mettre en place une
																													solution X, Y et Z dans plus de 10 pays.</p>
							</div>

							<div className='clientGrid2'>
								<h4 className='light'>UN DÉFI</h4>
								<p className='light containerCenterClient'>Souhaitant faire évoluer leur communication sur lesréseaux sociaux,</p>
							</div>

							<div className='clientGrid3'>
								<h4 className='light'>UNE ACTION</h4>
								<p className='light containerCenterClient'>Création charte graphique logo
																		Redesign du logo
																		Création de # propre
																		Mise en place d’action récurrente
																		+ 20% de fréquentation entre mai et septembre</p>
							</div>

						</div>
					</div>
				</div>




			</>
		);
	}
 
export default ClientpageTwo;
