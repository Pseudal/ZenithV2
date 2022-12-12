import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Button, Menu, MenuItem, Typography } from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  maxWidth: "200px",
  backgroundColor: "rgba(0,0,0,0)",
  color: "white",
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
	{...props}
  />
))(({ theme }) => ({
  color: "white",
  backgroundColor:
    theme.palette.mode === "darl"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  paddingTop: 0,
  marginTop: 0,
  maxHeight: "150px",
  overflow: "scroll",
}));

function WorkpageOne(cat) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [words, setWords] = useState([]);
  let category = cat.cat;
  let menu = [];
  let randomWord = [
    "RÉACTIVITÉ",
    "PROXIMITÉ",
    "PASSION",
    "STRATÉGIE",
    "EVENT",
    "CONSEIL",
    "COMMUNICATION",
    "RÊVER",
    "AMBITION",
    "IMAGINATION",
    "agir",
    "s'adapter",
    "anticiper",
    "autonomie",
    "croissance",
    "défi",
    "planifier",
    "positiver",
    "disponibilité",
    "dynamisme",
    "écoute",
    "service",
    "prévision",
    "ténacité",
    "qualité",
    "mobiliser",
    "négocier",
    "objectifs",
    "optimiser",
    "challenge",
    "réussir",
    "excellence",
    "réaliser",
    "résultats",
    "développer",
    "savoirfaire",
    "dialogue",
    "prévoir",
    "synergie",
    "projet",
    "innovation",
    "motivation"];

  useEffect(() => {
    function getWord() {
      let word = randomWord[Math.floor(Math.random() * randomWord.length)];
      randomWord.splice(randomWord.indexOf(word));
      return word;
    }

    let word1 = getWord();
    let word2 = getWord();
    setWords([word1, word2]);
  }, []);
  AOS.init();
  category.forEach((element) => {
    let item = (
		<a style={{textDecoration: "none", color: "white"}} href={`/searchcat/${element.id}/${element.categorie}`}>
			<p
			key={element.id}
			style={{ display: "block", textAlign: "center",textDecoration: "none", color: "white"}}
			className="light"
		>
			{element.categorie}
		</p>
	  </a>

    );
    menu.push(item);
  });
  if (words.length > 0) {
    return (
      <>
        <div className="background1" alt="homepage">
          <video playsInline autoPlay muted loop>
            <source src="/zenith/video/videobg.mp4" type="video/mp4"></source>
          </video>

          <div className="opacityBlue">
            <div className="wrapper">
              <div className="container center2">
                <div className="containerCenter" data-aos="fade-up">
                  <Link to="/">
                    <img
                      src="/zenith/images/bIO1r9F.png"
                      alt="Logo"
                      width={200}
                      className="center"
                    />
                  </Link>
                </div>

                <div className="workpageText" data-aos="fade-up">
                  <h1 className="medium">SÉLÉCTION DE PROJET</h1>
                  <div
                    className="columns"
                    style={{ float: "right", marginRight: "10px" }}
                  >
                    <p style={{ textTransform: "uppercase" }} className="light">
                      {words[0]} . {words[1]} .{" "}
                    </p>
                    <Accordion
                      onChange={handleChange("panel1")}
                    >
                      <AccordionSummary
                        aria-controls="panel1d-content"
                        id="panel1d-header"
                      >
                        <p style={{ marginTop: "5px" }}>CATÉGORIE</p>
                      </AccordionSummary>
                      <AccordionDetails>{menu}</AccordionDetails>
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default WorkpageOne;
