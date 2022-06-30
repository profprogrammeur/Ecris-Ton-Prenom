import { useAtom } from "jotai";

import Child from "./components/molecules/Child";
import Hero from "./components/molecules/Hero";
import background from "./assets/kid_transparent.png";
import { childAtom } from "./stores/store";

function App() {
  const [state, setState] = useAtom(childAtom);

  return (
    <div className="App container-fluid">
      <Hero />
      <div className="d-flex justify-content-center">
        <img
          src={background}
          className="rounded-5 home-pic "
          alt="pic"
        />
        <div>
          <Child title={state.name} image_url={state.photo} />
        </div>
      </div>
    </div>
  );
}

export default App;
