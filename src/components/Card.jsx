import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

function Card(props) {
  return (
    <li>
      <Link to={props.title}>{props.title}</Link>
    </li>
  );
}

export default Card;
