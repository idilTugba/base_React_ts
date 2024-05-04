import React from "react";
import { header } from "./styles.module.scss";

import { ReactComponent as Logo } from "./../../asset/image/menu.svg";

export default function Header() {
  return (
    <header>
      HEADER
      <div className={header}>
        <Logo />
      </div>
    </header>
  );
}
