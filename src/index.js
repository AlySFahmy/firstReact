import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/css/bootstrap.min.css";
import "bootstrap/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./index.css";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About";
import Contact from "./Components/CONTACT/Contact";
import Portfolio from "./Components/Portfolio/Portfolio";
import Modal from "./Components/Portfolio/Modal";
import Error from "./Components/Error/Error";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "startreact", element: <Home /> },
      {
        path: "portfolio",
        element: <Portfolio />,
        children: [{ path: "modal", element: <Modal /> }],
      },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <Error /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

reportWebVitals();

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
