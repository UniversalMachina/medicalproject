import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const Paperwork = ({ personId }) => {
  const [hasTranscriptions, setHasTranscriptions] = useState(false);
  const [paperwork, setPaperwork] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const reportRef = useRef(null);

  const logoMarkdown = "![Logo](/logo.png)\n\n";

  useEffect(() => {
    // Fetch interviews to check if transcriptions are available
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/people/${personId}/interviews`)
      .then((response) => {
        const interviews = response.data.interviews;
        const transcriptionsExist = interviews.some(
          (interview) =>
            interview.transcription && interview.transcription.trim() !== ""
        );
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
  }, [personId, refreshKey]);

  const handleGenerateReport = () => {
    if (!hasTranscriptions) return;
    setIsGenerating(true);
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/people/${personId}/generate_report`)
      .then((response) => {
        setPaperwork(logoMarkdown + response.data.paperwork);
        setIsGenerating(false);
        setRefreshKey((prevKey) => prevKey + 1); // Trigger a re-fetch by updating refreshKey
      })
      .catch((error) => {
        console.error("There was an error generating the report!", error);
        setIsGenerating(false);
      });
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(logoMarkdown + paperwork).then(
      () => {
        // alert("Report copied to clipboard!");
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  const handleSaveAsPDF = () => {
    const input = reportRef.current;
    const padding = 100; // Increase padding to 20 pixels

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdfWidth = canvas.width + 2 * padding;
      const pdfHeight = canvas.height + 2 * padding;
      const pdf = new jsPDF({
        orientation: "p",
        unit: "px",
        format: [pdfWidth, pdfHeight]
      });

      pdf.addImage(imgData, "PNG", padding, padding, canvas.width, canvas.height);
      pdf.save("report.pdf");
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
          <div
            ref={reportRef}
            id="report-content"
            className="markdown-body w-full p-2 border border-gray-300 rounded mb-4"
          >
            <ReactMarkdown>{logoMarkdown + paperwork}</ReactMarkdown>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={handleGenerateReport}
              disabled={!hasTranscriptions || isGenerating}
              className={`font-bold py-2 px-4 rounded ${
                hasTranscriptions && !isGenerating
                  ? "bg-blue-500 hover:bg-blue-700 text-white"
                  : "bg-gray-300 text-gray-700 cursor-not-allowed"
              }`}
            >
              {isGenerating ? "Generating Report..." : "Generate New Report"}
            </button>
            <button
              onClick={handleCopyToClipboard}
              className="font-bold py-2 px-4 rounded bg-green-500 hover:bg-green-700 text-white"
            >
              Copy Report
            </button>
            <button
              onClick={handleSaveAsPDF}
              className="font-bold py-2 px-4 rounded bg-red-500 hover:bg-red-700 text-white"
            >
              Save as PDF
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={handleGenerateReport}
          disabled={!hasTranscriptions || isGenerating}
          className={`font-bold py-2 px-4 rounded ${
            hasTranscriptions && !isGenerating
              ? "bg-blue-500 hover:bg-blue-700 text-white"
              : "bg-gray-300 text-gray-700 cursor-not-allowed"
          }`}
        >
          {isGenerating ? "Generating Report..." : "Generate Report"}
        </button>
      )}
    </div>
  );
};

export default Paperwork;
