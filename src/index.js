import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

import store from "./store/store";
import { Provider } from "react-redux";

import { BrowserRouter  } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
          <Provider store={store}>

    <BrowserRouter>

        <App />
    </BrowserRouter>
    </Provider>

  </React.StrictMode>,
  document.getElementById("root")
);
