import React, { useEffect, useState } from 'react'

function Chiffres() {

	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);
  
	// Remarque : le tableau vide de dépendances [] indique
	// que useEffect ne s’exécutera qu’une fois, un peu comme
	// componentDidMount()
	useEffect(() => {
	  fetch("/api/chiffres/1}")
		.then(res => res.json())
		.then(
		  (result) => {
			setIsLoaded(true);
			setItems(result);
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
	console.log(items)

	return (
		<>
			<div className="demibloc" alt="chiffres">
				<div className="demibloc2">
					<div className="background3">


						<div className="parent2">

						<div className="div1">
						<h1 className="medium chiffres">2016</h1>
						<h5 className="light chiffres2">ANNÉE DE CREATION</h5>
						</div>
						<div className="div2">
						<h1 className="medium chiffres">{items["photo"]}</h1>
						<h5 className="light chiffres2">CRÉATIONS PHOTOS</h5>
						</div>
						<div className="div3">
						<h1 className="medium chiffres">{items["collab"]}</h1>
						<h5 className="light chiffres2">NOMBRES DE COLLABORATEUR</h5>
						</div>
						<div className="div4">
						<h1 className="medium chiffres">{items["video"]}</h1>
						<h5 className="light chiffres2">RÉALISATIONS VIDÉOS</h5>
						</div>
						<div className="div5">
						<h1 className="medium chiffres">{items["digital"]}</h1>
						<h5 className="light chiffres2">CRÉATIONS DIGITALES </h5>
						</div>
						<div className="div6">
						<h1 className="medium chiffres">100%</h1>
						<h5 className="light chiffres2">MADE IN FRANCE</h5>
						</div>
						</div>
					</div>
				</div>
			</div>


			</>
		);
	}
}
export default Chiffres;