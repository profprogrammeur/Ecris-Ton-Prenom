import React from "react";
import { Link } from "react-router-dom";


function Property({ title, description, image_url, price,id }) {
  return (
    <div className="card h-100 mx-auto" style={{ width: "18rem" }}>
      <img src={image_url} className="card-img-top img-fluid mt-2" alt="pic" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {description.split(" ").slice(0, 15).join(" ") + "..."}
        </p>
        <Link to={`property/${id}`} className="btn btn-warning">
          JOUER
        </Link>
      </div>
      <div className="card-footer text-muted">{price.toLocaleString()} Francs</div>
    </div>
  );
}

export default Property;
