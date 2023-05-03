import React from "react";
import { Route,Routes } from "react-router-dom";
import Events from "./component/Events";
import Hero from "./component/Hero";
import  Nav  from "./navbar/Nav";
import Navbar from "./navbar/Navbar";
import Countdown from "./component/counting"
import Cards from "./component/Cards";
import Rout from "./component/rout";
import Route1 from "./component/route1";
import Route2 from "./component/route2";
import Route3 from "./component/route3";
import Route4 from "./component/route4";
import Footer from "./component/Footer";



function App() {
  return (
    <>
    <Navbar/>
    <Nav/>
    <Hero/>
    <Events/>
    <Rout/>
    <Routes>
      <Route path="/" element={<Route1/>}/>
      <Route path="route2" element={<Route2/>}/>
      <Route path="route3" element={<Route3/>}/>
      <Route path="route4" element={<Route4/>}/>
    </Routes>
    <Countdown/>
    <Cards/>
    <Footer/>

    </>
  );
}

export default App;
