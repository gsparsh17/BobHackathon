import React from "react";
import { CgMonday } from "react-icons/cg";
import classNames from "classnames";
import "./Navbar.css";
import Register from "../Routes/Register.jsx";

const Navbar = ({ navigationData, currentRoute, setCurrentRoute }) => {
  function up1(){
    document.getElementById("up1").style.display="block";
  }
  return (
    <div className="bg-orange-50 z-40">
    <nav className="hidden md:flex flex-row items-center justify-between px-8 pb-10 h-12 pt-12 rounded-b-2xl">
      <span className="w-32 text-4xl text-gray-800 -mb-2;">
        <CgMonday/>
      </span>
      <ul className="flex flex-row self-end text-center">
        {navigationData.map((item, index) => (
          <li
            className={classNames([
              "w-28 text-gray-400 hover:text-yellow-500 cursor-pointer font-medium tracking-wide text-12 flex items-start justify-center",
              currentRoute === item && "text-yellow-500 border-b-2 border-red-500",
            ])}
            key={index}
            onClick={() => setCurrentRoute(item)}
          >
            {item}
          </li>
        ))}
      </ul>
      <button onClick={up1} className=" hover:bg-gray-50 border-2 border-red-500 text-sm text-yellow-500 py-3 px-5 rounded-lg font-medium tracking-wide leading-none;">Register</button>
    </nav>
    <div id="up1" className="hidden">
    <Register/>
    </div>
    </div>
  );
};

export default Navbar;