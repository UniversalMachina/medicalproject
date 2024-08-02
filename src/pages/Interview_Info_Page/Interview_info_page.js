import React, { useState, useEffect } from "react";
import { useTheme } from "../../themeContext"; // Import the custom hook
import TopBar from "../../components/TopBar/TopBar";
import SideMenu from "../../components/SideMenu/SideMenu";
import { useParams } from "react-router-dom";
import axios from "axios";
import InterviewDetails from "./InterviewDetails"; // Import the new InterviewDetails component
import Transcription from "./Transcription"; // Import the Transcription component
import Paperwork from "./Paperwork"; // Import the Paperwork component

const Interview_info_page = () => {
  const { theme } = useTheme(); // Get the current theme
  const { id, interviewid } = useParams(); // Get the URL parameters

  const [interviewDetails, setInterviewDetails] = useState({
    interview_date: "",
    interviewer_name: "",
    interview_type: "",
    audio_file: "" // Add audio_file to the state
  });

  const [isTranscriptionAvailable, setIsTranscriptionAvailable] = useState(false);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/interviews/${id}/${interviewid}`
      )
      .then((response) => {
        setInterviewDetails(response.data);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the interview details!",
          error
        );
      });
  }, [id, interviewid]);

  return (
    <div
      className={`w-full h-[1080px] text-left text-sm font-poppins ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-gray2"
      }`}
    >
      <TopBar title={"Interview Info"} backUrl={`/evaluation/${id}`} />
      <SideMenu />
      <InterviewDetails interviewDetails={interviewDetails} />

      <div className="absolute top-[899px] left-[332px] rounded-sm-5 bg-color-white-100 w-[1494px] flex flex-row items-start justify-start py-2 pr-[75px] pb-[20px] pl-20 box-border max-w-full text-gray">
        <div className="flex-1 relative leading-[38px] font-semibold inline-block mix-blend-darken max-w-full mq450:text-xl mq450:leading-[30px]">
          <Transcription setIsTranscriptionAvailable={setIsTranscriptionAvailable} />
        </div>
      </div>

      {isTranscriptionAvailable && (
        <div className="absolute top-[1420px] left-[332px] rounded-sm-5 bg-color-white-100 w-[1494px] flex flex-row items-start justify-start py-2 pr-[75px] pb-[20px] pl-20 box-border max-w-full text-gray">
          <div className="flex-1 relative leading-[38px] font-semibold inline-block mix-blend-darken max-w-full mq450:text-xl mq450:leading-[30px]">
            <Paperwork isTranscriptionAvailable={isTranscriptionAvailable} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Interview_info_page;
