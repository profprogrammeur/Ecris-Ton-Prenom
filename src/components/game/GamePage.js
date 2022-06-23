import React from "react";
import { useParams } from 'react-router';
import { useState } from "react";
import Cookies from 'js-cookie';




  const GamePage = () => {

  // const { id } = useParams();
  // const children = JSON.parse(localStorage.getItem('children'))
  // let child = children.find(x => x.id === parseInt(id))
  // console.log(child.child_name)



 
    let name = Cookies.get('kid_name')
    let selfi = Cookies.get('kid_photo')
    console.log(Cookies.get('kid_photo'))
    console.log(Cookies.get('kid_name'))

    // let name = "Boby"
    // let selfi = "https://unsplash.com/photos/mou0S7ViElQ/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU1OTgzMDE3&force=true&w=640"

    const { level, updateLevel } = useState("0")

    const [score, setScore] = React.useState(0)

    const checkName = (i) => {
      console.log("check")
      if (i === 4) {
        if (score > 3) {
          setScore(prevScore => prevScore + 1); 
          // playSound(require('./ding.mp3'))
          
          if (level < 9) { updateLevel(level + 1) } else (updateLevel(1))

          // playSound(require('./bravo.mp3'))
          setTimeout(() => {
            // navigation.navigate('IMAGE', {
            //   itemId: name,
            //   selfie: selfi,
            // });
            setScore(0)
          }, 4000)
        } else { setScore(prevScore => prevScore + 1); 
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
      <button key={name + 4} onClick={() => checkName(4)} style={{ background: color4, borderRadius: 20, marginBottom: 6, padding: 10  }} color={'white'} > {name} </button>
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
        items.push(<button key={goodRandomizeName + i} onClick={() => checkName(i)} style={{ background: color, borderRadius: 20, marginBottom: 6, padding: 10 }} color={'white'} >
          {goodRandomizeName } </button>)
      }
      else (i -= 1)
    }
    console.log(items)
    // const colors = ["DarkMagenta"]

    // shuffle items array
    const itemsShuffled = items.map(a => ({ sort: Math.random(), value: a })).sort((a, b) => a.sort - b.sort).map(a => a.value);




  return(
    <div className="container d-flex flex-column  align-items-center">
     
      <h1>Game</h1>
      <h6>prénom à trouver : {name}</h6>
      <p>score : {score}</p>
      
      
        <img src={selfi} style={{ marginLeft: 0, marginBottom: 6, width: 110, borderRadius: 50 }} />

     
      {itemsShuffled}
      {/* <div className="row row-cols-1 row-cols-md-3 g-4 ">
        {props.children.map((child) => {
          return (
            <Child
              title={child.child_name}
              image_url={child.child_image}
              id={child.id}
              key={child.id}
            />
          );
        })}

      </div> */}
     
    </div>
   );
};

export default GamePage;
