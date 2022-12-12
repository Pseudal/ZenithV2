import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function RsButton() {
	AOS.init({once: true,});
	return (
		<>
		<div className="rs aos-item overflowHidden" data-aos="fade-up" data-aos-duration="1200">
			<a className="fb" href='https://www.facebook.com/AGENCEZENITH/'></a>
			<a className="insta" href='https://www.instagram.com/agencezenith/?hl=fr'></a>
			<a className="linkedin" href='https://www.linkedin.com/company/agence-zenith/'></a>
		</div>
		</> 
		);
}

export default RsButton;