import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";


function ClientpageTwo(data) {
	AOS.init()
	if(data.data.enjeu || data.data.histoire || data.data.reponse){
		return (
			<>
				<div style={{backgroundImage: "url(/zenith/images/x9nes5V.jpg)"}} className='demiblocClient'>
					<div className='demiblocClientOpacity'>
						<div className='parentClient'>
							{data.data.enjeu &&
							<div className='clientGrid1'>
								<h4 className='light'>UNE ENJEU</h4>
								<div className='light containerCenterClient' dangerouslySetInnerHTML={{__html:data.data.enjeu}}></div>
							</div> 
							}

							{data.data.histoire &&
							<div className='clientGrid2'>
								<h4 className='light'>UNE HISTOIRE</h4>
								<div className='light containerCenterClient' dangerouslySetInnerHTML={{__html:data.data.histoire}}></div>
							</div>
							}

							{data.data.reponse &&
							<div className='clientGrid3'>
								<h4 className='light'>UNE REPONSE</h4>
								<div className='light containerCenterClient' dangerouslySetInnerHTML={{__html:data.data.reponse}}></div>
							</div>
							}

						</div>
					</div>
				</div>
			</>
		);
	}
}
export default ClientpageTwo;
