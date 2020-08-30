import React, { useEffect } from "react";

const Services = (props) => {
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return function cleanUp() {
      document.removeEventListener("click", handleClick);
    };
  });
  function handleClick() {
    console.log("Hii i am called again Service UseEffect");
  }

  return (
    <div>
      <h1>Hello This is a {props.name} page</h1>
    </div>
  );
};

export default Services;
