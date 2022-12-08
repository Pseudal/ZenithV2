import React, { useEffect, useRef, useState } from "react"
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

//import scrollIntoView from 'scroll-into-view-if-needed'
import Homepage from './Homepage/_homepage';
import Wordpage from './Homepage/_word';
import Emotion from './Homepage/_emotion';
import Action from './Homepage/_action';
import Creation from './Homepage/_creation';
import Satisfaction from './Homepage/_satisfaction';
import Chiffres from './Homepage/_chiffres';
import Vision from './Homepage/_vision';
import Footer from './Homepage/_footer';
import Instaflux from './Homepage/_insta';
import Navbar from './_navbar';
import RsButton from './_rsButton';
import LinesTop from './_linesTop';
import LinesBottom from './_linesBottom';
import { Parallax } from 'react-parallax';
import AOS from 'aos';
import 'aos/dist/aos.css';



function Home() {
	const [items, setItems] = useState([]);
	const [insta, setInsta] = useState([]);
	useEffect(() => {
		fetch(`/gettAllCreation`,{method:'GET',headers:{Accept: 'application/json','Content-Type': 'application/json'}})
		.then(res => res.json())
		.then(
		  (result) => {
			console.log(result);
			setItems(result)
		  },
		  // Note: it's important to handle errors here
		  // instead of a catch() block so that we don't swallow
		  // exceptions from actual bugs in components.
		  (error) => {
			console.log(error)
		  }
		)

		// fetch(`https://www.instagram.com/agencezenith/?__a=1?__a=1&__d=dis`,{method:'GET',})
		// .then(res => res.json())
		// .then((resultInsta) => {
		// 	console.log("toto")
		// 	console.log(resultInsta)
		//   },
		//   // Note: it's important to handle errors here
		//   // instead of a catch() block so that we don't swallow
		//   // exceptions from actual bugs in components.
		//   (error) => {
		// 	console.log(error)
		//   }
		// )
	  }, [])

	// let step = 1

	// AOS.init()
	// let scroll = false
	// if(step == 4){
	// 	document.querySelector('.patchnaze').style.paddingTop = '0px'
	// }

	//  var lastScrollTop = 0;

	// // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
	// window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
	// var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
	// if (st > lastScrollTop && scroll == false && step < 9){
	// 	console.log(step + " down")
		

	// 	 step++
	// 	scroller.scrollTo(`scroll-to-element${step}`, {
	// 		duration: 800,
	// 		delay: 0,
	// 		smooth: 'easeInOutQuart'
	// 	  }) 
		  
	// 	 scroll = true
	// 	setTimeout(() => {
	// 		scroll = false
	// 	}, 1000);
	// } else if(st < lastScrollTop && scroll == false && step > 1){

	// 	step--
	// 	scroller.scrollTo(`scroll-to-element${step}`, {
	// 		duration: 800,
	// 		delay: 0,
	// 		smooth: 'easeInOutQuart'
	// 	})
		  
	// 	 console.log(step + " up")
		 
	// 	 scroll = true
	// 	 setTimeout(() => {
	// 		scroll = false
	// 	 }, 1000);
	// }
	// lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
	// }, false);

	if(items){
		return (
			<>
			<Navbar></Navbar>
			<LinesTop></LinesTop>
			<LinesBottom></LinesBottom>
			<RsButton></RsButton>
			

				<Element name="scroll-to-element1" className="element">			

					<Homepage ></Homepage>
					
				</Element>	

				{/* <div style={{width:"100%", height:"50px", backgroundColor:"white"}}></div> */}
				<Wordpage ></Wordpage>
				{/* <div style={{width:"100%", height:"50px", backgroundColor:"white"}}></div> */}



				<Element name="scroll-to-element3" className="element">

					<Emotion ></Emotion>

				</Element>


				<Element name="scroll-to-element4" className="element">
					<Action ></Action>
				</Element>

				<Element name="scroll-to-element5" className="element">

					<Creation item={items}></Creation>

				</Element>

				<Element name="scroll-to-element6" className="element">

					<Satisfaction ></Satisfaction>

				</Element>

				<Element name="scroll-to-element7" className="element">

						<Chiffres ></Chiffres>
						
				</Element>

				<Element name="scroll-to-element8" className="element">

					<Vision ></Vision>

				</Element>

				<Element name="scroll-to-element8" className="element">

						<Instaflux ></Instaflux>

				</Element>



				<Footer ></Footer>


			{/* <Element name="scroll-to-element10" className="element"></Element> */}
			</>
		);		
	}

}
export default Home;
