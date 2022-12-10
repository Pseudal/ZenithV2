import React, { useEffect, useState } from 'react'
import { Parallax } from 'react-parallax';

function Satisfaction() {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);
  
	// Remarque : le tableau vide de dépendances [] indique
	// que useEffect ne s’exécutera qu’une fois, un peu comme
	// componentDidMount()
	useEffect(() => {
	  fetch("/api/clients")
		.then(res => res.json())
		.then(
		  (result) => {
			setIsLoaded(true);
			setItems(result["hydra:member"]);
		  },
		  // Remarque : il faut gérer les erreurs ici plutôt que dans
		  // un bloc catch() afin que nous n’avalions pas les exceptions
		  // dues à de véritables bugs dans les composants.
		  (error) => {
			setIsLoaded(true);
			setError(error);
		  }
		)
	}, [])
  
	if (error) {
	  return <div>Erreur : {error.message}</div>;
	} else if (!isLoaded) {
	  return <div>Chargement...</div>;
	} else {
    console.log(items);
		return (
			<>
      {/* <div style={{backgroundImage: "url(/zenith/images/x9nes5V.jpg)"}} className="background">

      <video playsInline autoPlay muted loop>
					<source src="/zenith/video/videobg5.mp4" type="video/mp4"></source>
				</video> */}
      <Parallax bgImage="/zenith/images/aWELhk8A.jpeg" blur={{ min: -1, max: 3 }} strength={0}>

      <div className="" style={{paddingTop: '60px'}}>
        <div>
        <div className="wrapper2">


          <h1 className="titreA medium letterSpacing marginStop" data-aos="fade-up" data-aos-duration="1000">SATISFACTION</h1>
          <h6 className="titreCenter light letterSpacingS" data-aos="fade-up" data-aos-duration="1000">ÊTRE À VOS CÔTÉS, C’EST AVANT TOUT DES RENCONTRES.</h6>
          <h6 className="titreCenter light letterSpacingS paddingBottom" data-aos="fade-up" data-aos-duration="1000">DES HISTOIRES HUMAINES, EXCEPTIONNELLES, ORIGINALES.</h6>
          
          <div className="containerMax center">
            <div data-aos="fade-up" data-aos-once="false" data-aos-duration="1000" style={{marginLeft:"88px"}} className="boxXS"><img src={"/images/logoclient/"+items[0]["logo"]} alt="" width={70} /></div>
            <div data-aos="fade-up" data-aos-once="false" data-aos-duration="1000" className="boxXS"><img src={"/zenith/icons/0afdc7_2b72e82a682746918e15d9f67e937eb7~mv2.png"} alt="" width={70} /></div>
            <div data-aos="fade-up" data-aos-once="false" data-aos-duration="1000" className="boxXS"><img src={"/zenith/icons/0afdc7_4c75fd3f519e4220bb582d77c8aa7c82~mv2.png"} alt="" width={70} /></div>
            <div data-aos="fade-up" data-aos-once="false" data-aos-duration="1000" className="boxXS"><img src={"/zenith/icons/0afdc7_4d7257924ac5485fa6eb9f8c3ba8c3f2~mv2.png"} alt="" width={70} /></div>
            <div data-aos="fade-up" data-aos-once="false" data-aos-duration="1000" className="boxXS"><img src={"/zenith/icons/0afdc7_64a6409454d14d52850cd6724850555b~mv2.png"} alt="" width={70} /></div>
            <div data-aos="fade-up" data-aos-once="false" data-aos-duration="1000" className="boxXS"><img src={"/zenith/icons/0afdc7_420abce0c47d4d7e9e7d2166305ea6be~mv2.png"} alt="" width={70} /></div>
            <div data-aos="fade-up" data-aos-once="false" data-aos-duration="1000" className="boxXS"><img src={"/images/logoclient/"+items[1]["logo"]} alt="" width={70} /></div>
            <div data-aos="fade-up" data-aos-once="false" data-aos-duration="1000" className="boxXS"><img src={"/images/logoclient/"+items[2]["logo"]} alt="" width={70} /></div>
            <div data-aos="fade-up" data-aos-once="false" data-aos-duration="1000" className="boxXS"><img src={"/images/logoclient/"+items[0]["logo"]} alt="" width={70} /></div>
            <div data-aos="fade-up" data-aos-once="false" data-aos-duration="1000" style={{marginRight:"88px"}} className="boxXS"><img src={"/images/logoclient/"+items[0]["logo"]} alt="" width={70} /></div>
          </div>

          <div className="containerMax center">
            <div data-aos="fade-up" data-aos-once="false" data-aos-duration="1500" style={{marginLeft:"88px"}} className="boxXS"><img src={"/images/logoclient/"+items[0]["logo"]} alt="" width={70} /></div>
            <div data-aos="fade-up" data-aos-once="false" data-aos-duration="1500" className="boxXS"><img src={"/images/logoclient/"+items[1]["logo"]} alt="" width={70} /></div>
            <div data-aos="fade-up" data-aos-once="false" data-aos-duration="1500" className="boxXS"><img src={"/images/logoclient/"+items[2]["logo"]} alt="" width={70} /></div>
            <div data-aos="fade-up" data-aos-once="false" data-aos-duration="1500" className="boxXS"><img src={"/images/logoclient/"+items[0]["logo"]} alt="" width={70} /></div>
            <div data-aos="fade-up" data-aos-once="false" data-aos-duration="1500" className="boxXS"><img src={"/images/logoclient/"+items[1]["logo"]} alt="" width={70} /></div>
            <div data-aos="fade-up" data-aos-once="false" data-aos-duration="1500" className="boxXS"><img src={"/images/logoclient/"+items[0]["logo"]} alt="" width={70} /></div>
            <div data-aos="fade-up" data-aos-once="false" data-aos-duration="1500" className="boxXS"><img src={"/images/logoclient/"+items[1]["logo"]} alt="" width={70} /></div>
            <div data-aos="fade-up" data-aos-once="false" data-aos-duration="1500" className="boxXS"><img src={"/images/logoclient/"+items[2]["logo"]} alt="" width={70} /></div>
            <div data-aos="fade-up" data-aos-once="false" data-aos-duration="1500" className="boxXS"><img src={"/images/logoclient/"+items[0]["logo"]} alt="" width={70} /></div>
            <div data-aos="fade-up" data-aos-once="false" data-aos-duration="1500" style={{marginRight:"88px"}} className="boxXS"><img src={"/images/logoclient/"+items[0]["logo"]} alt="" width={70} /></div>
          </div>

          <div className="containerMax center">
            <div data-aos="fade-up" data-aos-once="false" data-aos-duration="2000" style={{marginLeft:"88px"}} className="boxXS"><img src={"/images/logoclient/"+items[0]["logo"]} alt="" width={70} /></div>
            <div data-aos="fade-up" data-aos-once="false" data-aos-duration="2000" className="boxXS"><img src={"/images/logoclient/"+items[1]["logo"]} alt="" width={70} /></div>
            <div data-aos="fade-up" data-aos-once="false" data-aos-duration="2000" className="boxXS"><img src={"/images/logoclient/"+items[2]["logo"]} alt="" width={70} /></div>
            <div data-aos="fade-up" data-aos-once="false" data-aos-duration="2000" className="boxXS"><img src={"/images/logoclient/"+items[0]["logo"]} alt="" width={70} /></div>
            <div data-aos="fade-up" data-aos-once="false" data-aos-duration="2000" className="boxXS"><img src={"/images/logoclient/"+items[1]["logo"]} alt="" width={70} /></div>
            <div data-aos="fade-up" data-aos-once="false" data-aos-duration="2000" className="boxXS"><img src={"/images/logoclient/"+items[2]["logo"]} alt="" width={70} /></div>
            <div data-aos="fade-up" data-aos-once="false" data-aos-duration="2000" className="boxXS"><img src={"/images/logoclient/"+items[1]["logo"]} alt="" width={70} /></div>
            <div data-aos="fade-up" data-aos-once="false" data-aos-duration="2000" className="boxXS"><img src={"/images/logoclient/"+items[2]["logo"]} alt="" width={70} /></div>
            <div data-aos="fade-up" data-aos-once="false" data-aos-duration="2000" className="boxXS"><img src={"/images/logoclient/"+items[0]["logo"]} alt="" width={70} /></div>
            <div data-aos="fade-up" data-aos-once="false" data-aos-duration="2000" style={{marginRight:"88px"}} className="boxXS"><img src={"/images/logoclient/"+items[0]["logo"]} alt="" width={70} /></div>

          </div>
        


          <h4 className="titreB light letterSpacing container center accroche marginBottom2" data-aos="fade-up" data-aos-duration="1000">LE RESTE ON L’ÉCRIRA ENSEMBLE</h4>

        </div>

      </div>
      </div>
      </Parallax>

			</>
		);
	}
}
 
export default Satisfaction;