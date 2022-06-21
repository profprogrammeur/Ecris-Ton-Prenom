import React from "react";

function SalesPage({ title, description, image_url, price, id, address }) {
  return (
    
    <div className="container">
      
      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading fw-normal lh-1">{title}</h2>
          <p className="lead">{description}</p>
          <p className="lead">{price.toLocaleString()} francs</p>
        </div>
        <div className="col-md-5 order-md-1">
          <img src={image_url} className="img-fluid rounded-3" alt="pic" />
        </div>
      </div>
      <br></br>
      <div className="card text-bg-warning mb-3">
        <div className="card-header">Contacter le vendeur</div>
        <div className="card-body">
          <h5 className="card-title"> Larry Kaplan </h5>
          <p className="card-text">
           {address}
          </p>
          <p className="fst-italic">
            larrykaplan@gmail.com
          </p>
          <button type="button" className="btn btn-light">Écrire au vendeur (peut être mort si pas de réponse...)</button>
        </div>
      </div>{" "}
    </div>
  );
}

export default SalesPage;
