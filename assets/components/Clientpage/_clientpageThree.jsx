import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";


function ClientpageThree(data) {
	AOS.init()
		return (
			<>

				<div className='wrapperDarkBlueClient'>
					<div className='containerFlex'>
						<img className='contain' src={"/images/imageclient/" + data.data.image} alt=""/>
					</div>
				</div>
			</>
		);
	}
 
export default ClientpageThree;