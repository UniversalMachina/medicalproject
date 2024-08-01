import React, { useState, useEffect } from "react";
import { useTheme } from "../../themeContext";
import TopBar from "../../components/TopBar/TopBar";
import SideMenu from "../../components/SideMenu/SideMenu";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const AddInterview = () => {
  const { theme } = useTheme();
  const { id } = useParams(); // Get the ID from the URL
  const navigate = useNavigate();

  const [interviewType, setInterviewType] = useState("");
  const [interviewDate, setInterviewDate] = useState("");
  const [interviewerName, setInterviewerName] = useState("");
  const [audioFile, setAudioFile] = useState(null);
  const [personDetails, setPersonDetails] = useState({});

  useEffect(() => {
    if (id) {
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/people/${id}`)
        .then(response => {
          setPersonDetails(response.data);
        })
        .catch(error => {
          console.error("There was an error fetching the person's details!", error);
        });
    }
  }, [id]);

  const handleFileChange = (event) => {
    setAudioFile(event.target.files[0]);
  };

  const handleNextClick = () => {
    const interviewData = new FormData();
    interviewData.append('interview_type', interviewType);
    interviewData.append('interview_date', interviewDate);
    interviewData.append('interviewer_name', interviewerName);
    interviewData.append('person_id', id);
    if (audioFile) {
      interviewData.append('audio_file', audioFile);
    }

    axios.post(`${process.env.REACT_APP_BACKEND_URL}/interviews`, interviewData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(response => {
        const interviewId = response.data.interview_id;
        console.log(response.data);
        navigate(`/interview/${id}/${interviewId}`);
      })
      .catch(error => {
        console.error("There was an error uploading the interview!", error);
      });
  };

  return (
    <div
      className={`w-full h-[1080px] relative overflow-hidden text-left text-sm font-poppins ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-gray2"
      }`}
    >
      <TopBar title={"Add Interview"} backUrl={`/evaluation/${id}`}/>
      <SideMenu />
      <div className="absolute top-[144px] left-[351px] w-[1278px] h-[280px] flex flex-col items-start justify-start gap-[38px]">
        <div className="p-4">
          <h2 className="text-xl mb-4">Add Interview</h2>
          
          {personDetails && (
            <div className="mb-4">
              <h3>Person Details</h3>
              <p>Name: {personDetails.name}</p>
              <p>Evaluated Parent: {personDetails.evaluated_parent_first_name} {personDetails.evaluated_parent_last_name}</p>
              <p>Child: {personDetails.child_first_name} {personDetails.child_last_name}</p>
              <p>Child Collateral: {personDetails.child_collateral_first_name} {personDetails.child_collateral_last_name}</p>
              <p>Parent Collateral: {personDetails.parent_collateral_first_name} {personDetails.parent_collateral_last_name}</p>
              <p>Other Contact: {personDetails.other_contact_first_name} {personDetails.other_contact_last_name}</p>
            </div>
          )}

          <div className="mb-4">
            <label className="block mb-2">Type of Interview</label>
            <select
              value={interviewType}
              onChange={(e) => setInterviewType(e.target.value)}
              className="block w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select Type</option>
              <option value="in_person">In Person</option>
              <option value="online">Online</option>
              <option value="on_call">On Call</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-2">Date of Interview</label>
            <input
              type="date"
              value={interviewDate}
              onChange={(e) => setInterviewDate(e.target.value)}
              className="block w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2">Interviewer Name</label>
            <select
              value={interviewerName}
              onChange={(e) => setInterviewerName(e.target.value)}
              className="block w-full p-2 border border-gray-300 rounded"
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

          <div className="mb-4">
            <label className="block mb-2">Audio File</label>
            <input
              type="file"
              accept="audio/*"
              onChange={handleFileChange}
              className="block w-full p-2 border border-gray-300 rounded"
            />
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
