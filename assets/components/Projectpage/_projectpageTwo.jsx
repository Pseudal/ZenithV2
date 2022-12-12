import React from 'react'
import { Link } from "react-router-dom";


function ProjectpageTwo(data) {
	if(data.data.demande || data.data.defi || data.data.action){
		return (
			<>
				<div style={{backgroundImage: "url(/zenith/images/x9nes5V.jpg)"}} className='demiblocClient'>
					<div className='demiblocClientOpacity'>
						<div className='parentClient'>
							{data.data.demande &&
							<div className='clientGrid1'>
								<h4 className='light'>UNE DEMANDE</h4>
								<div className='light containerCenterClient' dangerouslySetInnerHTML={{__html:data.data.demande}}></div>
							</div> 
							}

							{data.data.defi &&
							<div className='clientGrid2'>
								<h4 className='light'>UN DÉFI</h4>
								<div className='light containerCenterClient' dangerouslySetInnerHTML={{__html:data.data.defi}}></div>
							</div>
							}

							{data.data.action &&
							<div className='clientGrid3'>
								<h4 className='light'>UNE ACTION</h4>
								<div className='light containerCenterClient' dangerouslySetInnerHTML={{__html:data.data.action}}></div>
							</div>
							}

						</div>
					</div>
				</div>
			</>
		);
	}
	}
 
export default ProjectpageTwo;
