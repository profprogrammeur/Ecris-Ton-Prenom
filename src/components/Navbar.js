import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { useAtom } from 'jotai';
import { userAtom, authorizationAtom } from '../stores/auth';
import { API_URL } from "../stores/api_url";
// import './style.module.css';
import Cookies from 'js-cookie';

function Navbar() {

  const [authorizationapp, setAuthorizationapp] = useAtom(authorizationAtom);
  const [id, setId] = useAtom(userAtom);
  const navigate = useNavigate()

  const logout = () => {

    Cookies.remove('id')
    Cookies.remove('email')
    Cookies.remove('kid_name')
    Cookies.remove('kid_photo')

    console.log(Cookies.get())
    
    fetch(API_URL + 'users/sign_out', {
      method: 'delete',
      headers: {
        'Authorization': authorizationapp,
        'Content-Type': 'application/json'
      },
    })
      .then((response) => { return response.json() })
      .then((response) => {
        setAuthorizationapp('');
        setId('');
        Cookies.set('id', "")
        Cookies.set('token', "")
        navigate('/')
      })
  }

  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <svg
            className="bi me-2"
            width="40"
            height="32"
            role="img"
            aria-label="Bootstrap"
          ></svg>
        </a>

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
       

        {authorizationapp === '' ?
          <> 
            <Link to={`/login`}>  
            <button type="button" className="btn btn-outline-secondary me-2">
              SE CONNECTER
            </button>
            </Link>
            <Link to={`/register`}>
            <button type="button" className="btn btn-secondary">
              S'INSCRIRE
            </button>
            </Link>
          </>
          :
            <> <Link to={`/profil`}>
              <button type="button" className="btn btn-outline-secondary me-2">
                PROFIL
              </button>
            </Link>
            <Link to={`/contact`}>
                <button type="button" onClick={logout} className="btn btn-secondary">
              SE DECONNECTER
            </button>
            </Link>
          </>
              }

           </div>
      </header>
    </div>
  );
}

export default Navbar;
