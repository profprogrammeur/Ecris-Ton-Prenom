import React from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

function Child({ title, image_url }) {

  Cookies.set("level",0)
  return (
    <div className="card h-100 mx-auto" style={{ width: "18rem" }}>
      <img src={image_url} className="rounded mt-4 mx-4 " alt="pic" />
      <div className="card-body">
        <h5 className="card-title" style={{ fontSize: "3rem" }}>{title}</h5>
        <Link to={`/game`} className="btn btn-warning">
          JOUER
        </Link>
      </div>
    </div>
  );
}

export default Child;
