import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Transcription = ({ setIsTranscriptionAvailable }) => {
  const { id, interviewid } = useParams();
  const [transcription, setTranscription] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateTranscription = () => {
    setIsGenerating(true);
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/interviews/${id}/${interviewid}/transcription`)
      .then((response) => {
        const newTranscription = response.data.transcription;
        setTranscription(newTranscription);
        setIsTranscriptionAvailable(true);
        setIsGenerating(false);
      })
      .catch((error) => {
        console.error("There was an error generating the transcription!", error);
        setIsGenerating(false);
      });
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(transcription).then(() => {
      // alert("Transcription copied to clipboard!");
    }).catch((error) => {
      console.error("Failed to copy the text to clipboard", error);
    });
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/interviews/${id}/${interviewid}/transcription`)
      .then((response) => {
        const fetchedTranscription = response.data.transcription;
        setTranscription(fetchedTranscription);
        setIsLoading(false);
        if (fetchedTranscription !== "Transcription not available") {
          setIsTranscriptionAvailable(true);
        } else {
          handleGenerateTranscription();
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the transcription!", error);
        setIsLoading(false);
      });
  }, [id, interviewid, setIsTranscriptionAvailable]);

  if (isLoading || isGenerating) {
    return <div>Loading...</div>;
  }

  return (
    <div className="transcription p-4">
      <h3 className="text-xl font-bold mb-4">Transcription</h3>
      {transcription === "Transcription not available" ? (
        <button 
          onClick={handleGenerateTranscription} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Generate Transcription
        </button>
      ) : (
        <div>
          <textarea
            value={transcription}
            readOnly
            className="w-full h-64 p-2 border border-gray-300 rounded mb-4"
          />
          <button 
            onClick={handleCopyToClipboard} 
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Copy to Clipboard
          </button>
        </div>
      )}
    </div>
  );
};

export default Transcription;
