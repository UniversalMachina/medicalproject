import React, { useState, useEffect } from "react";
import { useTheme } from "../../themeContext"; // Import the custom hook
import TopBar from "../../components/TopBar/TopBar";
import SideMenu from "../../components/SideMenu/SideMenu";
import { useParams } from "react-router-dom";
import FileDownload from "./FileDownload"; // Import the FileDownload component
import Transcription from "./Transcription"; // Import the Transcription component
import axios from "axios";

const Interview_info_page = () => {
  const { theme } = useTheme(); // Get the current theme
  const { id, interviewid } = useParams(); // Get the URL parameters

  const [interviewDetails, setInterviewDetails] = useState({
    interview_date: "",
    interviewer_name: "",
    interview_type: "",
    audio_file: "" // Add audio_file to the state
  });

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
      className={`w-full h-[1080px] relative overflow-hidden text-left text-sm font-poppins ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-gray2"
      }`}
    >
      <TopBar />
      <SideMenu />

      <div className="absolute top-[169px] left-[276px] w-[1175px] flex flex-row items-start justify-start py-0 px-[75px] box-border max-w-full z-[2] text-13xl text-black font-poppins">
        <div className="h-[22px] relative font-semibold inline-block mq450:text-lgi mq850:text-7xl">
        {interviewDetails.interviewer_name}
        </div>
      </div>

      <div className="absolute top-[1212px] left-[351px] rounded-[20.23px] bg-white w-[1375px] h-[790px] overflow-hidden">
        <div className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden hidden" />
      </div>

      <div className="absolute top-[453px] left-[338px] text-3xl-1 leading-[34px] inline-block w-[545.8px] mq450:text-lg mq450:leading-[27px]">
        Who was the interview with?
      </div>

      <div className="absolute top-[507px] left-[334px] rounded-sm-5 bg-color-white-100 w-[1494px] flex flex-row items-start justify-start py-2 pr-[75px] pl-20 box-border max-w-full text-gray">
        <div className="flex-1 relative leading-[38px] font-semibold inline-block mix-blend-darken max-w-full mq450:text-xl mq450:leading-[30px]">
          {interviewDetails.interviewer_name} Interview
        </div>
      </div>

      <div className="absolute top-[604px] left-[338px] text-3xl-1 leading-[34px] inline-block w-[545.8px] mq450:text-lg mq450:leading-[27px]">
        Date
      </div>

      <div className="absolute top-[653px] left-[334px] rounded-sm-5 bg-color-white-100 w-[1494px] flex flex-row items-start justify-start py-2 pr-[75px] pl-20 box-border max-w-full text-gray">
        <div className="flex-1 relative leading-[38px] font-semibold inline-block mix-blend-darken max-w-full mq450:text-xl mq450:leading-[30px]">
          {interviewDetails.interview_date}
        </div>
      </div>

      <div className="absolute top-[750px] left-[338px] text-3xl-1 leading-[34px] inline-block w-[545.8px] mq450:text-lg mq450:leading-[27px]">
        Virtual
      </div>

      <div className="absolute top-[799px] left-[332px] rounded-sm-5 bg-color-white-100 w-[1494px] flex flex-row items-start justify-start py-2 pr-[75px] pl-20 box-border max-w-full text-gray">
        <div className="flex-1 relative leading-[38px] font-semibold inline-block mix-blend-darken max-w-full mq450:text-xl mq450:leading-[30px]">
          {interviewDetails.interview_type}
        </div>
      </div>

      {interviewDetails.audio_file && (
        <FileDownload audioFile={interviewDetails.audio_file} />
      )}



      <div className="absolute top-[899px] left-[332px] rounded-sm-5 bg-color-white-100 w-[1494px] flex flex-row items-start justify-start py-2 pr-[75px] pb-[20px] pl-20 box-border max-w-full text-gray">
        <div className="flex-1 relative leading-[38px] font-semibold inline-block mix-blend-darken max-w-full mq450:text-xl mq450:leading-[30px]">
        <Transcription />
        </div>
      </div> 

    
    </div>
  );
};

export default Interview_info_page
