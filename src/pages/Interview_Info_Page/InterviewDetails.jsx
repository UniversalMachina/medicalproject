import React from "react";
import FileDownload from "./FileDownload"; // Import the FileDownload component
import { useTheme } from "../../themeContext"; // Import the custom hook

const InterviewDetails = ({ interviewDetails }) => {
  const { theme } = useTheme(); // Get the current theme
  const textColor = theme === "dark" ? "text-white" : "text-black";

  return (
    <div>
<div className={`absolute top-[169px] left-[276px] w-[1175px] flex flex-row items-start justify-start py-0 px-[75px] box-border max-w-full z-[2] text-13xl font-poppins ${textColor}`}>
        <div className="h-[22px] relative font-semibold inline-block mq450:text-lgi mq850:text-7xl">
          {interviewDetails.interviewer_name}
        </div>
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
    </div>
  );
};

export default InterviewDetails;
