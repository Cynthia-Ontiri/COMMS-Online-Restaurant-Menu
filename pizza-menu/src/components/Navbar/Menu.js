import React from "react";
import { MenuList } from "../../helpers/MenuList";
import MenuItem from "../MenuItem";
import "../styles/Menu.css";
import Navbar from "./Navbar";

function Menu() {
  return (
    <>
    <Navbar />
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div class= "search-container">
        <input type= "text" placeholder= "Enter pizza"/>
      </div>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
    </>
    
  );
}

export default Menu;
