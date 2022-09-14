import Navbar from '../_navbar';
import ClientPageOne from "./_clientpageOne";
import ClientpageTwo from './_clientpageTwo';
import ClientpageThree from './_clientpageThree';
import ClientpageFour from './_clientpageFour';
import ClientpageFive from './_clientpageFive';
import ClientpageSix from './_clientpageSix';


function Clientpage() {
	return ( 
		<>
		<Navbar></Navbar>
		<ClientPageOne></ClientPageOne>
		<ClientpageTwo></ClientpageTwo>
		<ClientpageThree></ClientpageThree>
		<ClientpageFour></ClientpageFour>
		<ClientpageFive></ClientpageFive>
		<ClientpageSix></ClientpageSix>
		</>
	 );
}

export default Clientpage;