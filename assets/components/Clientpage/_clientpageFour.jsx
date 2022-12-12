import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";


function ClientpageFour({preci, data2}) {
	AOS.init()
	if(data2.elementprecision){
		return (
			<>
			<div style={{backgroundImage: "url(/zenith/images/x9nes5V.jpg)"}} className="background">	
			<div className='opacityBlue'>
				<div className='wrapper2'>
					<div className='containerCenterA'>

					<div className='parent21 marginTop'>

						<div className='marginTop2' >
							<h3 className='light letterSpacingS'>ÉLÉMENTS DE PRÉCISION</h3>
							<div className='light containerCenterClient text-h5' style={{ textTransform: 'uppercase'}} dangerouslySetInnerHTML={{__html:data2.elementprecision}}></div>
						</div>

						<div className=' boxClient'>
							<img className=' contain' style={{ objectFit:"cover"}} src={"/images/imageclient/" + preci.image} alt=""/>
						</div>
					</div>
					</div>

				</div>
			</div>
			</div>		




			</>
		);
	}}
 
export default ClientpageFour;