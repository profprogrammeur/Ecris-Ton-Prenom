import React from "react";
import { useAtom } from "jotai";
import { userAtom } from './../store';

function Hero() {
  const [user] = useAtom(userAtom);
  return (
    <div className="px-4 text-center">
      <h1 className="display-5 fw-bold">Ecris Ton Prénom</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Apprendre en s'amusant 
        </p>
        <h3> Bonjour {user?.id} !</h3>
     
      </div>
    </div>
  );
}
export default Hero;
