import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function GrandChildOneContext() {
  const data = useContext(ThemeContext);
  console.log(data);
  return <div>GrandChildOneContext</div>;
}

export default GrandChildOneContext;
