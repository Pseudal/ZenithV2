import React, { useState } from "react"
import { Link, Outlet } from "react-router-dom";
import '../stylesheets/main.sass';
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

window.React = React

function Home() {


return (
  <>
	
	<Outlet />
	<Navbar></Navbar>
	<LinesTop></LinesTop>
	<LinesBottom></LinesBottom>
	<RsButton></RsButton>

	<div className="main">

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

	</div>
  
  </>
);
}

export default Home;
