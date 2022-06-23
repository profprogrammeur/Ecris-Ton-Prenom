import "./App.css";
import axios from "axios";
import Child from "./components/Child";
import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import { Provider } from "jotai";
import { useAtom, atom } from "jotai";
import Cookies from 'js-cookie';




// const usernameAtom = atom("Evvvvvan")

// const API_URL = "http://localhost:3000/";

// function getAPIData() {
//   return axios.get(API_URL).then((response) => response.data);
// }

function App() {
  // const [avatar, setAvatar] = useState(require('./avatar.png'))
  let avatar = require('./avatar.png'); 
  let kid_photo = Cookies.get('kid_photo')
  if (kid_photo !== undefined) { avatar = kid_photo }



  // const [children, setChildren] = useState([]);
  // useEffect(() => {
  //   let mounted = true;
  //   getAPIData().then((items) => {
  //     if (mounted) {
  //       setChildren(items);
  //       localStorage.setItem("children", JSON.stringify(items)); }  });
  //         return () => (mounted = false);  }, []);

  return (
    <div className="App container-fluid">
      <Provider>
      {/* <Navbar /> */}
      <Hero />
        <Child title={Cookies.get('kid_name')} image_url={avatar}/>
      {/* <Footer /> */}
      </Provider>
    </div>
  );
}

export default App;
