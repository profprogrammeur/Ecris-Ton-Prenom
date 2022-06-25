import React from "react";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';

function Win(props) {
  let level = Cookies.get("level");
  const image_url = ("./assets/catspics/cat");
  let image = require(`${image_url}${level.toString()}.jpg`);

 
  console.log(level)
  return (
  
    <div className="card h-100 mx-auto" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top img-fluid mt-2" alt="pic" />
        <h5 className="card-title text-center mt-2">BRAVO !</h5>
        <Link to={`/game`} className="btn btn-success">
          REJOUER
        </Link>
      {/* </div> */}
    </div>
  );
}

export default Win;
