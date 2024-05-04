import React from "react";
import { card } from "./styles.module.scss";

import img from "./../../../asset/image/123.png";

export default function MenuCardSlider() {
  return (
    <div className={card}>
      <img src={img} alt="" />
      <p>text</p>
    </div>
  );
}
