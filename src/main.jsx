import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Greeting from "./greeting.jsx";
import { Food, SpecialTest } from "./food.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Greeting />
    <Food />
    <SpecialTest />
  </StrictMode>
);
