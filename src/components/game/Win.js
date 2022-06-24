import React from "react";
import { Link } from "react-router-dom";

function Win(level) {
  let image_url = require("./assets/catspics/cat1.jpg");
  return (
    <div className="card h-100 mx-auto" style={{ width: "18rem" }}>
      <img src={image_url} className="card-img-top img-fluid mt-2" alt="pic" />
        <h5 className="card-title text-center mt-2">BRAVO !</h5>
        <Link to={`/game`} className="btn btn-success">
          REJOUER
        </Link>
      {/* </div> */}
    </div>
  );
}

export default Win;
