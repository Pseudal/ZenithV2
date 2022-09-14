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


function Workpage() {
	return ( 
		<>
		<Navbar></Navbar>
		<RsButton></RsButton>
		<LinesTop></LinesTop>
		<LinesBottom></LinesBottom>
		
		<WorkpageOne></WorkpageOne>
		<WorkpageTwo></WorkpageTwo>
		<WorkpageThree></WorkpageThree>
		<WorkpageFour></WorkpageFour>
		<WorkpageFive></WorkpageFive>
		<MiniFooter></MiniFooter>
		</>
	 );
}

export default Workpage;