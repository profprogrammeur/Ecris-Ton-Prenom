import React from "react";

function ChildCard({ child_name, child_image,id,}) {
  return (
    
    <div className="container">
      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading fw-normal lh-1">{child_name}</h2>
        </div>
        <div className="col-md-5 order-md-1">
          <img src={child_image} className="img-fluid rounded-3" alt="pic" />
        </div>
      </div>
      <br></br>
      <div className="card text-bg-warning mb-3">    
        <button type="button" className="btn btn-light">GAME</button>
      </div>
    </div>
    
  );
}

export default ChildCard;
