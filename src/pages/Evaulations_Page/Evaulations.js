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

  // Define the filter state
  const [filter, setFilter] = useState("all");

  // Filter the people based on the filter state
  const filteredPeople = people.filter(person => {
    const date = new Date(person.date);
    const today = new Date();
    if (filter === "day") {
      return date.toDateString() === today.toDateString();
    } else if (filter === "year") {
      return date.getFullYear() === today.getFullYear();
    }
    return true;
  });

  return (
    <div className={`w-full h-[1080px] relative overflow-hidden text-left text-sm font-poppins ${theme === "dark" ? "bg-black text-white" : "bg-white text-gray2"}`}>
      <TopBar />
      <SideMenu />
      <Header />
      <FloatingButtons filter={filter} setFilter={setFilter} />
      {/* Pass the filtered people state to EvaluationContainer */}
      <EvaluationContainer people={filteredPeople} />
    </div>
  );
};

export default Evaulations;
