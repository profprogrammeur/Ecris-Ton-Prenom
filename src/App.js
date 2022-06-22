import "./App.css";
import axios from "axios";
import Children from "./components/Children";
import { useEffect, useState } from "react";
import Hero from "./components/Hero";

const API_URL = "http://localhost:3000/children";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data);
}

function App() {

  const [children, setChildren] = useState([]);

  useEffect(() => {

    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setChildren(items);
        localStorage.setItem("children", JSON.stringify(items));
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div className="App container-fluid">
      {/* <Navbar /> */}
      <Hero />
      <Children children={children} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
