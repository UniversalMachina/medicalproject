// Clients.jsx
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Table from "./Table";

const Clients = () => {
  return (
    <div className="w-full h-[1080px] relative bg-white overflow-hidden leading-[normal] tracking-[normal] text-left text-sm text-color-black-100 font-poppins mq450:h-auto mq450:min-h-[1080]">
      {/* <Header title="Clients" buttonLabel="+ Add Client" buttonOnClick={() => alert("Add Client")} />
      <Sidebar /> */}
      <Table />
    </div>
  );
};

export default Clients;
