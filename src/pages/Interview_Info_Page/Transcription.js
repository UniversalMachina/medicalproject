import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Transcription = ({ setIsTranscriptionAvailable }) => {
  const { id, interviewid } = useParams();
  const [transcription, setTranscription] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/interviews/${id}/${interviewid}/transcription`)
      .then((response) => {
        setTranscription(response.data.transcription);
        setIsLoading(false);
        if (response.data.transcription !== "Transcription not available") {
          setIsTranscriptionAvailable(true);
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the transcription!", error);
        setIsLoading(false);
      });
  }, [id, interviewid, setIsTranscriptionAvailable]);

  const handleGenerateTranscription = () => {
    const newTranscription = "This is the transcribed text";
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/interviews/${id}/${interviewid}/transcription`, {
        transcription: newTranscription
      })
      .then((response) => {
        setTranscription(newTranscription);
        setIsTranscriptionAvailable(true);
      })
      .catch((error) => {
        console.error("There was an error generating the transcription!", error);
      });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="transcription">
      <h3>Transcription</h3>
      {transcription === "Transcription not available" ? (
        <button onClick={handleGenerateTranscription}>Generate Transcription</button>
      ) : (
        <textarea
          value={transcription}
          readOnly
          rows="10"
          cols="50"
        />
      )}
    </div>
  );
};

export default Transcription;
