import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

  const Contact = () => {

  return(
    
      <div className="App container-fluid">
        <Navbar />
        <h1>CONTACTEZ-NOUS</h1>
      <img src={'https://unsplash.com/photos/c4QHIMWe9Vg/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTh8fGdob3N0JTIwc2hpcHxlbnwwfHx8fDE2NTUzODc0ODM&force=true&w=1920'} 
        className="img-fluid rounded-5" alt="pic" />
      <Footer />
    </div>
   );
};

export default Contact;
