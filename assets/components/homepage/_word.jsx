import React, { useState } from "react";
import { useSpring, animated } from 'react-spring'
import "swiper/css";

const Wordpage = ({  }) => {
  const [key1, key2] = useState(1);

  const scrollingxY = useSpring({
    from: { transform: "translate (60%,0" },
    to: { transform: "translate (60%,0" },
    config: { duration: 2000 },
    reset: true,

    onRest: () => {
      key1(key2 + 1);
    },
  });

  //other fonction pour mouvement ligne inverse

  const [text, mvtext] = useState(1);

  const scrollingY = useSpring({
    from: { transform: "translate (-60%,0" },
    to: { transform: "translate (-60%,0" },
    config: { duration: 2000 },
    reset: true,

    onRest: () => {
      test(mvtext + 1);
    },
  });

  return (
    <>
      <div
        style={{ backgroundImage: "url(/zenith/images/x9nes5V.jpg)" }}
        className="demibloc"
        alt="wordpage"
      >
        <video playsInline autoPlay muted loop>
          <source src="/zenith/video/videobg4.mp4" type="video/mp4"></source>
        </video>

        <div className="demibloc2" alt="Liste de mots">
          <div className="parent">
            <h1 className="wordpage light  grid1 font-family:Helvetica  " id="wordpage">
              RÉACTIVITÉ
            </h1>
            <h1 className=" margin medium wordpageText grid2">·</h1>
            <h1
              onMouseOver={() => {scrollingxY}}
              className="wordpage outline normal grid3 font-family:Arial    "
            >
              PROXIMITÉ
            </h1>
            <h1 className=" margin medium wordpageText grid4">·</h1>
            <h1 onMouseOver={scrollingxY} className="wordpage light  grid5 font-family:Verdena    ">
              PASSION
            </h1>
            <h1 className=" wordpageText  medium grid6">·</h1>
            <h1 onMouseOver={scrollingxY} className="wordpage normal  grid7 font-family:Arial     " >
              STRATÉGIE
            </h1>

            <h1 onMouseOver={scrollingY} className="wordpage normal  grid9
            font-family:Verdana   ">
              COMMUNICATION
            </h1>
            <h1 className=" wordpageText outline medium 
            font-family:arial        grid10">·</h1>
            <h1
              onMouseOver={scrollingY}
              className="wordpage marron normal  grid11 font-family:Optima      "
            >
              ZENITH
            </h1>
            <h1 className=" wordpageText outline medium grid12">·</h1>
            <h1 onMouseOver={scrollingY} className="wordpage normal
            font-family:Arial  grid13">
              CONSEIL
            </h1>
            <h1 className=" wordpageText medium grid14">·</h1>
            <h1 onMouseOver={scrollingY} className="wordpage normal 
            font-family:Verdana grid15">
              EVENT
            </h1>

            <h1
              onMouseOver={scrollingxY}
              className="wordpage outline medium  grid17
              font-family:Arial"
            >
              CRÉATIVITÉ
            </h1>
            <h1 className=" wordpageText medium 
            font-family:Georgia   grid18">·</h1>
            <h1 onMouseOver={scrollingxY} className="wordpage light  grid19">
              RÊVER
            </h1>
            <h1 className=" wordpageText medium grid20">·</h1>
            <h1 onMouseOver={scrollingxY} className="wordpage light 
            font-family:Aria grid21">
              AMBITION
            </h1>
            <h1 className=" wordpageText medium grid22">·</h1>
            <h1
              onMouseOver={scrollingxY}
              className="wordpage outline normal
              font-family:Aria   grid23"
            >
              IMAGINATION
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wordpage;
