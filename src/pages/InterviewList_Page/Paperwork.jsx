import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

const Paperwork = ({ personId }) => {
  const [hasTranscriptions, setHasTranscriptions] = useState(false);
  const [paperwork, setPaperwork] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    // Fetch interviews to check if transcriptions are available
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/people/${personId}/interviews`)
      .then((response) => {
        const interviews = response.data.interviews;
        const transcriptionsExist = interviews.some(interview => interview.transcription && interview.transcription.trim() !== "");
        setHasTranscriptions(transcriptionsExist);
      })
      .catch((error) => {
        console.error("There was an error fetching the interviews!", error);
      });

    // Fetch the existing paperwork (if any)
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/people/${personId}/paperwork`)
      .then((response) => {
        setPaperwork(response.data.paperwork);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the paperwork!", error);
        setIsLoading(false);
      });
  }, [personId]);

  const handleGenerateReport = () => {
    if (!hasTranscriptions) return;
    setIsGenerating(true);
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/people/${personId}/generate_report`)
      .then((response) => {
        setPaperwork(response.data.paperwork);
        setIsGenerating(false);
      })
      .catch((error) => {
        console.error("There was an error generating the report!", error);
        setIsGenerating(false);
      });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="paperwork p-4 w-full">
      <h3 className="text-xl font-bold mb-4">Report</h3>
      {paperwork ? (
        <div>
          <div className="markdown-body w-full h-64 p-2 border border-gray-300 rounded mb-4 overflow-auto">
            <ReactMarkdown>{paperwork}</ReactMarkdown>
          </div>
          <button
            onClick={handleGenerateReport}
            disabled={!hasTranscriptions || isGenerating}
            className={`font-bold py-2 px-4 rounded ${hasTranscriptions && !isGenerating ? 'bg-blue-500 hover:bg-blue-700 text-white' : 'bg-gray-300 text-gray-700 cursor-not-allowed'}`}
          >
            {isGenerating ? "Generating Report..." : "Generate New Report"}
          </button>
        </div>
      ) : (
        <button
          onClick={handleGenerateReport}
          disabled={!hasTranscriptions || isGenerating}
          className={`font-bold py-2 px-4 rounded ${hasTranscriptions && !isGenerating ? 'bg-blue-500 hover:bg-blue-700 text-white' : 'bg-gray-300 text-gray-700 cursor-not-allowed'}`}
        >
          {isGenerating ? "Generating Report..." : "Generate Report"}
        </button>
      )}
    </div>
  );
};

export default Paperwork;
