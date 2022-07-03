import React from "react";
import contactImage from "../../assets/kids_duplo.jpg";

const Contact = () => {
  return (
    <div className="App container-fluid">
      <h1>CONTACTEZ-NOUS</h1>
      <img
        src={
          contactImage
        }
        className="img-fluid rounded-5"
        alt="pic"
      />
    </div>
  );
};

export default Contact;
