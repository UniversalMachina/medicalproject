import React, { useState } from 'react';
import { useTheme } from "../../themeContext"; // Import the custom hook
import TopBar from "../../components/TopBar/TopBar";
import SideMenu from "../../components/SideMenu/SideMenu";
import EvaluationContainer from "./EvaluationContainer";
import FloatingButtons from "./FloatingButtons";
import Header from "./Header";

const New_Evaulations = () => {
  const { theme } = useTheme(); // Get the current theme

  // Define the state for the list of people
  const [people, setPeople] = useState([
    "Eric Dekryger",
    "Kanishk Jagwani",
    "Thayla Ovalle PCE"
  ]);

  return (
    <div className={`w-full h-[1080px] relative overflow-hidden text-left text-sm font-poppins ${theme === "dark" ? "bg-black text-white" : "bg-white text-gray2"}`}>
      <TopBar />
      <SideMenu />
      <Header />
      <FloatingButtons />
      <EvaluationContainer people={people} />
    </div>
  );
};

export default New_Evaulations;
