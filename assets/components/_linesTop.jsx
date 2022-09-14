function LinesTop() {
	let audio = new Audio("/zenith/autre/Horizon.mp3")

	const start = () => {
	  audio.play()
	}
	return ( 
		<>
			<div className="lineA"  data-aos="fade-down">
				<div className="line2"onClick={start}></div>
				<div className="line3 lineAnime" ></div>
			</div>
		</>
	 );
}

export default LinesTop;