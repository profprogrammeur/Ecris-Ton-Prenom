import { atom } from "jotai";

import Cookies from "js-cookie";

if (Cookies.get("name") === undefined) {
  Cookies.set("name", "Elsa");
  Cookies.set("photo", require("../assets/avatar-1.png"));
}

export const childAtom = atom({
  name: Cookies.get("name"),
  photo: Cookies.get("photo"),
});

