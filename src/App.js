import { useAtom } from "jotai";

import Child from "./components/molecules/Child";
import Hero from "./components/molecules/Hero";
import background from "./assets/kid_transparent.png";
import dice from "./assets/dice.svg";
import laugh from "./assets/laugh.svg";
import pencil from "./assets/pencil.svg";
import kids_circle from "./assets/kids_circle.jpg";
import { childAtom } from "./stores/store";

function App() {
  const [state, setState] = useAtom(childAtom);

  return (
    <div className="App ">
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
    


      <div class="site-section d-flex bg-white pt-5 mt-5 pb-5">
      <div class="container  ">
        <div class="row">
          <div class="col-lg-4">
            <div class="block-2 red">
              <span class="wrap-icon">
                  <img src={dice} className="img-fluid lit-img" alt="dice" />
              </span>
              <h6  class="text-cursive text-white mb-3">JOUER</h6>
              <p  class="text-cursive text-white ">Pour faciliter les apprentissages rien de tel que le jeu : c'est très important! L'enfant est alors engagé, attentif et participe activement. </p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="block-2 yellow">
              <span class="wrap-icon">
                  <img src={pencil} className="img-fluid lit-img" alt="pencil" />
              </span>
              <h6 class="text-cursive text-white mb-3 ">APPRENDRE</h6>
              <p  class="text-cursive text-white ">D'abors apprendre à reconnaître son prénom au travers de jeux. Puis manipuler les lettres qui le compose et enfin écrire!</p>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="block-2 teal">
              <span class="wrap-icon">
                  <img src={laugh} className="img-fluid lit-img" alt="laugh" />
              </span>
              <h6 class="text-cursive text-white mb-3 ">RESSENTIR</h6>
              <p  class="text-cursive text-white ">L'implication par le jeu entraine des émotions qui favorisent la memorisation. Le jeu s'adapte aux gouts de l'enfants par le choix des images </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="site-section bg-info pt-5 pb-5">
      <div class="container">
          <div class="row d-flex  justify-content-center align-items-center">
          <div class="col-md-6 mb-5 mb-md-0">
              <img src={kids_circle} className="img-fluid" alt="kids_circle" />
          </div>
          <div class="col-md-5 ml-auto pl-md-5">
            <span class="text-cursive h5 text-red">Qui sommes nous?</span>
            <h3 class="text-black mb-2">Développeurs de bonne humeur</h3>
            <p><span class="text-cursive">Nous sommes trois passionés d'informatique et d'éducation. </span><span class="text-cursive"> Nous mettons au service des plus petits nos compétences afin d'utiliser à bon escient, la puissance des écrans!</span></p>
          </div>
        </div>
      </div>
    </div>



    </div>

  );
}

export default App;
