import React from 'react'
import { Link } from "react-router-dom";


function ProjectpageThree(data) {
		return (
			<>

				<div className='wrapperDarkBlueClient'>
					<div className='containerFlex'>
						<img className='contain' src={"/images/imageprojet/" + data.data.image} alt=""/>
					</div>
				</div>
			</>
		);
	}
 
export default ProjectpageThree;