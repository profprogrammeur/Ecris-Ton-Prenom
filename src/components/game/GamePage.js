import React from "react";
import { useParams } from 'react-router';
import { useState } from "react";
import Cookies from 'js-cookie';
import { Star } from 'react-bootstrap-icons';
import { StarFill } from 'react-bootstrap-icons';
import { Link, useNavigate,Redirect } from "react-router-dom";

  const GamePage = () => {
    let level = parseInt(Cookies.get("level"))
    const navigate = useNavigate()
    let name = Cookies.get('kid_name').toLocaleUpperCase()
    let selfi = Cookies.get('kid_photo') 
    let stars = []

    for (let i = 0; i < 5; i++) {
      stars.push(<Star className="m-2 "  style={{ color: "gold"}} />)
    }

    const [score, setScore] = React.useState(0)
    // const [stars, setStars] = React.useState([])
    console.log("init_level = " + level)
    const checkName = (i) => {
      console.log("check")
      if (i === 4) {
        if (score > 3) {
          setScore(prevScore => prevScore + 1); 
          if (level < 9) { level += 1 } else (level = 1);   
          setTimeout(() => { 
            Cookies.set("level",level)
            console.log("Bravo")
            console.log("level = "+ level)
            setScore(0)
            navigate("/game/win")
          }
          , 500)
        } else { setScore(prevScore => prevScore + 1)
         }
      }
      else {
        if (score > 0) { setScore(prevScore => prevScore - 1); 
        }
        else { setScore(0); 
      }
      }
    }

    let colors = ["mediumpurple", "magenta", "limegreen", "deepskyblue", "orange"]
    const shuffledArr = array => array.sort(() => 0.5 - Math.random());
    colors = shuffledArr(colors)
    const color4 = colors[4]

    const items = [
      <button key={name + 4} onClick={() => checkName(4)} className="fw-bold" style={{ fontSize: 30, background: color4, borderRadius: 20, marginBottom: 6, padding: 10  }} color={'white'} > {name} </button>
    ]

    // create a random word with letter from name
    const randomizeName = (name) => {
      const nameRandom = []
      let nameArray = name.split('')
      for (let i = 0; i < name.length; i++) {
        let num = Math.floor(Math.random() * nameArray.length)
        nameRandom.push(nameArray[num])
        nameArray.splice(num, 1)
      }
      return nameRandom.join('')
    }

    // push random words exept name
    for (let i = 0; i < 4; i++) {
      let goodRandomizeName = randomizeName(name)
      if (goodRandomizeName !== name) {
        let color = colors[i]
        items.push(<button key={goodRandomizeName + i} onClick={() => checkName(i)} className="fw-bold" style={{ transition: "transform 2", fontSize:30, background: color, borderRadius: 20, marginBottom: 6, padding: 10 }} color={'white'} >
          {goodRandomizeName } </button>)
      }
      else (i -= 1)
    }

    // shuffle items array
    const itemsShuffled = items.map(a => ({ sort: Math.random(), value: a })).sort((a, b) => a.sort - b.sort).map(a => a.value);
    
    for (let i = 0 ;i<score; i++) {
     stars.pop()
      stars.unshift(<StarFill className="m-2 " style={{ color: "darkorange" }} />)
    }

  return(
    <div className="container d-flex flex-column  align-items-center bg-light rounded" cursor="not-allowed">   
      {/* <h5 className="m-3" >score : {score}</h5> */}
      <p style={{ fontSize: 15 }}>niveau : {level}</p>
      <div className="flex bg-light  m-3">
        {stars}
      </div>
      <img src={selfi} style={{ marginLeft: 0, marginBottom: 6, width: 300, borderRadius: 50 }}/>
      <p style={{fontSize: 15}}>prénom à trouver :</p>
      <p>{name}</p>
      <div className="container d-flex  justify-content-evenly m-5">
      {itemsShuffled}
      </div>
    </div>
   );
};

export default GamePage;





  // for (let i=0;i<(5-score);i++){
  //   stars.push(<Star className="m-2" />)
  // }

    
      
  // for (let i = 0; i < score; i++) {
  //   setStars(prev=>
  //      prev.push(<StarFill className="m-2 " style={{color : "darkorange"}} />)
  //   )
  
  