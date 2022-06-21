import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { userAtom, authorizationAtom } from '../../stores/auth';
import { API_URL } from '../../stores/api_url';
import Style from './style.module.css';
import kids_cube from '../../ressources/kids_cube.jpg';
import Cookies from 'js-cookie';


// idem aythentication
const Login = () => {

  const navigate = useNavigate();
  const [userapp, setUserapp] = useAtom(userAtom);
  const [emailapp, setEmailapp] = useState();
  const [passwordapp, setPasswordapp] = useState();
  const [authorizationapp, setAuthorizationapp] = useAtom(authorizationAtom);

  function FetchData(e) {
    e.preventDefault();

    const data = {
      "user": {
        "email": emailapp,
        "password": passwordapp
      }
    };

    // fetch(API_URL + 'users/sign_in', {
    //   method: 'post',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(data)
    // })
    //   .then((response) => { return response.json() })
    //   .then((response) => {
        fetch(API_URL + 'users/sign_in', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then((response) => {
            setAuthorizationapp([...response.headers.get('authorization')].join(''));
            Cookies.set('token', [...response.headers.get('authorization')].join(''))
            console.log("responseImmoAllAPI :" + response.headers.get('authorization'))
            return response.json()
          })

          .then((response) => {
            setUserapp(response.user.id)
            Cookies.set('id', response.user.id);
            navigate('/')
          })

      // })
  }

  return (
    <div className={Style.mainregister}>
      <h1>Se connecter</h1>
      <form onSubmit={FetchData}>
        <input type="text" placeholder='email' id="email" onChange={(e) => setEmailapp(e.target.value)}></input>
        <input type="password" placeholder='mot de passe' id="password" onChange={(e) => setPasswordapp(e.target.value)}></input>
        <button type='submit'  >Envoyer</button>

      </form>
      <div className={Style.imgregister}>
        <img src={kids_cube} className="rounded-5"></img>
      </div>
    </div>

  )
}

export default Login;