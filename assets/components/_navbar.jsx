import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import {useState} from 'react'

function navbar() {

  AOS.init()
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  
  const teleport = (e) => {
    e.preventDefault();
    location.replace('/search/' + searchInput);
    //window.location.href = "/search/"+searchInput
  }
  
	return (
		<>

    <input id="menu__toggle" type="checkbox"  />

      <label className="menu__btn" htmlFor="menu__toggle" data-aos="fade-down" data-aos-duration="1200">
        <span></span>
      </label>
    
      <ul className="menu__box" data-aos="fade-right">
        <form onSubmit={teleport}>
          <div className="form__group field divC1 menu__item1" >
            <input type="input" size="15" className="form__field" placeholder="Name" id="email" value={searchInput} onChange={handleChange} required></input>
            <label htmlFor="name" className="form__label">Recherche</label>
          </div>
          </form>
        <h5 className="menu__item light letterSpacingS"><Link className="textDeco marginStop" to="/">ACCUEIL</Link></h5>
        <h5 className="menu__item light letterSpacingS"><Link className="textDeco" to="/clients">CLIENTS</Link></h5>
        <h5 className="menu__item light letterSpacingS"><Link className="textDeco" to="/projets/1">PROJETS</Link></h5>
        <h5 className="menu__item light letterSpacingS"><Link className="textDeco" to="/contact">CONTACT</Link></h5>
        <a className="textDeco letterSpacingS" href="/login"><h5 className="menu__item textDeco light">ADMIN</h5></a>
      </ul>
		</>
	  );
}

export default navbar;