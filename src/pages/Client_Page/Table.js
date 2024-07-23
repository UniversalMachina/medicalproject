// src/components/Table.jsx
import React, { useEffect, useState } from "react";
import ClientListHeader from "./ClientListHeader";
import ClientListItem from "./ClientListItem";
import Pagination from "./Pagination";

const Table = () => {
  const [clients, setClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setClients(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleDelete = (id) => {
    const updatedClients = clients.filter((client) => client.id !== id);
    setClients(updatedClients);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredClients = clients.filter((client) =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentClients = filteredClients.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="absolute top-[215px] left-[351px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1492px] flex flex-col items-start justify-start max-w-full text-xs text-black1 font-montserrat">
      <div className="w-[1110px] bg-gray-100 flex flex-row items-center justify-start p-4 box-border max-w-full">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full">
          <div className="w-36 flex flex-row items-center justify-center gap-[12px]">
            <div className="relative font-medium inline-block min-w-[34px]">Show</div>
            <div className="flex-[0.5814] rounded-lg bg-gray-200 flex flex-row items-center justify-start py-2 px-[9px] gap-[4px] mq450:w-[calc(100%_-_40px)]">
              <div className="relative font-medium inline-block min-w-[13px]">10</div>
              <img className="h-2 w-2 relative overflow-hidden shrink-0" alt="" src="/bicaretdownfill.svg" />
            </div>
            <div className="flex-1 relative font-medium inline-block min-w-[43px]">entries</div>
          </div>
          <div className="flex-1 rounded-lg box-border flex flex-row items-center justify-start py-1.5 px-2 gap-[8px] min-w-[591px] max-w-full text-darkgray border-[1px] border-solid border-darkgray mq825:min-w-full">
            <img className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]" alt="" src="/akariconssearch.svg" />
            <input
              type="text"
              className="flex-1 relative font-medium inline-block max-w-[calc(100%_-_24px)]"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>
      <ClientListHeader />
      {currentClients.map((client) => (
        <ClientListItem
          key={client.id}
          id={client.id}
          name={client.name}
          contactInfo={client.contactInfo}
          clinician={client.clinician}
          status={client.status}
          statusColor={client.statusColor}
          statusBgColor={client.statusBgColor}
          onDelete={handleDelete}
        />
      ))}
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={filteredClients.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Table;
