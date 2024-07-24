import React from "react";
import { FaDev } from "react-icons/fa";

import "./Ap.css";
import useNavigation from "./Components/useNavigation";
import navigationData from "./Components/navigations";

import Navbar from "./Components/Navbar";
import Tabbar from "./Components/Tabbar";

const Ap = () => {
  const { currentRoute, setCurrentRoute } = useNavigation();

  return (
    <div className=''>
      <Navbar
        navigationData={navigationData}
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
      />
      <Tabbar
        navigationData={navigationData}
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
      />
    </div>
  );
};

export default Ap