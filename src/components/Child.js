import React from "react";
import { Link } from "react-router-dom";


function Child({ title, image_url, id }) {
  return (
    <div className="card h-100 mx-auto" style={{ width: "18rem" }}>
      <img src={image_url} className="card-img-top img-fluid mt-2" alt="pic" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <Link to={`child/${id}`} className="btn btn-warning">
          JOUER
        </Link>
      </div>
    </div>
  );
}

export default Child;
