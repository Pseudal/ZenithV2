import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";


function ClientpageSix({data, np}) {
	AOS.init()
	if(np[0]){
		if(np[0][0] == 'null')
			np[0][0] = false;
		if(np[0][1] == 'null')
			np[1][0] = false;

		return (
			<>

					<div className='demiblocOpacity'>
						<div className='containerCenter marginTopS'>
						<h4 className='medium centerText'>UN TÉMOIGNAGE</h4>
						<div className='light centerText' dangerouslySetInnerHTML={{__html:data.temoignage}}></div>
						</div>
					</div>


				<div style={{backgroundImage: "url(/zenith/images/x9nes5V.jpg)"}} className='demiblocClient'>
					<div className='demiblocOpacity'>
						<div className='parentClientNextPrev'>

							{np[1][0] &&
								<div className='ClientNextPrev1' onClick={()=>{location.href = "/client/"+ np[1][0].id}}>
									<h6 className='light rightText marginTopS'>PROJET PRÉCÉDENT</h6>
									<h5 className='rightText'>{np[1][0].nomClient}</h5>
									<h6 className='light rightText'>{np[1][0].mission}</h6>
								</div>}

							{np[0][0] && <div className='ClientNextPrev2' onClick={()=>{location.href = "/client/"+ np[0][0].id}}>
									<h6 className='light leftText marginTopS'>PROJET SUIVANT</h6>
									<h5 className='leftText'>{np[0][0].nomClient}</h5>
									<h6 className='light leftText'>{np[0][0].mission}</h6>
								</div>}
							{/* <a href={"/client/"+np[1][0].id}> */}
								
						</div>

					</div>
				</div>



			</>
		);
	}
}
export default ClientpageSix;