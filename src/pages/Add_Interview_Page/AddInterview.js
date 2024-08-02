import React, { useState, useEffect } from "react";
import { useTheme } from "../../themeContext";
import TopBar from "../../components/TopBar/TopBar";
import SideMenu from "../../components/SideMenu/SideMenu";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaCheckCircle } from "react-icons/fa";

const AddInterview = () => {
  const { theme } = useTheme();
  const { id } = useParams(); // Get the ID from the URL
  const navigate = useNavigate();

  const [interviewType, setInterviewType] = useState("");
  const [interviewDate, setInterviewDate] = useState("");
  const [interviewerName, setInterviewerName] = useState("");
  const [audioFile, setAudioFile] = useState(null);
  const [personDetails, setPersonDetails] = useState({});
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (id) {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/people/${id}`)
        .then((response) => {
          setPersonDetails(response.data);
        })
        .catch((error) => {
          console.error("There was an error fetching the person's details!", error);
        });
    }
  }, [id]);

  const handleFileChange = (event) => {
    setAudioFile(event.target.files[0]);
  };

  const handleNextClick = () => {
    setIsUploading(true);
    const interviewData = new FormData();
    interviewData.append("interview_type", interviewType);
    interviewData.append("interview_date", interviewDate);
    interviewData.append("interviewer_name", interviewerName);
    interviewData.append("person_id", id);
    if (audioFile) {
      interviewData.append("audio_file", audioFile);
    }

    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/interviews`, interviewData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        const interviewId = response.data.interview_id;
        console.log(response.data);
        setIsUploading(false);
        navigate(`/interview/${id}/${interviewId}`);
      })
      .catch((error) => {
        console.error("There was an error uploading the interview!", error);
        setIsUploading(false);
      });
  };

  const isFormComplete = () => {
    return interviewType && interviewDate && interviewerName && audioFile;
  };

  return (
    <div
      className={`w-full min-h-screen relative overflow-hidden text-left text-sm font-poppins ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-gray-800"
      }`}
    >
      <TopBar title={"Add Interview"} backUrl={`/evaluation/${id}`} />
      <SideMenu />
      <div className="absolute top-[144px] left-[351px] w-[calc(100%-351px)] px-8 py-6 flex flex-col items-start justify-start">
        <h2 className="text-2xl font-semibold mb-6">Add Interview</h2>

        <div className="w-full max-w-xl space-y-6">
          <div>
            <label className="block mb-2 font-medium">Type of Interview</label>
            <select
              value={interviewType}
              onChange={(e) => setInterviewType(e.target.value)}
              className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <option value="">Select Type</option>
              <option value="in_person">In Person</option>
              <option value="online">Online</option>
              <option value="on_call">On Call</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">Date of Interview</label>
            <input
              type="date"
              value={interviewDate}
              onChange={(e) => setInterviewDate(e.target.value)}
              className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Interviewer Name</label>
            <select
              value={interviewerName}
              onChange={(e) => setInterviewerName(e.target.value)}
              className="block w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <option value="">Select Interviewer</option>
              {personDetails.child_first_name && personDetails.child_last_name && (
                <option value={`${personDetails.child_first_name} ${personDetails.child_last_name}`}>
                  Child: {personDetails.child_first_name} {personDetails.child_last_name}
                </option>
              )}
              {personDetails.child_collateral_first_name && personDetails.child_collateral_last_name && (
                <option value={`${personDetails.child_collateral_first_name} ${personDetails.child_collateral_last_name}`}>
                  Child Collateral: {personDetails.child_collateral_first_name} {personDetails.child_collateral_last_name}
                </option>
              )}
              {personDetails.parent_collateral_first_name && personDetails.parent_collateral_last_name && (
                <option value={`${personDetails.parent_collateral_first_name} ${personDetails.parent_collateral_last_name}`}>
                  Parent Collateral: {personDetails.parent_collateral_first_name} {personDetails.parent_collateral_last_name}
                </option>
              )}
              {personDetails.other_contact_first_name && personDetails.other_contact_last_name && (
                <option value={`${personDetails.other_contact_first_name} ${personDetails.other_contact_last_name}`}>
                  Other Contact: {personDetails.other_contact_first_name} {personDetails.other_contact_last_name}
                </option>
              )}
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">Audio File</label>
            <div className="border-2 border-dashed border-gray-300 rounded p-4 text-center">
              <input
                type="file"
                accept="audio/*"
                onChange={handleFileChange}
                className="hidden"
                id="audio-file-input"
              />
              <label htmlFor="audio-file-input" className="cursor-pointer text-gray-500">
                <div className="flex flex-col items-center justify-center">
                  {audioFile ? (
                    <FaCheckCircle className="text-green-500 text-2xl mb-2" />
                  ) : (
                    <span className="text-lg font-medium">Upload Audio File</span>
                  )}
                  <span className="mt-2 text-sm text-gray-400">
                    Attach file. File size of your documents should not exceed 10MB.
                  </span>
                </div>
              </label>
            </div>
            {audioFile && (
              <div className="mt-2 text-gray-500">
                {audioFile.name}
              </div>
            )}
          </div>

          <button
            className={`w-full py-3 rounded ${
              isFormComplete()
                ? "bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            onClick={handleNextClick}
            disabled={!isFormComplete()}
          >
            Next
          </button>

          {isUploading && (
            <div className="mt-4 text-blue-500">
              Uploading audio file to the database. Please wait...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddInterview;
