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
    <div className={`w-full h-[1080px] relative overflow-hidden text-left text-sm font-poppins ${theme === "dark" ? "bg-[#3A3838] text-white" : "bg-white text-gray2"}`}>
      <TopBar title={"Interviews"} backUrl={`/`}/>
      <SideMenu />
      <Header />
      <FloatingButtons filter={filter} setFilter={setFilter} setSort={setSort} id={id}/>
      {/* Pass the filtered and sorted interviews state to InterviewContainer */}
      <InterviewContainer people={filteredInterviews} id={id} />
      {/* <p>No evaluation found for {name} on {date}</p> */}

    </div>
  );
};

export default ProfileEvaluations;
