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



//const email = Cookies.get("email");
//const id = Cookies.get("id");
const Profil = () => {
  const kid_name=""
  const kid_photo=""

  const [state, setState] = useAtom(childAtom);
  console.log(state)

  const navigate = useNavigate();
  // const [kid_name, setKid_name] = useState(Cookies.get("kid_name"));
  // const [kid_photo, setKid_photo] = useState(Cookies.get("kid_photo"));



  
  // setState({ name: "Olympe", photo: "" })



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
      kid_name !== state.name ||
      kid_photo !== state.photo
    ) {
      console.log(state)
      putAPIData();
      console.log(state)
  
    }
  }

  function putAPIData() {
    // console.log(kid_name + "   " + kid_photo);
    const token = Cookies.get("token");
    console.log(Cookies.get("token"))
    // setState({ name: kid_name, photo: kid_photo })
    console.log(state)
    // Cookies.set("kid_photo", kid_photo);
    const data = {
      // child_name: kid_name,
      // child_image: kid_photo,
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
        console.log(response);
        console.log(state)
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
            placeholder={state.name}
            id="kid_name"
            // onChange={(e) => setKid_name(e.target.value)}
            // setState({ ...state, [name]: value })
            // onChange={(e) => setState({ name: e.target.value, photo: "" })}
            // setState({ name: "Olympe", photo: "" })
            onChange={(e) => setState({ ...state, name: (e.target.value) })}
          ></input>
        </div>
        <div className="mb-3 row">
          <label>Lien de la photo </label>
          <input
            type="text"
            placeholder={state.photo}
            id="kid_photo"
            // onChange={(e) => setKid_photo(e.target.value)}
            onChange={(e) => setState({ ...state, photo: (e.target.value) })}
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
        <img src={state.photo} className="rounded-5 m-3" alt="enfant"></img>
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
