import React from "react";
import "./Style.css";

const Card = (props) => {
  const childStyle = props.className;
  return <div className={`card ${childStyle}`}>{props.children}</div>;
};

export default Card;
