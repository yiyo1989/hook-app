import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//import { HooksApp } from './HooksApp'
//import { CounterApp } from './01-useState/CounterApp'
//import { CounterCustomHook } from './01-useState/CounterCustomHook';
//import { SimpleForm } from './02-useEffect/SimpleForm';
// import { FormCustomHook } from "./02-useEffect/FormCustomHook";
//import { MultipleCustomHook } from "./03-examples/MultipleCustomHook";
//import { FocusScreen } from "./04-useRef/FocusScreen";
import { Padre } from "./07-tarea-memo/Padre";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Padre />
  /* </StrictMode> */
);
