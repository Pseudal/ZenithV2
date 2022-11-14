import React from 'react'
import { Link } from "react-router-dom";

function SearchPageTwo2(data) {
	console.log(data)
	let box = []
	for (let index = 0; index < data.data.length; index++) {
	let item = null;
		if(data.data[index][0] == "projet"){
			item = (<a key={index} href={"/projet/" + data.data[index].id}><div className="boxWorkpage1"><p className="textDeco">{data.data[index].mission}</p><img src={"/images/imageprojet/" + data.data[index].header} alt="" style={{ maxWidth: "100%", height: "auto"}}/></div></a>)
		}else{
			item = (<a key={index} href={"/client/" + data.data[index].id}><div className="boxWorkpage1"><p className="textDeco">{data.data[index].mission}</p><img src={"/images/client/" + data.data[index].header} alt="" style={{ maxWidth: "100%", height: "auto"}}/></div></a>)
		}
		box.push(item)
		
	}

	return (
		<>			
			<div className="" alt="action">
			<div className="opacityBlue">
				<div className="wrapper">


				{box}

        		</div>
      		</div>
    		</div>
		</>
	);
}
 
export default SearchPageTwo2;