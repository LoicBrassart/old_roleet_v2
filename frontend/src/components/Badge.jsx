import React from "react";
import { Link } from "react-router-dom";
import "./styles/Badge.scss";

export default function Badge({ linkTo, imgPath, imgAlt }) {
  return (
    <li className="Badge">
      <Link to={linkTo}>
        <img src={imgPath} alt={imgAlt} />
      </Link>
    </li>
  );
}
