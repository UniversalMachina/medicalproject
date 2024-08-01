import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Paperwork = () => {
  const { id, interviewid } = useParams();
  const [transcription, setTranscription] = useState("");
  const [paperwork, setPaperwork] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/interviews/${id}/${interviewid}/transcription`)
      .then((response) => {
        setTranscription(response.data.transcription);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the transcription!", error);
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
      {transcription === "Transcription not available" ? (
        <div>Transcription not available. Cannot generate paperwork.</div>
      ) : (
        <div>
          <button onClick={handleGeneratePaperwork}>Generate Paperwork</button>
          {paperwork && (
            <textarea
              value={paperwork}
              readOnly
              rows="10"
              cols="50"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Paperwork;
