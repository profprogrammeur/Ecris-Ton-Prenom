import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAtom } from "jotai";
import { useAtomValue } from "jotai";
import { userAtom, authorizationAtom } from "../../stores/auth";
import { API_URL } from "../../stores/api_url";
import Style from "./style.module.css";
import Cookies from "js-cookie";
import axios from "axios";

console.log("cookie : " + Cookies.get("kid_name"));
const email = Cookies.get("email");
const id = Cookies.get("id");
const Profil = () => {
  const [kid_name, setKid_name] = useState(Cookies.get("kid_name"));
  const [kid_photo, setKid_photo] = useState(Cookies.get("kid_photo"));

  const jwt = useAtomValue(authorizationAtom);
  const id = useParams().id;
  const idAtom = useAtomValue(userAtom);

  const navigate = useNavigate();
  const [userapp, setUserapp] = useAtom(userAtom);

  const [emailapp, setEmailapp] = useState();
  const [passwordapp, setPasswordapp] = useState();
  const [authorizationapp, setAuthorizationapp] = useAtom(authorizationAtom);

  useEffect(() => {
    console.log("jwt : " + jwt);
    if (jwt == "") {
      navigate("/");
    }
  }, []);

  const handleSave = async () => {
    const data = {
      kid_name: kid_name,
      kid_photo: kid_photo,
    };
    fetch(API_URL + "users/" + "1", {
      method: "post",
      headers: {
        Authorization: jwt,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.user_id != idAtom) {
          navigate("/");
        }
        setEmailapp(response.emailapp);
      });
  };

  function putAPIData() {
    const token = Cookies.get("token");

    Cookies.set("kid_name", kid_name);
    Cookies.set("kid_photo", kid_photo);
    const data = {
      child_name: kid_name,
      child_image: kid_photo,
    };
    const config = {
      headers: {
        Authorization: token,
      },
    };

    return axios
      .patch(`${API_URL}member-update`, data, config)
      .then((response) => console.log("user updated" + response));
  }

  const photo = kid_photo;

  return (
    <div className={Style.mainregister}>
      <h1>Profil</h1>
      <div>
        prenom enfant :{" "}
        <input
          type="text"
          placeholder={kid_name}
          id="kid_name"
          onChange={(e) => setKid_name(e.target.value)}
        ></input>
        photo enfant :{" "}
        <input
          type="text"
          placeholder={kid_photo}
          id="kid_photo"
          onChange={(e) => setKid_photo(e.target.value)}
        ></input>
        <button
          className="btn btn-success"
          type="submit"
          onClick={() => putAPIData()}
        >
          Envoyer
        </button>
      </div>
      <div className={Style.imgregister}>
        <img
          src={kid_photo}
          className="rounded-5"
          alt="Photo de l'enfant"
        ></img>
      </div>
    </div>
  );
};

export default Profil;
