import "./App.css";
import Child from "./components/Child";
import Hero from "./components/Hero";
import Cookies from "js-cookie";
import background from "./kid_transparent.png";

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
      <div className="d-flex justify-content-center">
        <img
          src={background}
          className="img-fluid mt-2"
          alt="pic"
          style={{ height: "450px" }}
        />
        <Child title={Cookies.get("kid_name")} image_url={avatar} />
      </div>

    </div>
  );
}

export default App;
