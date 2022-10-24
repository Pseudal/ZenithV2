import WorkpageOne from "./_workpageOne";
import Navbar from '../_navbar';
import RsButton from '../_rsButton';
import LinesTop from '../_linesTop';
import LinesBottom from '../_linesBottom';
import WorkpageTwo from "./_workpageTwo";
import WorkpageThree from "./_workpageThree";
import WorkpageFour from "./_workpageFour";
import WorkpageFive from "./_workpageFive";
import MiniFooter from "../Homepage/_miniFooter";
import { useEffect, useState } from "react";


function Workpage() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [isLoadedImg, setIsLoadedImg] = useState(false);
	const [isLoadedNextPrev, setIsLoadedNextPrev] = useState(false);
	const [isImgReady, setImgReady] = useState(false);
	const [items, setItems] = useState([]);
	const [images, setImages] = useState([]);
	const [header, setHeader] = useState([]);
	const [preci, setPreci] = useState([]);
	const [second, setSecond] = useState([]);
	const [display, setDisplay] = useState([]);
	const [NextPrev, setNextPrev] = useState([]);
		useEffect(() => {

			fetch(`/gettAllProject/`,{method:'GET',headers:{Accept: 'application/json','Content-Type': 'application/json'}})
			.then(res => res.json())
			.then(
				(result) => {
				console.log(result)
				},
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components.
				(error) => {
				setIsLoaded(true);
				setError(error);
				console.log(error);
				}
			)
		}, [])

	if (error) {
		 return <div>Error: {error.message}</div>;
	  } else if (!isLoaded && !isImgReady && !isLoadedNextPrev) {
		return <div>Loading...</div>;
	  } else {
			return (  
		<>
		<Navbar></Navbar>
		<RsButton></RsButton>
		<LinesTop></LinesTop>
		<LinesBottom></LinesBottom>
		
		<WorkpageOne></WorkpageOne>
		<WorkpageTwo></WorkpageTwo>
		<WorkpageThree></WorkpageThree>
		<WorkpageFour></WorkpageFour>
		<WorkpageFive></WorkpageFive>
		<MiniFooter></MiniFooter>
		</>
	 );
}
}
export default Workpage;