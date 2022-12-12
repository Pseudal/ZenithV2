import React, { useState } from "react"
import "swiper/css";
import {useSpring,animated} from "react-spring"
import { set } from "core-js/core/dict";


//INTEGRATION FONCTION 
const wordpage = ({ text}) => {

const [key1,key2]= useState(1);

const scrollingxY=  useSpring({
from: {transform : ("translate (60%,0")         },
to:{ transform : ("translate (60%,0")        },
config: {duration :2000},
reset: true,

onRest: (   )=> {
key1(	key2 + 1)
}


})

//other fonction pour mouvement ligne inverse

const [text,mvtext]=useState(1)

const scrollingY=  useSpring({
	from: {transform : ("translate (-60%,0")         },
	to:{ transform : ("translate (-60%,0")        },
	config: {duration :2000},
	reset: true,
	
	onRest: (   )=> {
	test( mvtext + 1)
	}


})


		return (
			<>
			<div style={{backgroundImage: "url(/zenith/images/x9nes5V.jpg)"}} className="demibloc" alt="wordpage">

				<video playsInline autoPlay muted loop>
					<source src="/zenith/video/videobg4.mp4" type="video/mp4"></source>
				</video>
 
      	<div className="demibloc2" alt="Liste de mots">   
				<div className="parent">


        	<h1 className="wordpage light  grid1" id='wordpage'>RÉACTIVITÉ</h1>
					<h1 className=" margin medium wordpageText grid2">·</h1>
        	<h1 onMouseOver={scrollingxY} className="wordpage outline normal grid3">PROXIMITÉ</h1>
					<h1 className=" margin medium wordpageText grid4">·</h1>
        	<h1 onMouseOver={scrollingxY} className="wordpage light  grid5">PASSION</h1>
					<h1 className=" wordpageText  medium grid6">·</h1>
        	<h1 onMouseOver={scrollingxY} className="wordpage normal  grid7">STRATÉGIE</h1>

          <h1 onClick={toggleMo} className="wordpage normal  grid9">COMMUNICATION</h1>
					<h1 className=" wordpageText outline medium grid10">·</h1>
        	<h1 onMouseOver={scrollingY} className="wordpage marron normal  grid11">ZENITH</h1>
					<h1 className=" wordpageText outline medium grid12">·</h1>
        	<h1 onMouseOver={scrollingY} className="wordpage normal  grid13">CONSEIL</h1>
					<h1 className=" wordpageText medium grid14">·</h1>
        	<h1 onMouseOver={scrollingY} className="wordpage normal  grid15">EVENT</h1>
					
        	<h1 onMouseOver={scrollingxY} className="wordpage outline medium  grid17">CRÉATIVITÉ</h1>
					<h1 className=" wordpageText medium grid18">·</h1>
        	<h1 onMouseOver={scrollingxY} className="wordpage light  grid19">RÊVER</h1>
					<h1 className=" wordpageText medium grid20">·</h1>
        	<h1 onMouseOver={scrollingxY} className="wordpage light  grid21">AMBITION</h1>
					<h1 className=" wordpageText medium grid22">·</h1>
        	<h1 onMouseOver={scrollingxY} className="wordpage outline normal  grid23">IMAGINATION</h1> 
				</div>
      	</div> 

    	</div>
			</>
		);
	}

 
export default Wordpage;