import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./Components/Main";
import Reg from "./Components/Reg";
import ErrorPage from "./Pages/ErrorPage";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import UIButton from "./Components/UIButton";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/reg" element={<Reg />} />
        <Route path="/" element={<Main />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
