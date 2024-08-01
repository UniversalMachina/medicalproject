import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Paperwork = ({ isTranscriptionAvailable }) => {
  const { id, interviewid } = useParams();
  const [paperwork, setPaperwork] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/interviews/${id}/${interviewid}/transcription`)
      .then((response) => {
        setPaperwork(response.data.paperwork);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the paperwork!", error);
        setIsLoading(false);
      });
  }, [id, interviewid]);

  const handleGeneratePaperwork = () => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/interviews/${id}/${interviewid}/paperwork`)
      .then((response) => {
        setPaperwork(response.data.paperwork);
      })
      .catch((error) => {
        console.error("There was an error generating the paperwork!", error);
      });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="paperwork">
      <h3>Paperwork</h3>
      {paperwork === "Paperwork not available" && isTranscriptionAvailable ? (
        <button onClick={handleGeneratePaperwork}>Generate Paperwork</button>
      ) : (
        <textarea
          value={paperwork}
          readOnly
          rows="10"
          cols="50"
        />
      )}
    </div>
  );
};

export default Paperwork;
