import { atom } from "jotai";


// const avatar = require("../avatar.png");

export const childAtom = atom({
  name: "Athena",
  // photo: "https://unsplash.com/photos/WxJGyoqKVdA/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8YXRoZW5hfGVufDB8fHx8MTY1NjQwNTgzMQ&force=true&w=640",
  photo: require("../avatar.png")
});



// export const childAtom = atom({
//   name: "",
//   // photo: "https://unsplash.com/photos/WxJGyoqKVdA/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8YXRoZW5hfGVufDB8fHx8MTY1NjQwNTgzMQ&force=true&w=640",
//   photo: ""
// });