import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
//component file
import TodoContainer from "./components/TodoContainer";
import "./index.css";

const root = createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </React.StrictMode>
);
