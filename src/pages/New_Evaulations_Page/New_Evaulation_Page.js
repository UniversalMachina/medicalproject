import React, { useState } from 'react';
import { useTheme } from "../../themeContext"; // Import the custom hook
import TopBar from "../../components/TopBar/TopBar";
import SideMenu from "../../components/SideMenu/SideMenu";
import NewEvaluationInputs from "./NewEvaluationInputs";
import Header from "./Header";

const New_Evaulations = () => {
  const { theme } = useTheme(); // Get the current theme

  // Define the state for the list of people

  return (
    <div className={`w-full h-[1080px] relative overflow-hidden text-left text-sm font-poppins ${theme === "dark" ? "bg-[#3A3838] text-white" : "bg-white text-gray2"}`}>
      <TopBar title={"Add Evaluations"} backUrl={"/"}/>
      <SideMenu activePage="Evaluations" />
      <Header />

      <NewEvaluationInputs />
    </div>
  );
};

export default New_Evaulations;
