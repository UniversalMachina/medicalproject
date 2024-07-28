import React, { useState } from 'react';
import { useTheme } from "../../themeContext"; // Import the custom hook
import TopBar from "../../components/TopBar/TopBar";
import SideMenu from "../../components/SideMenu/SideMenu";
import EvaluationContainer from "./EvaluationContainer";
import FloatingButtons from "./FloatingButtons";
import Header from "./Header";

const Evaulations = () => {
  const { theme } = useTheme(); // Get the current theme

  // Define the state for the list of people with dates
  const [people, setPeople] = useState([
    { name: "Eric Dekryger", date: "Apr, 10 2024" },
    { name: "Kanishk Jagwani", date: "Apr, 11 2024" },
    { name: "Thayla Ovalle PCE", date: "Apr, 12 2024" }
  ]);

  return (
    <div className={`w-full h-[1080px] relative overflow-hidden text-left text-sm font-poppins ${theme === "dark" ? "bg-black text-white" : "bg-white text-gray2"}`}>
      <TopBar />
      <SideMenu />
      <Header />
      <FloatingButtons />
      {/* Pass the people state to EvaluationContainer */}
      <EvaluationContainer people={people} />
    </div>
  );
};

export default Evaulations;
