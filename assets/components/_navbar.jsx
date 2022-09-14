import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

function navbar() {
  AOS.init()
	return (
		<>

    <input id="menu__toggle" type="checkbox"  />

    <label className="menu__btn" htmlFor="menu__toggle" data-aos="fade-down" data-aos-duration="1200">
      <span></span>
    </label>


    <ul className="menu__box" data-aos="fade-right">
      <h5 className="menu__item1 textDeco light"><Link className="textDeco letterSpacingS marginStop" to="/">ACCUEIL</Link></h5>
      <h5 className="menu__item textDeco light"><Link className="textDeco letterSpacingS" to="/projets">PROJETS</Link></h5>
      <h5 className="menu__item textDeco light"><Link className="textDeco letterSpacingS" to="/contact">CONTACT</Link></h5>
      <h5 className="menu__item textDeco light"><Link className="textDeco letterSpacingS" to="/client">CLIENTS</Link></h5>




    </ul>
		</>
	  );
}

export default navbar;