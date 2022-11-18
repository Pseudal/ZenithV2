import React from "react"
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
	// let ref1 = React.useRef<HTMLInputElement>(null);
	// let ref2 = React.useRef<HTMLInputElement>(null);
	// let ref3 = React.useRef<HTMLInputElement>(null);
	// let ref4 = React.useRef<HTMLInputElement>(null);
	// let ref5 = React.useRef<HTMLInputElement>(null);
	// let ref6 = React.useRef<HTMLInputElement>(null);
	// let ref7 = React.useRef<HTMLInputElement>(null);
	// let ref8 = React.useRef<HTMLInputElement>(null);
	// let ref9 = React.useRef<HTMLInputElement>(null);
	// let ref10 = React.useRef<HTMLInputElement>(null);
	// let scroll = false
	// let step =1
	// // let node = document.getElementById('home1')

	// function scrollTo(ref) {
	// 	ref.scrollIntoView({ behavior: "smooth" });
	// 	setTimeout(() => {
	// 		scroll = false
	// 	}, 1000);
	//   }
	// var lastScrollTop = 0;

	// // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
	// window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
	// var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
	// if (st > lastScrollTop && scroll == false){
	// 	scroll = true
	// 	console.log(step)
	// 	step--
	// 	scrollTo(window['ref'-step])
	// } else if(st < lastScrollTop && scroll == false){
	// 	scroll = true
	// 	console.log(step)
	// 	step++
	// 	scrollTo(window['ref'+step])
	// }
	// lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
	// }, false);

	return (
		<>
		<Navbar></Navbar>
		<LinesTop></LinesTop>
		<LinesBottom></LinesBottom>
		<RsButton></RsButton>

		<Homepage ref={ref1}></Homepage>
		<Wordpage ref={ref2}></Wordpage>
		<Emotion ref={ref3}></Emotion>
		<Action ref={ref4}></Action>
		<Creation ref={ref5}></Creation>
		<Satisfaction ref={ref6}></Satisfaction>
		<Chiffres ref={ref7}></Chiffres>      
		<Vision ref={ref8}></Vision>
		<Instaflux ref={ref9}></Instaflux>
		<Footer ref={ref10}></Footer>
		</>
	);
}
export default Home;
