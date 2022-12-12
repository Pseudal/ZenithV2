import SearchPageOne from "./_SearchPageOne";
import Navbar from '../_navbar';
import RsButton from '../_rsButton';
import LinesTop from '../_linesTop';
import LinesBottom from '../_linesBottom';
import SearchPageTwo from "./_SearchPageTwo";
import MiniFooter from "../Homepage/_miniFooter";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function SearchPage() {
	const { info } = useParams();
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
			console.log(info)
			fetch(`/getSearch/${info}`,{method:'GET',headers:{Accept: 'application/json','Content-Type': 'application/json'}})
			.then(res => res.json())
			.then(
				(result) => {
				setItems(result);
				console.log(result);
				setIsLoaded(true);
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
	  } else if (!isLoaded ) {
		return <div>dbfgbfg...</div>;
	  } else {
			return (  
		<>
		<Navbar></Navbar>
		<RsButton></RsButton>
		<LinesTop></LinesTop>
		<LinesBottom></LinesBottom>
		
		<SearchPageOne data = {info}></SearchPageOne>
		<SearchPageTwo data={items}></SearchPageTwo>
		{/* <WorkpageThree></WorkpageThree>
		<WorkpageFour></WorkpageFour>
		<WorkpageFive></WorkpageFive>*/}
		<MiniFooter></MiniFooter> 
		</>
	 );
}
}
export default SearchPage;