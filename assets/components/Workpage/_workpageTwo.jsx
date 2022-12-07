
import React from "react";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import Pagination from 'rc-pagination';
import '../../stylesheets/bulma/grid/columns.sass';
import '../../stylesheets/bulma/helpers/spacing.sass';
import '../../stylesheets/pagination.less' 


function WorkpageTwo({data, page, count}) {
  console.log(count)
  let pageNbr = Math.ceil(count / 20)
  let nbr = parseInt(page)
  function onChange(params) {
    document.location = `/projets/${params}`
  }

  let box = [];
  for (let index = 0; index < data.length; index++) {
      let item = (
        <div key={index} className="column columns is-one-fifth is-centered">
          <div className="is-half">
          <a href={"/projet/" + data[index].id}>
            <div className="boxWorkpage1">
              <p style={{ position: "absolute" }} className="textDeco">
                {data[index].projet}
              </p>
              <img
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                src={"/images/imageprojet/" + data[index].header}
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
            <div className="columns is-mobile is-centered" style={{ width: "100%", height: "150px"}}>            
              <Pagination
                current={nbr}
                onChange={onChange}
                pageSize={1}
                total={pageNbr}
                showTitle={false}
              />
            </div>  
            {/* <button className="btnL center light letterSpacingM">
              <Link to="/contact" className="textDeco">
                Voir plus
              </Link>
            </button> */}
          </div>
        </div>
      </div>
    </Parallax>
    </>
  );
}

export default WorkpageTwo;
