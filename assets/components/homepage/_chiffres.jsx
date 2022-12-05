import React from "react";
import { Parallax } from "react-parallax";

function Chiffres() {
  return (
    <>
	<Parallax bgImage="/zenith/images/Z1zIJCKk.jpeg" blur={{ min: -1, max: 3 }} strength={800}>
      <div
        // style={{ backgroundImage: "url(/zenith/images/x9nes5V.jpg)" }}
        className="demibloc"
        alt="chiffres"
      >
        {/* <video playsInline autoPlay muted loop>
          <source src="/zenith/video/videobg6.mp4" type="video/mp4"></source>
        </video> */}
        <div className="demibloc2">
          <div className="background3">
            <div className="parent2">
              <div className="div1" data-aos="fade-up" data-aos-duration="1000">
                <h1 className="medium chiffres">2016</h1>
                <h5 className="light chiffres2">ANNÉE DE CREATION</h5>
              </div>
              <div className="div2" data-aos="fade-up" data-aos-duration="1000">
                <h1 className="medium chiffres">+300</h1>
                <h5 className="light chiffres2">CRÉATIONS PHOTOS</h5>
              </div>
              <div className="div3" data-aos="fade-up" data-aos-duration="1000">
                <h1 className="medium chiffres">+160</h1>
                <h5 className="light chiffres2">PROJETS RÉALISÉS</h5>
              </div>
              <div className="div4" data-aos="fade-up" data-aos-duration="1000">
                <h1 className="medium chiffres">+150</h1>
                <h5 className="light chiffres2">RÉALISATIONS VIDÉOS</h5>
              </div>
              <div className="div5" data-aos="fade-up" data-aos-duration="1000">
                <h1 className="medium chiffres">+200</h1>
                <h5 className="light chiffres2">CRÉATIONS DIGITALES </h5>
              </div>
              <div className="div6" data-aos="fade-up" data-aos-duration="1000">
                <h1 className="medium chiffres">100%</h1>
                <h5 className="light chiffres2">MADE IN FRANCE</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
	  </Parallax>
    </>
  );
}

export default Chiffres;
