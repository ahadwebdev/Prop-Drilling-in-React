import React from "react";
import { useState } from "react";
import Component2 from "./Component2";

const Component1 = () => {
  const [user, setUser] = useState("Alex");
  return (
    <div>
      <Component2 myuser={user} />
    </div>
  );
};

export default Component1;
