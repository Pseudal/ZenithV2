import React, { useEffect, useState } from 'react'
import {motion, useAnimation} from "framer-motion"
import {useInview} from "react-inserction-observer"
import {useEffect} from "react "
import { defineHidden } from '@react-spring/shared';
import { Transition } from 'react-spring';
import { InView } from 'react-intersection-observer';
import "swiper/css";
import Swiper from 'swiper';
import { SwiperSlide } from 'swiper/react';



function Satisfaction() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);

  
/*function apparaitre texte 


const [text,textmove]= usestate("text")

const affichText= 
*/ 
//function utilisant use effect useinview
// TIRER DE CE SITE  //   https://blog.logrocket.com/react-scroll-animations-framer-motion/  //
/*
const variant =()=> {
visble: opacity:0 ,
 y: 0
 scale:1
Transition: {duration:0.5   }
hidden: { opacity:0,  y: 200           }

};*/

const Box = () =>{
const control=useAnimation();
const [ref,useInview] = useInview();
  
};

useEffect=() => {
if (InView) {
control.start("visible")

}

}




	// Remarque : le tableau vide de dépendances [] indique
	// que useEffect ne s’exécutera qu’une fois, un peu comme
	// componentDidMount()
	useEffect(() => {
	  fetch("/api/clients")
		.then(res => res.json())
		.then(
		  (result) => {
			setIsLoaded(true);
			setItems(result["hydra:member"]);
		  },
		  // Remarque : il faut gérer les erreurs ici plutôt que dans
		  // un bloc catch() afin que nous n’avalions pas les exceptions
		  // dues à de véritables bugs dans les composants.
		  (error) => {
			setIsLoaded(true);
			setError(error);
		  }
		)
	}, [])
  
	if (error) {
	  return <div>Erreur : {error.message}</div>;
	} else if (!isLoaded) {
	  return <div>Chargement...</div>;
	} else {
    console.log(items);

//motion.div senser demarrer animation l appliquer sur 1 ou les 3 blocs de DIV?
//   "-_-" \_______  <<0____0>>  _______/    A VOIR  ligne 99 
//ESSAYER 


		return (
      <div style={{backgroundImage: "url(/zenith/images/x9nes5V.jpg)"}} className="background">

      <video playsInline autoPlay muted loop>
					<source src="/zenith/video/videobg5.mp4" type="video/mp4"></source>
				</video>
      <div className="opacityBlue">
        <div className="wrapper2">


          <h1 className="titreA medium letterSpacing marginStop" data-aos="fade-up" data-aos-duration="1000">SATISFACTION</h1>
          <h6 className="titreCenter light letterSpacingS" data-aos="fade-up" data-aos-duration="1000">ÊTRE À VOS CÔTÉS, C’EST AVANT TOUT DES RENCONTRES.</h6>
          <h6 className="titreCenter light letterSpacingS paddingBottom" data-aos="fade-up" data-aos-duration="1000">DES HISTOIRES HUMAINES, EXCEPTIONNELLES, ORIGINALES.</h6>

<Swiper  
  
  slidesPerView={1}
  centeredSlides={true}
  spaceBetween={0}
  breakpoints={{
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  }}
>

          <div SwiperSlide
          className=  "containerMax center" data-aos="fade-up" data-aos-duration="1000">
            <div className="boxXS"><img src={"/images/logoclient/"+items[0]["logo"]} alt="" width={120} /></div>
            <div className="boxXS"><img src={"/images/logoclient/"+items[1]["logo"]} alt="" width={120} /></div>
            <div className="boxXS"><img src={"/images/logoclient/"+items[2]["logo"]} alt="" width={120} /></div>
            <div className="boxXS"></div>
            <div className="boxXS"></div>
            <div className="boxXS"></div>
            <div className="boxXS"></div>
            <div className="boxXS"></div>
            <div className="boxXS"></div>
            <div className="boxXS"></div>

          </div>  

          <div SwiperSlide
           className="containerMax center" data-aos="fade-up" data-aos-duration="1000">
            <div className="boxXS"></div>
            <div className="boxXS"></div>
            <div className="boxXS"></div>
            <div className="boxXS"></div>
            <div className="boxXS"></div>
            <div className="boxXS"></div>
            <div className="boxXS"></div>
            <div className="boxXS"></div>
            <div className="boxXS"></div>
            <div className="boxXS"></div>

          </div>

          <div SwiperSlide 
          className="containerMax center" data-aos="fade-up" data-aos-duration="1000">
            <div className="boxXS"></div>
            <div className="boxXS"></div>
            <div className="boxXS"></div>
            <div className="boxXS"></div>
            <div className="boxXS"></div>
            <div className="boxXS"></div>
            <div className="boxXS"></div>
            <div className="boxXS"></div>
            <div className="boxXS"></div>
            <div className="boxXS"></div>

          </div>
 </Swiper>       


          <h4 className="titreB light letterSpacing container center accroche marginBottom2" data-aos="fade-up" data-aos-duration="1000">LE RESTE ON L’ÉCRIRA ENSEMBLE</h4>

        </div>

      </div>
      </div>


			
		);
	}
}
 
export default Satisfaction;