import React from "react";
import Property from "./Property";

function Properties(props) {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 ">
      {props.properties.map((property) => {
        return (
              <Property
                title={property.title}
                description={property.description}
                image_url={property.image_url}
                price={property.price}
                id={property.id}
                address={property.address}
                key={property.id}
              />
        );
      })}
    
    </div>
  );
}

export default Properties;
