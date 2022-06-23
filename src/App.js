import "./App.css";
import Child from "./components/Child";
import Hero from "./components/Hero";
import Cookies from "js-cookie";

function App() {
  let avatar = require("./avatar.png");
  let kid_photo = Cookies.get("kid_photo");
  if (kid_photo !== undefined) {
    avatar = kid_photo;
  }

  return (
    <div className="App container-fluid">
      <Hero />
      <Child title={Cookies.get("kid_name")} image_url={avatar} />
    </div>
  );
}

export default App;
