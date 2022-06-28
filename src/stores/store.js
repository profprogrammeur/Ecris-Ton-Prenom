import { atom } from "jotai";

import Cookies from "js-cookie";
// Cookies.set("kid_name", response.user.child_name);
// Cookies.set("kid_photo", response.user.child_image);
// // const avatar = require("../avatar.png");

// function conditionalPutAPIData() {
  console.log (Cookies.get("name"))
  if (
    Cookies.get("name") == undefined){
    Cookies.set("name", "Athena")
    Cookies.set("photo", require("../avatar.png"))
    }


  //   kid_name !== state.name ||
  //   kid_photo !== state.photo
  // ) {
  //   console.log(state)
  //   putAPIData();
  //   console.log(state)

  // }
// }

export const childAtom = atom({
  name: Cookies.get("name"),
  // photo: "https://unsplash.com/photos/WxJGyoqKVdA/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8YXRoZW5hfGVufDB8fHx8MTY1NjQwNTgzMQ&force=true&w=640",
  photo: Cookies.get("photo")
});



// export const childAtom = atom({
//   name: "Athena",
//   // photo: "https://unsplash.com/photos/WxJGyoqKVdA/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8YXRoZW5hfGVufDB8fHx8MTY1NjQwNTgzMQ&force=true&w=640",
//   photo: require("../avatar.png")
// });

