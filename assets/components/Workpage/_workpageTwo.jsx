import React from "react";
import { Link } from "react-router-dom";

function WorkpageTwo(data) {
  console.log(data);
  let box = [];
  for (let index = 0; index < data.data.length; index++) {
    if (
      index % 3 == 0 &&
      data.data[index + 2] &&
      data.data[index + 1] &&
      data.data[index]
    ) {
      let item = (
        <div className="container4 center" key={index}>
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
          <a href={"/projet/" + data.data[index + 1].id}>
            <div className="boxWorkpage1">
              <p style={{ position: "absolute" }} className="textDeco">
                {data.data[index + 1].projet}
              </p>
              <img
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                src={"/images/imageprojet/" + data.data[index + 1].header}
                alt=""
              />
            </div>
          </a>
          <a href={"/projet/" + data.data[index + 2].id}>
            <div className="boxWorkpage1">
              <p style={{ position: "absolute" }} className="textDeco">
                {data.data[index + 2].projet}
              </p>
              <img
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                src={"/images/imageprojet/" + data.data[index + 2].header}
                alt=""
              />
            </div>
          </a>
        </div>
      );
      box.push(item);
    } else {
      continue;
    }
  }

  return (
    <>
      <div className="" alt="action">
        <div className="opacityBlue">
          <div className="wrapper">
            {box}
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
    </>
  );
}

export default WorkpageTwo;
