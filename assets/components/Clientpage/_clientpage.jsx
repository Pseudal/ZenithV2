import Navbar from '../_navbar';
import ClientPageOne from "./_clientpageOne";
import ClientpageTwo from './_clientpageTwo';
import ClientpageThree from './_clientpageThree';
import ClientpageFour from './_clientpageFour';
import ClientpageFive from './_clientpageFive';
import ClientpageSix from './_clientpageSix';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Clientpage() {
	const { id } = useParams();
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [isLoadedImg, setIsLoadedImg] = useState(false);
	const [isImgReady, setImgReady] = useState(false);
	const [items, setItems] = useState([]);
	const [images, setImages] = useState([]);
	const [header, setHeader] = useState([]);
	const [preci, setPreci] = useState([]);
	const [second, setSecond] = useState([]);
	const [display, setDisplay] = useState([]);

	if(id){
		useEffect(() => {
			fetch(`/api/clients/${id}`)
			.then(res => res.json())
			.then(
				(result) => {
				setIsLoaded(true);
				setItems(result);
				console.log(result);
				},
				// Note: it's important to handle errors here
				// instead of a catch() block so that we don't swallow
				// exceptions from actual bugs in components.
				(error) => {
				setIsLoaded(true);
				setError(error);
				}
			)
		}, [])
		useEffect(() => {
			fetch(`/getImagesClient/${id}`)
			.then(res => res.json())
			.then(
				(result) => {
				let thisRes = JSON.parse(result)
				setIsLoadedImg(true);
				setImages(JSON.parse(result));
				if(thisRes){
					for(let i = 0; i < Object.keys(thisRes).length; i++){
						if(thisRes[i].header)
							setHeader(thisRes[i])
						if(thisRes[i].imageprecision)
							setPreci(thisRes[i])
						if(thisRes[i].secondaire)
							setSecond(thisRes[i])
						// if(images[i].visible)
						// 	setDisplay(...images[i])
						if(Object.keys(thisRes).length-1 == i)
							setImgReady(true)
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
	  } else if (!isLoaded || !isImgReady) {
		return <div>Loading...</div>;
	  } else {
			return ( 
				<>
				<Navbar></Navbar>
				<ClientPageOne data={items}></ClientPageOne>
				<ClientpageTwo data={items}></ClientpageTwo>
				<ClientpageThree data={second}></ClientpageThree>
				<ClientpageFour></ClientpageFour>
				<ClientpageFive></ClientpageFive>
				<ClientpageSix></ClientpageSix>
				</>
			);
		}
	}

export default Clientpage;