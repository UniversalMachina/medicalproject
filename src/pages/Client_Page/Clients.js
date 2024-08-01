// Clients.jsx
import React from "react";
import TopBar from "../../components/TopBar/TopBar";
import SideMenu from "../../components/SideMenu/SideMenu";
import Table from "./Table";
import Header from "./Header";

const Clients = () => {
  return (
    <div className="w-full h-[1080px] relative bg-white overflow-hidden leading-[normal] tracking-[normal] text-left text-sm text-color-black-100 font-poppins mq450:h-auto mq450:min-h-[1080]">
     

            <TopBar title={"Clients"} backUrl={"/clients"}/>
            <SideMenu />
            <Header />
      <Table />
    </div>
  );
};

export default Clients;
