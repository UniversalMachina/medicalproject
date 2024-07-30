import React, { useState } from "react";
import { useTheme } from "../../themeContext"; // Import the custom hook
import TopBar from "../../components/TopBar/TopBar";
import SideMenu from "../../components/SideMenu/SideMenu";
import { useParams, useNavigate } from "react-router-dom";

const AddInterview = () => {
  const { theme } = useTheme(); // Get the current theme
  const { name, date } = useParams(); // Get the URL parameters
  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  const [audioFile, setAudioFile] = useState(null); // State to store the uploaded audio file

  const handleFileChange = (e) => {
    setAudioFile(e.target.files[0]);
  };

  const handleNextClick = () => {
    // You can add any validation or processing logic here if needed
    navigate(`/interview/${name}/${date}`);
  };

  return (
    <div
      className={`w-full h-[1080px] relative overflow-hidden text-left text-sm font-poppins ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-gray2"
      }`}
    >
      <TopBar />
      <SideMenu />

      <div className="absolute top-[144px] left-[351px] w-[1278px] h-[280px] flex flex-col items-start justify-start gap-[38px]">
      <div className="p-4">
        <h2 className="text-xl mb-4">Add Interview</h2>
        
        <div className="mb-4">
          <label className="block mb-2">Upload Audio File</label>
          <input type="file" accept="audio/*" onChange={handleFileChange} />
        </div>

        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
      </div>
    </div>
  );
};

export default AddInterview;
