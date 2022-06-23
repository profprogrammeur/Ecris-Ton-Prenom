import React from "react";
import Child from "./Child";
import { useAtom, atom } from "jotai";
// import { userAtom } from "../stores/auth";



function Children(props) {
  // const [username,setUsername] = useAtom(usernameAtom)
  // const [user, setUser] = useAtom(userAtom);
  // setUser("Bobby")
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 ">
     {/* { username} */}
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
    </div>
  );
}

export default Children;
