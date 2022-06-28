import "./App.css";
import Child from "./components/Child";
import Hero from "./components/Hero";
import Cookies from "js-cookie";
import background from "./kid_transparent.png";

import { useAtom } from "jotai";

import { childAtom } from "./stores/store";




function App() {


  const [state, setState] = useAtom(childAtom);



  let avatar = require("./avatar.png");
  let kid_photo = Cookies.get("kid_photo");
  if (kid_photo !== undefined) {
    avatar = kid_photo;
  } //else { Cookies.set("kid_photo", avatar) }

  let kid_name_default = "Lola";
  let kid_name = Cookies.get("kid_name");
  console.log("kid_name : " + kid_name);
  if (kid_name === undefined) {
    kid_name = kid_name_default;
    Cookies.set("kid_name", kid_name_default);
  }

  return (
    <div className="App container-fluid">
      <Hero />
      <div className="d-flex justify-content-center">
        <img
          src={background}
          className="img-fluid rounded-5"
          alt="pic"
          style={{ height: "500px" }}
        />
        <div>
          {/* <Child title={Cookies.get("kid_name").toUpperCase()} image_url={avatar} /> */}
          <Child title={state.name} image_url={avatar} />

        </div>
        
      </div>
    </div>
  );
}

export default App;
