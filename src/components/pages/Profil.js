import React, { useEffect,useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useAtom } from "jotai";
import { useAtomValue } from "jotai";
import { userAtom, authorizationAtom } from '../../stores/auth';
import { API_URL } from '../../stores/api_url';
import Style from './style.module.css';
import kids_train from '../../ressources/kids_train.jpg';
import Cookies from 'js-cookie';
import axios from "axios";

console.log("cookie : " + Cookies.get('kid_name'))
const email = Cookies.get('email')
const id = Cookies.get('id')
// (Cookies.get('token'))
// const token = Cookies.get('token')

// const kid_name = Cookies.get('kid_name')

// const [kid_name, setKid_name] = useState(Cookies.get('kid_name'));

// const kid_photo = Cookies.get('kid_photo')
const Profil = () => {
  const [kid_name, setKid_name] = useState(Cookies.get('kid_name'));
  const [kid_photo, setKid_photo] = useState(Cookies.get('kid_photo'));
  

  
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
  const handleSave = async () => {
    // () => {
      const data = {
        kid_name: kid_name,
        kid_photo: kid_photo
      }
      fetch(API_URL + 'users/' + "1", {
        method: 'post',
        headers: {
          'Authorization': jwt,
          'Content-Type': 'application/json'
        }
      })
        .then((response) => response.json())
        .then((response) => {
          // setHouse(response);
          if (response.user_id != idAtom) {
            navigate('/');
          }
          setEmailapp(response.emailapp);
          // setPrice(response.price);
      
        })

    // }, []
  // )
  }

  function putAPIData() {
    const token = Cookies.get('token')

    Cookies.set('kid_name', kid_name)
    Cookies.set('kid_photo', kid_photo)
    const data = {
      // id: 1,
      child_name: kid_name,
      child_image: kid_photo
      // token: token
    }
    const config = {
      headers:{
        Authorization: token,
      }
    }
    console.log("putAPI : " + token)
    
    return axios.patch("http://localhost:3000/member-update", data,config).then((response) => console.log('user updated' + response));
  }


  // const photo = kids_train
  const photo = kid_photo
  // if (kid_photo !== "null"){photo = kids_train}

  // console.log("photo : " + kid_photo)
  // console.log(kid_photo == "null")


// async editProfile(data) {
//   const url = '/member-update'
//   const config = {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     }
//   }
//   const response = await APIRequest.patch(url, data, config)
//   return response;
// }

// const handleSave = async () => {
//   console.log("test sent")
//   const data = {
//     kid_name: kid_name,
//     kid_photo: kid_photo
//   }

//   const formData = new FormData();
//   Object.keys(data).forEach((key) => {
//     formData.append(key, data[key])
//   });

  // try {
  //   const response = await APIManager.editProfile(formData);
  //   setUser(response.data)
  //   setModalIsOpen(false);
  // } catch (error) {
  //   console.warn(error);
  // }
// };





  return (
    <div className={Style.mainregister}>
      <h1>Profil</h1>
      <div >
        {/* email : <input type="text" placeholder={email} id="email" onChange={(e) => setEmailapp(e.target.value)}></input> */}
        prenom enfant : <input type="text" placeholder={kid_name} id="kid_name" onChange={(e) => setKid_name(e.target.value)}></input>
        photo enfant : <input type="text" placeholder={kid_photo} id="kid_photo" onChange={(e) => setKid_photo(e.target.value)}></input>
  {/* <input type="password" placeholder='mot de passe' id="password" onChange={(e) => setPasswordapp(e.target.value)}></input> */}
        <button className="btn btn-success" type='submit' onClick={() => putAPIData()}>Envoyer</button>

      </div>
      <div className={Style.imgregister}>
        <img src={kid_photo} className="rounded-5" alt="Photo de l'enfant"></img>
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
