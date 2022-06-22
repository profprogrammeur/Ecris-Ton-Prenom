import React from "react";
import Child from "./Child";

function Children(props) {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 ">
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
