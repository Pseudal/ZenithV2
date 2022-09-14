import React, { useEffect, useState } from 'react'

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
			<div className="background" alt="satisfaction">
      <div className="opacityBlue">
        <div className="wrapper2">


          <h1 className="titreA medium letterSpacing marginStop">SATISFACTION</h1>
          <h6 className="titreCenter light letterSpacingS">ÊTRE À VOS CÔTÉS, C’EST AVANT TOUT DES RENCONTRES.</h6>
          <h6 className="titreCenter light letterSpacingS paddingBottom">DES HISTOIRES HUMAINES, EXCEPTIONNELLES, ORIGINALES.</h6>
          
          <div className="containerMax center">
            <div className="boxXS"><img src={"/images/logoclient/"+items[0]["logo"]} alt="" width={120} /></div>
            <div className="boxXS"><img src={"/images/logoclient/"+items[1]["logo"]} alt="" width={120} /></div>
            <div className="boxXS"><img src={"/images/logoclient/"+items[2]["logo"]} alt="" width={120} /></div>
            <div className="boxXS"></div>
            <div className="boxXS"></div>
            <div className="boxXS"></div>
            <div className="boxXS"></div>
            <div className="boxXS"></div>
            <div className="boxXS"></div>
            <div className="boxXS"></div>
          </div>

          <div className="containerMax center">
            <div className="boxXS"></div>
            <div className="boxXS"></div>
            <div className="boxXS"></div>
            <div className="boxXS"></div>
            <div className="boxXS"></div>
            <div className="boxXS"></div>
            <div className="boxXS"></div>
            <div className="boxXS"></div>
            <div className="boxXS"></div>
            <div className="boxXS"></div>

          </div>

          <div className="containerMax center">
            <div className="boxXS"></div>
            <div className="boxXS"></div>
            <div className="boxXS"></div>
            <div className="boxXS"></div>
            <div className="boxXS"></div>
            <div className="boxXS"></div>
            <div className="boxXS"></div>
            <div className="boxXS"></div>
            <div className="boxXS"></div>
            <div className="boxXS"></div>

          </div>
        


          <h4 className="titreB light letterSpacing container center accroche marginBottom2">LE RESTE ON L’ÉCRIRA ENSEMBLE</h4>

        </div>

      </div>
    </div>


			</>
		);
	}
}
 
export default Satisfaction;