import React, { useEffect, useRef } from 'react'
import { Parallax } from 'react-parallax';
import "../../stylesheets/bulma/helpers/spacing.sass"

function Instaflux() {let insta = useRef(null);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
    script.async = true;
    document.body.appendChild(script);

  }, []);




  if (document.readyState === "complete") {
  }


		return (
      <>
        {/* <div style={{backgroundImage: "url(/zenith/images/x9nes5V.jpg)"}} className="background" alt="#agencezenith">
      <video playsInline autoPlay muted loop>
					<source src="/zenith/video/videobg8.mp4" type="video/mp4"></source>
				</video> */}
        <Parallax
          bgImage="/zenith/images/Z1zIJCKk.jpeg"
          blur={{ min: -1, max: 3 }}
          strength={800}
        >
          <div
            data-aos="zoom-in"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <div className="wrapper2">
              <h1
                className="titreA medium letterSpacing marginStop"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                #AGENCEZENITH
              </h1>

              <div
                ref={insta}
                className="containerCenterFlex"
                style={{ marginLeft: "10%", marginRight: "10%" }}
              >
                {/* <div className="Rectangle1" ></div>
          <div className="Rectangle2"></div>
          <div className="Rectangle3"></div>
          <div><p className="IMAGINER" data-aos="fade-up" data-aos-duration="1000">IMAGINER</p></div>
          <div><p className="CRÉER" data-aos="fade-up" data-aos-duration="1000">CRÉER</p></div>
          <div><p className="RÊVER" data-aos="fade-up" data-aos-duration="1000">RÊVER</p></div>
          <div><p className="ENSEMBLE" data-aos="fade-up" data-aos-duration="1000">ENSEMBLE</p></div>

          <div className="Rectangle4"></div>
          <div className="Rectangle5"></div>
          <div className="Rectangle6"></div>

          <div className="Rectangle7"></div>
          <div className="Rectangle8"></div>
          <div className="Rectangle9"></div> 
          <div className="Rectangle10"></div> 
          <div className="Rectangle11"></div>
          <div className="Rectangle12"></div>
          <div className="Rectangle13"></div>
          <div className="Rectangle14"></div>
          <div className="Rectangle15"></div>  */}
                <iframe
                  src="//lightwidget.com/widgets/b9227261d32c52f8b0e28f7eb0a92e7a.html" 
                  scrolling="no"
                  allowtransparency="true"
                  class="lightwidget-widget"
                ></iframe>
              </div>
              <h4
                className="light letterSpacing container center marginTopXL"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                UN UNIVERS DE POSSIBILITES
              </h4>
            </div>
          </div>
        </Parallax>
      </>
    );
	}
 
export default Instaflux;