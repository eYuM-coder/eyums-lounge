import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Rules from "./pages/Rules";
import Events from "./pages/Events";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Img from "./pages/Img";
import NotFound from "./pages/404";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/rules" Component={Rules} />
        <Route path="/img/:imageName" Component={Img} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </div>
  );
}
