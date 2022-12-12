import React from 'react'
import { Link } from "react-router-dom";

function WorkpageClientTwo(data) {
	console.log(data)
	let box = []
	for (let index = 0; index < data.data.length; index++) {
		if((index % 3 == 0) && (data.data[index + 2] && data.data[index + 1] && data.data[index])){
			let item = (          		
				<div className="container4 center" key={index}>
					<a href={"/client/" + data.data[index].id}><div className="boxWorkpage1"><p className="textDeco">{data.data[index].mission}</p><img src={"/images/imageclient/" + data.data[index].header} alt="" style={{ maxWidth: "100%", height: "auto"}}/></div></a>
					<a href={"/client/" + data.data[index + 1].id}><div className="boxWorkpage1"><p className="textDeco">{data.data[index + 1].mission}</p><img src={"/images/imageclient/" + data.data[index + 1].header} alt="" style={{ maxWidth: "100%", height: "auto"}}/></div></a>
					<a href={"/client/" + data.data[index + 2].id}><div className="boxWorkpage1"><p className="textDeco">{data.data[index + 2].mission}</p><img src={"/images/imageclient/" + data.data[index +2].header} alt="" style={{ maxWidth: "100%", height: "auto"}}/></div></a>
				</div>
		  	)
			box.push(item)
		}else{
			continue;
		}
		
	}

		return (
			<>
			
				<div className="" alt="action">
      		<div className="opacityBlue">
        		<div className="wrapper">



			{box}
          		{/* <div className="container4 center">
            		<a href=""><div className="boxWorkpage1"><p className="light">{data.data[0].projet}</p><img src={"/images/imageprojet/" + data.data[0].header} alt="" style={{ maxWidth: "100%", height: "auto"}}/></div></a>
            		<a href=""><div className="boxWorkpage1"></div></a>
            		<a href=""><div className="boxWorkpage1"></div></a>
          		</div> */}
				  <button className="btnL center light letterSpacingM">
							<Link to="/contact" className="textDeco">Voir plus</Link>
				</button>
          		
							{/* <div className="container center">
            		<div className="boxWorkpage1"></div>
            		<div className="boxWorkpage1"></div>
            		<div className="boxWorkpage1"></div>
          		</div> */}
        		</div>

      		</div>
    		</div>

			</>
		);
	}
 
export default WorkpageClientTwo;