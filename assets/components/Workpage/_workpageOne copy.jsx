import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import { Button, Menu, MenuItem } from '@mui/material';

function WorkpageOne(cat) {
	const [words, setWords] = useState([]);
	let category = cat.cat
	let menu = []
	let randomWord = ["RÉACTIVITÉ", "PROXIMITÉ", "PASSION", "STRATÉGIE", "EVENT", "CONSEIL", "COMMUNICATION", "RÊVER", "AMBITION", "IMAGINATION", "agir", "s'adapter", "anticiper", "autonomie", "croissance", "défi", "planifier", "positiver", "disponibilité", "dynamisme", "écoute", "service", "prévision"
	, "ténacité", "qualité", "mobiliser", "négocier", "objectifs", "optimiser", "challenge", "réussir", "excellence", "réaliser", "résultats", "développer", "savoirfaire", "dialogue", "prévoir", "synergie", "projet", "innovation", "motivation"]
	
	useEffect(() => {
		function getWord (){
			let word = randomWord[Math.floor(Math.random()*randomWord.length)]
			randomWord.splice(randomWord.indexOf(word))
			return word
		}
		
		let word1 = getWord()
		let word2 = getWord()
		setWords([word1, word2])
	}, []);

	AOS.init()
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleTeleport = (id, name) => {
		document.location = `/searchcat/${id}/${name}`
	};
	
	category.forEach(element => {
		let menuItem = (<MenuItem key={element.id} sx={{color: 'white'}} onClick={()=> {handleTeleport(element.id, element.categorie)}}>{element.categorie}</MenuItem>)
		menu.push(menuItem)
	});
	if(words.length > 0){

		return (
			<>


			<div className="background1" alt="homepage">

			<video playsInline autoPlay muted loop>
				<source src="/zenith/video/videobg.mp4" type="video/mp4"></source>
			</video>

				<div className="opacityBlue">
					<div className="wrapper">
						<div className="container center2">
			
						<div className="containerCenter" data-aos="fade-up">
							<Link to="/">
								<img src="/zenith/images/bIO1r9F.png" alt="Logo" width={200} className="center" />
							</Link>	
						</div>

						<div className="workpageText" data-aos="fade-up">
							<h1 className="medium">SÉLÉCTION DE PROJET</h1>
							<div className="columns" style={{float: 'right', marginRight:"10px"}}>
									<p style={{textTransform: "uppercase"}}className="light">{words[0]} . {words[1]} . </p>
									<p	className="light"
									style={{cursor:"pointer"}}
										id="demo-positioned-button"
										aria-controls={open ? 'demo-positioned-menu' : undefined}
										aria-haspopup="true"
										aria-expanded={open ? 'true' : undefined}
										onClick={handleClick}
									>&nbsp;CATEGORIE</p>
							</div>
							<Menu
								PaperProps={{
									style: {
										maxHeight: 48 * 4.5,
										width: '20ch',
										backgroundImage:"linear-gradient(rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12))",
										backgroundColor:"rgb(18, 18, 18)"
									},
									}}
								id="demo-positioned-menu"
								aria-labelledby="demo-positioned-button"
								anchorEl={anchorEl}
								open={open}
								onClose={handleClose}
								anchorOrigin={{
								vertical: 'top',
								horizontal: 'center',
								}}
								transformOrigin={{
								vertical: 'top',
								horizontal: 'center',
								}}
							>
								{menu}
							</Menu>
						</div>

						</div>

						
					</div>
				</div>
			</div>

			</>
		);
	}
	}
 
export default WorkpageOne;



