import * as React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { ColorModeScript } from "@chakra-ui/react";
ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
