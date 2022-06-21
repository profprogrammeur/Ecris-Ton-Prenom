import React from "react";
import { useParams } from 'react-router';
import SalesPage from "../SalesPage"
import Navbar from "../Navbar";
import Footer from "../Footer";

  const PropertyPage = () => {

  const { id } = useParams();
  const properties = JSON.parse(localStorage.getItem('properties'))
  let property = properties.find(x => x.id === parseInt(id))

  return(
    
    
      <div className="App container-fluid">
    
      <SalesPage 
        title={property.title}
        description={property.description}
        image_url={property.image_url}
        price={property.price} 
        address={property.address}
      />

      <Footer />
    </div>
   );
};

export default PropertyPage;
