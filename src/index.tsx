import React from "react";
import { createRoot } from "react-dom/client";

import Header from "./components/header/Header";
import MenuCardSlider from "./components/sliders/menu";
import "./asset/styles/app.scss";

function App() {
  return (
    <>
      <Header />
      <MenuCardSlider />
    </>
  );
}

const root = createRoot(document.getElementById("app")!);
root.render(<App />);
