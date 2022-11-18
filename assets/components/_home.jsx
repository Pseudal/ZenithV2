import React, { useRef } from "react"
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



function Home() {
	let scroll = false
	let step =1
	// let node = document.getElementById('home1')

	// function scrollTo(ref) {
	// 	ref.scrollIntoView({ behavior: "smooth" });
	// 	setTimeout(() => {
	// 		scroll = false
	// 	}, 1000);
	//   }
	 var lastScrollTop = 0;

	// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
	window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
	var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
	if (st > lastScrollTop && scroll == false && step < 10){
		console.log(step + " down")
		

		 step++
		scroller.scrollTo(`scroll-to-element${step}`, {
			duration: 800,
			delay: 0,
			smooth: 'easeInOutQuart'
		  }) 
		  
		 scroll = true
		setTimeout(() => {
			scroll = false
		}, 801);
	} else if(st < lastScrollTop && scroll == false && step > 1){

		step--
		scroller.scrollTo(`scroll-to-element${step}`, {
			duration: 800,
			delay: 0,
			smooth: 'easeInOutQuart'
		})
		  
		 console.log(step + " up")
		 
		 scroll = true
		 setTimeout(() => {
			scroll = false
		 }, 801);
		// scrollTo(window['ref'+step])
	}
	lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
	}, false);

	return (
		<>
		<Navbar></Navbar>
		<LinesTop></LinesTop>
		<LinesBottom></LinesBottom>
		<RsButton></RsButton>

		<Element name="scroll-to-element1" className="element"><Homepage ></Homepage></Element>
		<Element name="scroll-to-element2" className="element"><Wordpage ></Wordpage></Element>
		<Element name="scroll-to-element3" className="element"><Emotion ></Emotion></Element>
		<Element name="scroll-to-element4" className="element"><Action ></Action></Element>
		<Element name="scroll-to-element5" className="element"><Creation ></Creation></Element>
		<Element name="scroll-to-element6" className="element"><Satisfaction ></Satisfaction></Element>
		<Element name="scroll-to-element7" className="element"><Chiffres ></Chiffres> </Element>     
		<Element name="scroll-to-element8" className="element"><Vision ></Vision></Element>
		<Element name="scroll-to-element9" className="element"><Instaflux ></Instaflux></Element>
		<Element name="scroll-to-element10" className="element"><Footer ></Footer></Element>
		</>
	);
}
export default Home;
