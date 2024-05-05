import React from "react";
import { createRoot } from "react-dom/client";

import "./asset/styles/app.scss";

function App() {
  return (
    <>
      <div>Welcome new project</div>
    </>
  );
}

const root = createRoot(document.getElementById("app")!);
root.render(<App />);
