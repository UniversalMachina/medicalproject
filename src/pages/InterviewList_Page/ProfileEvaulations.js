import React, { useState, useEffect } from 'react';
import { useTheme } from "../../themeContext"; // Import the custom hook
import TopBar from "../../components/TopBar/TopBar";
import SideMenu from "../../components/SideMenu/SideMenu";
import InterviewContainer from "./InterviewContainer";
import FloatingButtons from "./FloatingButtons";
import Header from "./Header";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Paperwork from './Paperwork';

const ProfileEvaluations = () => {
  const { theme } = useTheme(); // Get the current theme
  const { id } = useParams(); 

  const [interviews, setInterviews] = useState([]);

  // Define the filter and sort states
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("mostRecent");

  useEffect(() => {
    if (id) {
      // Fetch interviews for the selected person
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/interviews/${id}`)
        .then(response => setInterviews(response.data))
        .catch(error => console.error('Error fetching interviews:', error));
    }
  }, [id]);

  // Filter and sort the interviews based on the filter and sort states
  const filteredInterviews = interviews
    .filter(interview => {
      const date = new Date(interview.interview_date);
      const today = new Date();
      if (filter === "day") {
        return date.toDateString() === today.toDateString();
      } else if (filter === "year") {
        return date.getFullYear() === today.getFullYear();
      }
      return true;
    })
    .sort((a, b) => {
      const dateA = new Date(a.interview_date);
      const dateB = new Date(b.interview_date);
      if (sort === "mostRecent") {
        return dateB - dateA;
      } else {
        return dateA - dateB;
      }
    });

  return (
    <div className={`min-h-screen overflow-y-auto overflow-x-hidden relative text-left text-sm font-poppins ${theme === "dark" ? "bg-[#] text-white" : "bg-white text-gray2"}`}>
      <TopBar title={"Interviews"} backUrl={`/`}/>
      <div className="flex">
        <SideMenu />
        <div className="flex-grow">
          <Header />
          <FloatingButtons filter={filter} setFilter={setFilter} setSort={setSort} id={id}/>
          <InterviewContainer people={filteredInterviews} id={id} />
        </div>
      </div>
    </div>
  );
};

export default ProfileEvaluations;
