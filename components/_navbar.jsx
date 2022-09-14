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
        <h5 className="menu__item1 light letterSpacingS"><Link className="textDeco marginStop" to="/">ACCUEIL</Link></h5>
        <h5 className="menu__item light letterSpacingS"><Link className="textDeco" to="/projets">PROJETS</Link></h5>
        <h5 className="menu__item light letterSpacingS"><Link className="textDeco" to="/contact">CONTACT</Link></h5>
        <h5 className="menu__item light letterSpacingS"><Link className="textDeco" to="/client">CLIENTS</Link></h5>
        <a className="textDeco letterSpacingS" href="/login"><h5 className="menu__item textDeco light">ADMIN</h5></a>
      </ul>
		</>
	  );
}

export default navbar;