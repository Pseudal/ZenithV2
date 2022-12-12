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
import { useParams } from "react-router-dom";


function Workpage() {
	const { nbr } = useParams();
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [isCountLoaded, setIsCountLoaded] = useState(false);
	const [isCatLoaded, setIsCatLoaded] = useState(false);
	const [isLoadedNextPrev, setIsLoadedNextPrev] = useState(false);
	const [isImgReady, setImgReady] = useState(false);
	const [items, setItems] = useState([]);
	const [cat, setCat] = useState([]);
	const [count, setCount] = useState([]);
		useEffect(() => {

			fetch(`/gettAllProject/${nbr}`,{method:'GET',headers:{Accept: 'application/json','Content-Type': 'application/json'}})
			.then(res => res.json())
			.then(
				(result) => {
				setItems(result);
				setIsLoaded(true);
				console.log(result);
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

			fetch(`/getCount/projet`,{method:'GET',headers:{Accept: 'application/json','Content-Type': 'application/json'}})
			.then(res => res.json())
			.then(
				(result) => {
				setCount(result);
				setIsCountLoaded(true);
				},
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components.
				(error) => {
				setIsCountLoaded(true);
				setError(error);
				console.log(error);
				}
			)
			fetch(`/api/categories`,{method:'GET',headers:{Accept: 'application/json','Content-Type': 'application/json'}})
			.then(res => res.json())
			.then(
				(result) => {
				setCat(result);
				setIsCatLoaded(true);
				},
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components.
				(error) => {
				setIsCountLoaded(true);
				setError(error);
				console.log(error);
				}
			)
		}, [])

	if (error) {
		 return <div>Error: {error.message}</div>;
	  } else if (!isLoaded || !isCountLoaded|| !isCatLoaded) {
		return <div>Loading...</div>;
	  } else {
			return (  
		<>
		<Navbar></Navbar>
		<RsButton></RsButton>
		<LinesTop></LinesTop>
		<LinesBottom></LinesBottom>
		
		<WorkpageOne cat={cat}></WorkpageOne>
		<WorkpageTwo data={items} page={nbr} count={count}></WorkpageTwo>
		{/* <WorkpageThree></WorkpageThree>
		<WorkpageFour></WorkpageFour>
		<WorkpageFive></WorkpageFive>
		<MiniFooter></MiniFooter> */}
		</>
	 );
}
}
export default Workpage;