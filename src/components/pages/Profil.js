import React, { useEffect,useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useAtom } from "jotai";
import { useAtomValue } from "jotai";

import { userAtom, authorizationAtom } from '../../stores/auth';
import { API_URL } from '../../stores/api_url';
import Style from './style.module.css';
import kids_train from '../../ressources/kids_train.jpg';
import Cookies from 'js-cookie';



const Profil = () => {
  
                          const jwt = useAtomValue(authorizationAtom);
                          const id = useParams().id;
                          const idAtom = useAtomValue(userAtom);

  const navigate = useNavigate();
  const [userapp, setUserapp] = useAtom(userAtom);

  const [emailapp, setEmailapp] = useState();
  const [passwordapp, setPasswordapp] = useState();
  const [authorizationapp, setAuthorizationapp] = useAtom(authorizationAtom);

  useEffect(
    () => {
      console.log("jwt : "+jwt)
      if (jwt == "") {
        navigate("/")
      }
    }, []
  )

  // useEffect(
  //   () => {
  //     fetch(API_URL + 'users/' + "41", {
  //       method: 'get',
  //       headers: {
  //         'Authorization': jwt,
  //         'Content-Type': 'application/json'
  //       }
  //     })
  //       .then((response) => response.json())
  //       .then((response) => {
  //         // setHouse(response);
  //         if (response.user_id != idAtom) {
  //           navigate('/');
  //         }
  //         setEmailapp(response.emailapp);
  //         // setPrice(response.price);
      
  //       })

  //   }, []
  // )

  
  return (
    <div className={Style.mainregister}>
      <h1>Profil</h1>
      <form onSubmit={console.log("submitting")}>
        <input type="text" placeholder='email' id="email" onChange={(e) => setEmailapp(e.target.value)}></input>
        <input type="password" placeholder='mot de passe' id="password" onChange={(e) => setPasswordapp(e.target.value)}></input>
        <button type='submit'  >Envoyer</button>

      </form>
      <div className={Style.imgregister}>
        <img src={kids_train} className="rounded-5"></img>
      </div>
    </div>

  )
}

export default Profil;















// function FetchData(e) {
  //   e.preventDefault();

  //   const data = {
  //     "user": {
  //       "email": emailapp,
  //       "password": passwordapp
  //     }
  //   };

  //   fetch(API_URL + 'users' + id, {
  //     method: 'get',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //     // ,
  //   //   body: JSON.stringify(data)
  //   // })
  //     .then((response) => { return response.json() })
  //     .then((response) => {
  //       fetch(API_URL + 'users/sign_in', {
  //         method: 'post',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify(data)
  //       })
  //         .then((response) => {
  //           setAuthorizationapp([...response.headers.get('authorization')].join(''));
  //           Cookies.set('token', [...response.headers.get('authorization')].join(''))
  //           console.log("responseImmoAllAPI :" + response.headers.get('authorization'))
  //           return response.json()
  //         })

  //         .then((response) => {
  //           setUserapp(response.user.id)
  //           Cookies.set('id', response.user.id);
  //           navigate('/')
  //         })

  //     })
  // }
