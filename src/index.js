import { StrictMode } from "react";
import ReactDOM from "react-dom";

import AppComp from "./App";
const array = [1, 2, 3, 4, 5];
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AppComp data={array} />
  </StrictMode>,
  rootElement
);
