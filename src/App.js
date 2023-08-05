import React from "react";
// import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/Home";
import DetailPage from "./components/DetailPage";
import { Routes,Route } from "react-router-dom";



const App = () => {



  return(

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/detail/:id" element={<DetailPage/>} />
      </Routes>
  )
}


export default App;