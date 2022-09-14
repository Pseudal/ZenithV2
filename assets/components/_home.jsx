import React from "react"

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
	return (
		<>
		<Navbar></Navbar>
		<LinesTop></LinesTop>
		<LinesBottom></LinesBottom>
		<RsButton></RsButton>

		<Homepage></Homepage>
		<Wordpage></Wordpage>
		<Emotion></Emotion>
		<Action></Action>
		<Creation></Creation>
		<Satisfaction></Satisfaction>
		<Chiffres></Chiffres>      
		<Vision></Vision>
		<Instaflux></Instaflux>
		<Footer></Footer>
		</>
	);
}
export default Home;
