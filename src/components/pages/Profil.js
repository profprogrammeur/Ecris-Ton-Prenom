import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link, Redirect } from "react-router-dom";
import { useAtom } from "jotai";
import { useAtomValue } from "jotai";
import { authorizationAtom } from "../../stores/auth";
import { API_URL } from "../../stores/api_url";
import Style from "./style.module.css";
import Cookies from "js-cookie";
import axios from "axios";

import { childAtom } from "../../stores/store";

const Profil = () => {
  const kid_name = "";
  const kid_photo = "";

  const [state, setState] = useAtom(childAtom);
  const navigate = useNavigate();
  const jwt = useAtomValue(authorizationAtom);
  const [authorizationapp, setAuthorizationapp] = useAtom(authorizationAtom);

  function deleteAPIData() {
    const token = Cookies.get("token");
    const config = {
      headers: {
        Authorization: token,
      },
    };
    return axios.delete(`${API_URL}member-delete`, config).then((r) => {
      state.photo = require("../../assets/avatar-1.png");
      state.name = "Elsa";
      Cookies.remove("email");
      Cookies.remove("name");
      Cookies.remove("photo");
      setAuthorizationapp("");
      navigate("/");
    });
  }

  useEffect(() => {
    if (jwt === "") {
      navigate("/");
    }
  }, []);

  function conditionalPutAPIData() {
    if (kid_name !== state.name || kid_photo !== state.photo) {
      putAPIData();
    }
  }

  function putAPIData() {
    const token = Cookies.get("token");
    Cookies.set("photo", state.photo);
    Cookies.set("name", state.name);
    const data = {
      child_name: state.name,
      child_image: state.photo,
    };
    const config = {
      headers: {
        Authorization: token,
      },
    };
    return axios
      .patch(`${API_URL}member-update`, data, config)
      .then((response) => {
        navigate("/");
      });
  }

  return (
    <div
      className="container d-flex flex-column  align-items-center bg-light rounded"
      cursor="not-allowed"
    >
      <h1>Profil</h1>
      <div className="container d-flex flex-column ">
        <div className="mb-3 row">
          <label>Prénom de l'enfant &nbsp;</label>
          <input
            type="text"
            placeholder={state.name}
            id="kid_name"
            onChange={(e) => setState({ ...state, name: e.target.value })}
          ></input>
        </div>
        <div className="mb-3 row">
          <label>Lien de la photo </label>
          <input
            type="text"
            placeholder={state.photo}
            id="kid_photo"
            onChange={(e) => setState({ ...state, photo: e.target.value })}
          ></input>
        </div>
        <button
          className="btn btn-success mb-2"
          type="submit"
          onClick={() => conditionalPutAPIData()}
        >
          Envoyer
        </button>
        <button
          className="btn btn-danger mb-2"
          type="submit"
          onClick={() => {
            if (
              window.confirm(
                "Êtes-vous sur de vouloir supprimer votre compte ?"
              )
            ) {
              deleteAPIData();
            }
          }}
        >
          Supprimer le compte
        </button>
      </div>
      <div>
        <img src={state.photo} className="rounded-5 m-3" alt="enfant"></img>
      </div>
    </div>
  );
};

export default Profil;

