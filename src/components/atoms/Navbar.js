import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { atom, useAtom } from "jotai";
import { authorizationAtom } from "../../stores/auth";
import { API_URL } from "../../stores/api_url";
import Cookies from "js-cookie";

import { childAtom } from "../../stores/store";
//import APIManager from "../../stores/logout";

function Navbar() {
  const [state, setState] = useAtom(childAtom);

  const [authorizationapp, setAuthorizationapp] = useAtom(authorizationAtom);
  //const [authorizationapp, setAuthorizationapp] = useAtom();
  //const [id, setId] = useAtom(userAtom);
  const navigate = useNavigate();
  //logout;
  const Logout = () => {
    // setState({name:"Olympe", photo:""})
    Cookies.remove("id");
    Cookies.remove("email");
    Cookies.remove("name");
    Cookies.remove("photo");
    // console.log(state)

    setState({
      name: "Athena",
      photo: require("../../ressources/avatar-1.png"),
    });
    // Cookies.set("kid_name", "Elsa")
    // let avatar = require("../avatar.png");
    // let kid_photo = Cookies.get("kid_photo");
    // if (kid_photo !== undefined) {
    //   avatar = kid_photo;
    // } else { Cookies.set("kid_photo", avatar) }

    // console.log(Cookies.get());

    fetch(API_URL + "users/sign_out", {
      method: "delete",
      headers: {
        Authorization: authorizationapp,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setAuthorizationapp("");
        //setId("");
        Cookies.set("id", "");
        Cookies.set("token", "");
        navigate("/");
      });
  };
  // const handleLogout = async () => {
  //   await APIManager.Logout();
  // };

  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <p> Bonjour {Cookies.get("email")} !</p>
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to={`/`} className="nav-link px-2 link-secondary">
              Accueil
            </Link>
          </li>

          <li>
            <Link to={`/contact`} className="nav-link px-2 link-dark">
              Contact
            </Link>
          </li>
        </ul>

        <div className=" text-end">
          {authorizationapp === "" ? (
            <>
              <Link to={`/login`}>
                <button
                  type="button"
                  className="btn btn-outline-secondary me-2"
                >
                  SE CONNECTER
                </button>
              </Link>
              <Link to={`/register`}>
                <button type="button" className="btn btn-secondary">
                  S'INSCRIRE
                </button>
              </Link>
            </>
          ) : (
            <>
              {" "}
              <Link to={`/profil`}>
                <button
                  type="button"
                  className="btn btn-outline-secondary me-2"
                >
                  PROFIL
                </button>
              </Link>
              <Link to={`/`}>
                <button
                  type="button"
                  onClick={Logout}
                  className="btn btn-secondary"
                >
                  SE DECONNECTER
                </button>
              </Link>
            </>
          )}
        </div>
      </header>
    </div>
  );
}

export default Navbar;
