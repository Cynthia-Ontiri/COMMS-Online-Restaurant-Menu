import React from "react";
import { Link } from "react-router-dom";
//import Footer from "../Footer";
import "../styles/Home.css";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
    <Navbar />
    <div className="home" style={{ backgroundImage: 'logo192.jpg' }}>
      <div className="headerContainer">
        
        <h1> COMMS Pizzeria </h1>
        <p> PIZZA TO FIT ANY TASTE</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
   {/* <Footer />*/}
    </>
    
  );
}

export default Home;
