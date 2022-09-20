import Navbar from '../_navbar';
import ProjectPageOne from "./_projectpageOne";
import ProjectpageTwo from './_projectpageTwo';
import ProjectpageThree from './_projectpageThree';
import ProjectpageFour from './_projectpageFour';
import ProjectpageFive from './_projectpageFive';
import ProjectpageSix from './_projectpageSix';


function Projectpage() {
	return ( 
		<>
		<Navbar></Navbar>

		
		<ProjectPageOne></ProjectPageOne>
		<ProjectpageTwo></ProjectpageTwo>
		<ProjectpageThree></ProjectpageThree>
		<ProjectpageFour></ProjectpageFour>
		<ProjectpageFive></ProjectpageFive>
		<ProjectpageSix></ProjectpageSix>
		</>
	 );
}

export default Projectpage;