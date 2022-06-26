import "./App.css";
import Child from "./components/Child";
import Hero from "./components/Hero";
import Cookies from "js-cookie";

function App() {
  
  let avatar = require("./avatar.png");
  let kid_photo = Cookies.get("kid_photo");
  if (kid_photo !== undefined) {
    avatar = kid_photo;
  } else { Cookies.set("kid_photo", avatar) }

  let kid_name_default = "Lola";
  let kid_name = Cookies.get("kid_name");
  console.log("kid_name : " + kid_name)
  if (kid_name == undefined) {
    kid_name = kid_name_default;
    Cookies.set("kid_name", kid_name_default)
  }
  

  return (
    <div className="App container-fluid">
      <Hero />
      <Child title={kid_name} image_url={avatar} />
    </div>
  );
}

export default App;
