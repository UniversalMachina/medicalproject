// Clients.jsx
import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import SideMenu from "../../components/SideMenu/SideMenu";
import Table from "./Table";
import Header from "./Header";
import FloatingButtons from "./FloatingButtons";
import { useTheme } from "../../themeContext"; // Import the custom hook

const Clients = () => {

  const { theme } = useTheme(); // Get the current theme

  return (
<div className={`w-full h-[1080px] relative overflow-hidden leading-[normal] tracking-[normal] text-left text-sm text-color-black-100 font-poppins mq450:h-auto mq450:min-h-[1080px] ${theme === "dark" ? 'bg-[#3A3838]' : 'bg-white'}`}>
     

            <TopBar title={"Clients"} backUrl={"/clients"}/>
            <SideMenu />
            <FloatingButtons/>
            <Header />
      <Table />
    </div>
  );
};

export default Clients;
