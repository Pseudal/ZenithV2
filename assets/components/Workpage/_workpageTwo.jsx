import React from "react";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import '../../stylesheets/bulma/grid/columns.sass';
import '../../stylesheets/bulma/helpers/spacing.sass';

function WorkpageTwo(data) {
  console.log(data);
  let box = [];
  for (let index = 0; index < data.data.length; index++) {
      let item = (
        <div className="column columns is-4 is-centered">
          <div className="is-half">
          <a href={"/projet/" + data.data[index].id}>
            <div className="boxWorkpage1">
              <p style={{ position: "absolute" }} className="textDeco">
                {data.data[index].projet}
              </p>
              <img
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                src={"/images/imageprojet/" + data.data[index].header}
                alt=""
              />
            </div>
          </a>
          </div>
        </div>
      );
      box.push(item);
    }
  

  return (
    <>
    <Parallax bgImage="/zenith/images/Z1zIJCKk.jpeg" blur={{ min: -1, max: 3 }} strength={400}>
      <div className="pt-6" alt="action">
        <div className="pt-6">
          <div className="">
            <div className="columns is-multiline is-centered">
              {box}
            </div>
            
            {/* <div className="container4 center">
            		<a href=""><div className="boxWorkpage1"><p className="light">{data.data[0].projet}</p><img src={"/images/imageprojet/" + data.data[0].header} alt="" style={{ maxWidth: "100%", height: "auto"}}/></div></a>
            		<a href=""><div className="boxWorkpage1"></div></a>
            		<a href=""><div className="boxWorkpage1"></div></a>
          		</div> */}
            <button className="btnL center light letterSpacingM">
              <Link to="/contact" className="textDeco">
                Voir plus
              </Link>
            </button>

            {/* <div className="container center">
            		<div className="boxWorkpage1"></div>
            		<div className="boxWorkpage1"></div>
            		<div className="boxWorkpage1"></div>
          		</div> */}
          </div>
        </div>
      </div>
    </Parallax>
    </>
  );
}

export default WorkpageTwo;
