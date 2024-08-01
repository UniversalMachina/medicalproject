import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import ClientListHeader from "./ClientListHeader";
import ClientListItem from "./ClientListItem";
import Pagination from "./Pagination";
import debounce from "lodash.debounce";

const Table = () => {
  const [clients, setClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3); // Set this to 3
  const [filteredClients, setFilteredClients] = useState([]);
  const [currentClients, setCurrentClients] = useState([]);

  useEffect(() => {
    if (clients.length === 0) {
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/people`)
        .then((response) => {
          setClients(response.data);
          setFilteredClients(response.data);
          updateCurrentClients(response.data, 1);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setClients([]);
        });
    }
  }, [clients]);

  useEffect(() => {
    updateFilteredClients();
  }, [searchTerm, clients]);

  useEffect(() => {
    updateCurrentClients(filteredClients, currentPage);
  }, [filteredClients, currentPage, itemsPerPage]);

  const updateFilteredClients = () => {
    const filtered = clients.filter((client) =>
      client.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredClients(filtered);
    setCurrentPage(1);
    updateCurrentClients(filtered, 1);
  };

  const updateCurrentClients = (filtered, page) => {
    const indexOfLastClient = page * itemsPerPage;
    const indexOfFirstClient = indexOfLastClient - itemsPerPage;
    setCurrentClients(filtered.slice(indexOfFirstClient, indexOfLastClient));
  };

  const handleDelete = useCallback((id) => {
    const updatedClients = clients.filter((client) => client.id !== id);
    setClients(updatedClients);
    updateFilteredClients();
  }, [clients]);

  const debouncedHandleSearch = useCallback(
    debounce((value) => {
      setSearchTerm(value);
      setCurrentPage(1);
    }, 300),
    []
  );

  const handleSearch = (event) => {
    debouncedHandleSearch(event.target.value);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="absolute top-[235px] left-[351px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1492px] flex flex-col items-start justify-start max-w-full text-xs text-black1 font-montserrat">
      <div className="w-[1110px] bg-gray-100 flex flex-row items-center justify-start p-4 box-border max-w-full">
        <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full">
          <div className="w-36 flex flex-row items-center justify-center gap-[12px]">
            <div className="relative font-medium inline-block min-w-[34px]">Show</div>
            <div className="flex-[0.5814] rounded-lg bg-gray-200 flex flex-row items-center justify-start py-2 px-[9px] gap-[4px] mq450:w-[calc(100%_-_40px)]">
              <div className="relative font-medium inline-block min-w-[13px]">{itemsPerPage}</div>
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
          date={client.date}
          evaluatedParentFirstName={client.evaluated_parent_first_name}
          evaluatedParentLastName={client.evaluated_parent_last_name}
          childFirstName={client.child_first_name}
          childLastName={client.child_last_name}
          childCollateralFirstName={client.child_collateral_first_name}
          childCollateralLastName={client.child_collateral_last_name}
          parentCollateralFirstName={client.parent_collateral_first_name}
          parentCollateralLastName={client.parent_collateral_last_name}
          otherContactFirstName={client.other_contact_first_name}
          otherContactLastName={client.other_contact_last_name}
          onDelete={() => handleDelete(client.id)}
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
