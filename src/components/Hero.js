import React from "react";
// import { useAtom } from "jotai";
// import { userAtom } from './../store';
import { useAtom, atom } from "jotai";
import Cookies from 'js-cookie';

// const API_URL = "http://localhost:3000/user";

// function getAPIData() {
//   return axios.get(API_URL).then((response) => response.data);
// }
//   const [user, setUser] = useState("");
//   useEffect(() => {
//     let mounted = true;
//     getAPIData().then((items) => {
//       if (mounted) {
//         setChildren(items);
//         localStorage.setItem("user", JSON.stringify(items));
//       }
//     });
//     return () => (mounted = false);
//   }, []);

console.log(Cookies.get('email'))

function Hero() {
  // const user = useAtom(userAtom);
  return (
    
    <div className="px-4 text-center">
      
      <h1 className="display-5 fw-bold">Ecris Ton Prénom</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Apprendre en s'amusant 
        </p>
        <h3> Bonjour {Cookies.get('email') } !</h3>
      </div>
    </div>
  );
}
export default Hero;
