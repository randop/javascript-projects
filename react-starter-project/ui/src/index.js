"use strict";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./styles.css";
import "./styles.less";

const mountNode = document.getElementById("app");
ReactDOM.render(<App name="World" />, mountNode);