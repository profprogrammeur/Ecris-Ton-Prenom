import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { userAtom, authorizationAtom } from "../../stores/auth";
import { API_URL } from "../../stores/api_url";
import Style from "./style.module.css";
import kids_circle from "../../assets/kids_circle.jpg";
import Cookies from "js-cookie";

const Register = () => {
  const navigate = useNavigate();
  const [userapp, setUserapp] = useAtom(userAtom);
  const [emailapp, setEmailapp] = useState();
  const [passwordapp, setPasswordapp] = useState();
  const [authorizationapp, setAuthorizationapp] = useAtom(authorizationAtom);

  const validateEmail = (e) => {
    e.preventDefault();
    console.log("validatingEmail")
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailapp)) {
      FetchData(e)
    } else {
     alert("Veuillez entrer un email valide")
    }
    
  }


  function FetchData(e) {
    e.preventDefault();
    console.log("fetchingData")
    
    const data = {
      user: {
        email: emailapp,
        password: passwordapp,
      },
    };
    

    fetch(API_URL + "users", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        fetch(API_URL + "users/sign_in", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => {
            setAuthorizationapp(
              [...response.headers.get("authorization")].join("")
            );
            Cookies.set(
              "token",
              [...response.headers.get("authorization")].join("")
            );

            return response.json();
          })

          .then((response) => {
            setUserapp(response.user.id);
            Cookies.set("id", response.user.id);
            Cookies.set("email", response.user.email);
            navigate("/");
          });
      });
  }

  return (
    <div className={Style.mainregister}>
      <h1>S'inscrire</h1>
      <form onSubmit={validateEmail}>
        <input
          type="text"
          placeholder="email"
          id="email"
          onChange={(e) => setEmailapp(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="mot de passe"
          id="password"
          onChange={(e) => setPasswordapp(e.target.value)}
        ></input>
        <button type="submit">Envoyer</button>
      </form>
      <div className={Style.imgregister}>
        <img src={kids_circle} className="rounded-5"></img>
      </div>
    </div>
  );
};

export default Register;
