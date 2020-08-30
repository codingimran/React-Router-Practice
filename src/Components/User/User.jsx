import React from "react";
import { useParams } from "react-router-dom";
const User = () => {
  const { fName, lName } = useParams();
  return (
    <div>
      <h1>
        users {fName} {lName} page
      </h1>
    </div>
  );
};

export default User;
