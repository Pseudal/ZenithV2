import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";


function ClientpageFive() {
	AOS.init()
		return (
			<>
			<div className="background">
				<div className='opacityBlue'>
					<div className='wrapper'>
						<div className='parentClientView'>
							<div className='clientGridView1'>
							<div className='boxFlex'></div>
							</div>
							<div className='clientGridView2'>
							<div className='boxFlex'></div>

							</div>
							<div className='clientGridView3'>
							<div className='boxFlex'></div>

							</div>
							<div className='clientGridView4'>
							<div className='boxFlex'></div>

							</div>
						</div>
					</div>
				</div>
			</div>




			</>
		);
	}
 
export default ClientpageFive;