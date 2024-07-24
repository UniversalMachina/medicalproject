import React from "react";
import { useTheme } from "../../themeContext"; // Import the custom hook
import TopBar from "../../components/TopBar/TopBar";
import SideMenu from "../../components/SideMenu/SideMenu";
import EvaluationContainer from "./EvaluationContainer";
// import FloatingButtons from "./FloatingButtons";
// import Header from "./Header";

const Evaulations = () => {
  const { theme } = useTheme(); // Get the current theme

  return (
    <div className={`w-full h-[1080px] relative overflow-hidden text-left text-sm font-poppins ${theme === "dark" ? "bg-black text-white" : "bg-white text-gray2"}`}>
      <TopBar />
      <SideMenu />
      <EvaluationContainer />
      {/* <FloatingButtons /> */}
      {/* <Header /> */}
    </div>
  );
};

export default Evaulations;
