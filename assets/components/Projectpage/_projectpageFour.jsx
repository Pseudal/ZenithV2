import React from 'react'
import { Link } from "react-router-dom";


function ProjectpageFour({preci, data2}) {
	console.log(preci)
	if(data2.focus){
		return (
			<>
			<div style={{backgroundImage: "url(/zenith/images/x9nes5V.jpg)"}} className="background">	
			<div className='opacityBlue'>
				<div className='wrapper2'>
					<div className='containerCenterA'>

					<div className='parent21 marginTop'>

						<div className='marginTop2' >
							<h3 className='light letterSpacingS'>Focus</h3>
							<div className='light containerCenterClient text-h5' style={{ textTransform: 'uppercase'}} dangerouslySetInnerHTML={{__html:data2.focus}}></div>
						</div>

						<div className=' boxClient'>
							<img className=' contain' style={{ objectFit:"cover"}} src={"/images/imageprojet/" + preci.image} alt=""/>
						</div>
					</div>
					</div>

				</div>
			</div>
			</div>		




			</>
		);
	}}
 
export default ProjectpageFour;