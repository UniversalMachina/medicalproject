import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTheme } from "../../themeContext"; // Import the custom hook
import TopBar from "../../components/TopBar/TopBar";
import SideMenu from "../../components/SideMenu/SideMenu";
import EvaluationContainer from "./EvaluationContainer";
import FloatingButtons from "./FloatingButtons";
import Header from "./Header";

const Evaluations = () => {
  const { theme } = useTheme(); // Get the current theme

  // Define the state for the list of people with dates
  const [people, setPeople] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("mostRecent");
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch data from backend
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/people`)
      .then(response => setPeople(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Filter and sort the people based on the filter, sort, and searchTerm states
  const filteredPeople = people
    .filter(person => {
      const date = new Date(person.date);
      const today = new Date();
      const matchesSearch = person.name.toLowerCase().includes(searchTerm.toLowerCase());
      if (!matchesSearch) return false;
      if (filter === "day") {
        return date.toDateString() === today.toDateString();
      } else if (filter === "year") {
        return date.getFullYear() === today.getFullYear();
      }
      return true;
    })
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (sort === "mostRecent") {
        return dateB - dateA;
      } else {
        return dateA - dateB;
      }
    });

  return (
    <div className={`w-full h-[1080px] relative overflow-hidden text-left text-sm font-poppins ${theme === "dark" ? "bg-[#3A3838] text-white" : "bg-white text-gray2"}`}>
      <TopBar title={"Evaluations"} backUrl={"/clients"}/>
      <SideMenu theme={theme}/>
      <Header />
      <FloatingButtons filter={filter} setFilter={setFilter} setSort={setSort} setSearchTerm={setSearchTerm} />
      <EvaluationContainer people={filteredPeople} />
    </div>
  );
};

export default Evaluations;
