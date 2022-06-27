import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link, Redirect } from "react-router-dom";
import { useAtom } from "jotai";
import { useAtomValue } from "jotai";
import { authorizationAtom } from "../../stores/auth";
import { API_URL } from "../../stores/api_url";
import Style from "./style.module.css";
import Cookies from "js-cookie";
import axios from "axios";

//const email = Cookies.get("email");
//const id = Cookies.get("id");
const Profil = () => {
  const navigate = useNavigate();
  const [kid_name, setKid_name] = useState(Cookies.get("kid_name"));
  const [kid_photo, setKid_photo] = useState(Cookies.get("kid_photo"));

  const jwt = useAtomValue(authorizationAtom);
  // const id = useParams().id;
  // const idAtom = useAtomValue(userAtom);

  // const navigate = useNavigate();
  // const [userapp, setUserapp] = useAtom(userAtom);

  //  const [emailapp, setEmailapp] = useState();
  // const [passwordapp, setPasswordapp] = useState();
  //  const [authorizationapp, setAuthorizationapp] = useAtom(authorizationAtom);

  useEffect(() => {
    console.log("jwt : " + jwt);
    if (jwt === "") {
      navigate("/");
    }
  }, []);

  function conditionalPutAPIData() {
    if (
      kid_name !== Cookies.get("kid_name") ||
      kid_photo !== Cookies.get("kid_photo")
    ) {
      putAPIData();
    }
  }

  function putAPIData() {
    console.log(kid_name + "   " + kid_photo);
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
      .then((response) => {
        navigate("/");
        console.log("user updated" + response);
      });
  }

  //const photo = kid_photo;

  return (
    // <form  onSubmit={putAPIData}>
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
            placeholder={kid_name}
            id="kid_name"
            onChange={(e) => setKid_name(e.target.value)}
          ></input>
        </div>
        <div className="mb-3 row">
          <label>Lien de la photo </label>
          <input
            type="text"
            placeholder={kid_photo}
            id="kid_photo"
            onChange={(e) => setKid_photo(e.target.value)}
          ></input>
        </div>
        <button
          className="btn btn-success mb-2"
          type="submit"
          onClick={() => conditionalPutAPIData()}
        >
          Envoyer
        </button>
      </div>
      <div>
        <img src={kid_photo} className="rounded-5 m-3" alt="enfant"></img>
      </div>
    </div>
    // </form>
  );
};

export default Profil;

// const handleSave = async () => {
//   const data = {
//     kid_name: kid_name,
//     kid_photo: kid_photo,
//   };
//   // const navigate = useNavigate()
//   // useNavigate("/")
//   fetch(API_URL + "users/" + "1", {
//     method: "post",
//     headers: {
//       Authorization: jwt,
//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((response) => {
//       console.log(response.user_id)
//       if (response.user_id != idAtom) {
//         // navigate("/");
//       }
//       setEmailapp(response.emailapp);
//     });
// };
