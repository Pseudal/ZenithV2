import Navbar from '../_navbar';
import ProjectPageOne from "./_projectpageOne";
import ProjectpageTwo from './_projectpageTwo';
import ProjectpageThree from './_projectpageThree';
import ProjectpageFour from './_projectpageFour';
import ProjectpageFive from './_projectpageFive';
import ProjectpageSix from './_projectpageSix';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Projectpage() {
	const { id } = useParams();
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
	if(id){
		useEffect(() => {
			fetch(`/api/projets/${id}`,{method:'GET',headers:{Accept: 'application/json','Content-Type': 'application/json'}})
			.then(res => res.json())
			.then(
				(result) => {
				setIsLoaded(true);
				setItems(result);
				},
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components.
				(error) => {
				setIsLoaded(true);
				setError(error);
				}
			)

			fetch(`/getImagesProjet/${id}`,{method:'GET',headers:{Accept: 'application/json','Content-Type': 'application/json'}})
			.then(res => res.json())
			.then(
				(resultimg) => {
				let thisRes = JSON.parse(resultimg)
				setIsLoadedImg(true);
				setImages(JSON.parse(resultimg));
				if( thisRes == "[]" || thisRes.length == 0){
					setImgReady(true)
					return
				}
				if(thisRes){
					for(let i = 0; i < thisRes.length; i++){
						console.log(thisRes[i])
						console.log(i)
						if(thisRes[i].header)
							setHeader(thisRes[i])
						if(thisRes[i].focus)
							setPreci(thisRes[i])
						if(thisRes[i].secondaire)
							setSecond(thisRes[i])
						// if(images[i].visible)
						// 	setDisplay(...images[i])
						if(thisRes.length-1 == i){
							setImgReady(true)
						}
							
					}
				}
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

			fetch(`/NexPrevP/${id}`,{method:'GET',headers:{Accept: 'application/json','Content-Type': 'application/json'}})
			.then(res => res.json())
			.then(
				(result) => {
				let Next = JSON.parse(result[0])
				let Prev = JSON.parse(result[1])
				if(Next && Prev){
					setNextPrev([Next, Prev]);
					if(NextPrev){
						console.log(NextPrev)
						setIsLoadedNextPrev(true);
					}
				}
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
	}

	if (error) {
		 return <div>Error: {error.message}</div>;
	  } else if (!isLoaded || !isImgReady || !isLoadedNextPrev) {
		return <div>Loading...</div>;
	  } else {
			return ( 
				<>
				<Navbar></Navbar>

				
				<ProjectPageOne data={items}></ProjectPageOne>
				<ProjectpageTwo data={items}></ProjectpageTwo>
				<ProjectpageThree data={second}></ProjectpageThree>
				<ProjectpageFour preci={preci} data2={items}></ProjectpageFour>
				<ProjectpageFive></ProjectpageFive>
				<ProjectpageSix data={items} np={NextPrev}></ProjectpageSix>
				</>
			);
		}
	}
//
export default Projectpage;