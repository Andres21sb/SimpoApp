import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./components/login/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  

  return (
    <div className="h-100 ">
      <Header/>
      <Login/>
      <Footer/>
    </div>
  );
}

export default App;
