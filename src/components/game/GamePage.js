import React from "react";
import { useParams } from 'react-router';
import { useState } from "react";
import Cookies from 'js-cookie';
import { Star } from 'react-bootstrap-icons';
import { StarFill } from 'react-bootstrap-icons';
import { Link, useNavigate,Redirect } from "react-router-dom";


  const GamePage = () => {

  // const { id } = useParams();
  // const children = JSON.parse(localStorage.getItem('children'))
  // let child = children.find(x => x.id === parseInt(id))
  // console.log(child.child_name)


    const navigate = useNavigate()
 
    let name = Cookies.get('kid_name').toLocaleUpperCase()
    let selfi = Cookies.get('kid_photo')
    console.log(Cookies.get('kid_photo'))
    console.log(Cookies.get('kid_name'))
    let stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(<Star className="m-2 " style={{ color: "gold" }} />)
    }

    // let name = "Boby"
    // let selfi = "https://unsplash.com/photos/mou0S7ViElQ/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU1OTgzMDE3&force=true&w=640"

    const { level, updateLevel } = useState("0")

    const [score, setScore] = React.useState(0)
    // const [stars, setStars] = React.useState([])

    const checkName = (i) => {
      console.log("check")
      if (i === 4) {
        if (score > 3) {
          setScore(prevScore => prevScore + 1); 
          // playSound(require('./ding.mp3'))

          // if (level < 9) { updateLevel(level + 1) } else (updateLevel(1))

          // playSound(require('./bravo.mp3'))
          setTimeout(() => {
          
            // navigation.navigate('IMAGE', {
            //   itemId: name,
            //   selfie: selfi,
            // });
            console.log("Bravo")
            setScore(0)
            navigate("/game/win") 
          }, 500)
        } else { setScore(prevScore => prevScore + 1)
          
          // playSound(require('./ding.mp3'))
         }
      }
      else {
        if (score > 0) { setScore(prevScore => prevScore - 1); 
          // playSound(require('./error.mp3')) 
        }
        else { setScore(0); 
        // playSound(require('./error.mp3')) 
      }
      }
    }
    //colors
    let colors = ["mediumpurple", "magenta", "limegreen", "deepskyblue", "orange"]
    const shuffledArr = array => array.sort(() => 0.5 - Math.random());
    colors = shuffledArr(colors)
    // const color1 = colors.pop()
    const color4 = colors[4]
    console.log(colors)


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
    console.log(items)
    // const colors = ["DarkMagenta"]

    // shuffle items array
    const itemsShuffled = items.map(a => ({ sort: Math.random(), value: a })).sort((a, b) => a.sort - b.sort).map(a => a.value);
    
  // for (let i=0;i<(5-score);i++){
  //   stars.push(<Star className="m-2" />)
  // }

    
      
  // for (let i = 0; i < score; i++) {
  //   setStars(prev=>
  //      prev.push(<StarFill className="m-2 " style={{color : "darkorange"}} />)
  //   )
  
  
  
    for (let i = 0 ;i<score; i++) {

     stars.pop()
      stars.unshift(<StarFill className="m-2 " style={{ color: "darkorange" }} />)
  
    }



  return(
    <div className="container d-flex flex-column  align-items-center bg-light rounded">
     
   
  
      {/* <h5 className="m-3" >score : {score}</h5> */}
      <div className="flex bg-light  m-3">
        {stars}
      </div>
      
      <img src={selfi} style={{ marginLeft: 0, marginBottom: 6, width: 300, borderRadius: 50 }} />
      <p>prénom à trouver : {name}</p>
        

      <div className="container d-flex  justify-content-evenly m-5">
      {itemsShuffled}
      </div>
   
     
    </div>
   );
};

export default GamePage;
