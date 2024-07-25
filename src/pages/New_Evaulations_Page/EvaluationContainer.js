import React, { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import ContactInfoPopup from './ContactInfoPopup';

const EvaluationContainer = ({ people }) => {
  const evaluationSections = [
    "Evaluated Parent",
    "Child",
    "Child Collateral Contact",
    "Parent Collateral Contact",
    "Other Contact"
  ];

  const [showPopup, setShowPopup] = useState(false);
  const [currentSection, setCurrentSection] = useState(null);
  const [contactInfo, setContactInfo] = useState({});
  const [tempContactInfo, setTempContactInfo] = useState({});
  const [allFilled, setAllFilled] = useState(false);
  const [evaluationName, setEvaluationName] = useState('');

  useEffect(() => {
    checkIfAllFilled();
  }, [contactInfo]);

  const handleSectionClick = (section) => {
    setCurrentSection(section);
    setTempContactInfo(contactInfo[section] || {});
    setShowPopup(true);
  };

  const handleInputChange = (e) => {
    setTempContactInfo(prevInfo => ({
      ...prevInfo,
      [e.target.name]: e.target.value,
    }));
  };

  const checkIfAllFilled = () => {
    const filled = evaluationSections.every(
      (section) =>
        contactInfo[section] &&
        contactInfo[section].firstName &&
        contactInfo[section].lastName
    );
    setAllFilled(filled);
  };

  const handleDelete = (section, e) => {
    e.stopPropagation();
    setContactInfo(prevInfo => {
      const newInfo = { ...prevInfo };
      delete newInfo[section];
      return newInfo;
    });
  };

  const handleSave = () => {
    setContactInfo(prevInfo => ({
      ...prevInfo,
      [currentSection]: tempContactInfo,
    }));
    setShowPopup(false);
  };

  const handleCancel = () => {
    setShowPopup(false);
  };

  const handleSubmit = () => {
    if (allFilled && evaluationName) {
      let alertMessage = `Evaluation Name: ${evaluationName}\n\n`;
      evaluationSections.forEach(section => {
        if (contactInfo[section]) {
          alertMessage += `${section}:\n`;
          alertMessage += `First Name: ${contactInfo[section].firstName}\n`;
          alertMessage += `Last Name: ${contactInfo[section].lastName}\n\n`;
        }
      });
      alert(alertMessage);
      // Here you can add logic to submit the data
    } else {
      alert('Please fill all sections and provide an evaluation name.');
    }
  };

  return (
    <div className="absolute top-[344px] left-[351px] w-[1278px] h-auto flex flex-col items-start justify-start gap-[38px]">
      {/* Evaluation Name section */}
      <div className="w-[1278px] h-auto rounded-[20.23px] bg-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[21.9px] pb-[17.3px] pr-[28.3px] pl-8 box-border gap-4 text-left text-black font-poppins">
        <div className="h-[25.3px] w-full relative font-semibold inline-block shrink-0">
          Evaluation Name*
        </div>
        <input
          type="text"
          className="w-full h-[28.7px] mt-2 rounded-[10.12px] border border-black pl-2"
          placeholder="Enter Evaluation Name"
          value={evaluationName}
          onChange={(e) => setEvaluationName(e.target.value)}
        />
      </div>

      {/* Other evaluation sections */}
      {evaluationSections.map((section, index) => (
        <div
          key={index}
          className={`w-[1278px] h-auto rounded-[20.23px] ${contactInfo[section] ? "bg-red-500" : "bg-thistle"} overflow-hidden shrink-0 flex flex-row items-center justify-between pt-[21.9px] pb-[17.3px] pr-[28.3px] pl-8 box-border text-left text-white font-poppins cursor-pointer`}
          onClick={() => handleSectionClick(section)}
        >
          <div className="h-[25.3px] w-auto relative font-semibold inline-block shrink-0">
            {section}
          </div>
          {contactInfo[section] && (
            <div className="flex items-center">
              <span className="block text-sm mr-4">
                {contactInfo[section].firstName} {contactInfo[section].lastName}
              </span>
              <button
                className="bg-white p-2 rounded-full"
                onClick={(e) => handleDelete(section, e)}
              >
                <FaTrash className="text-red-500" />
              </button>
            </div>
          )}
        </div>
      ))}

      {/* Save button */}
      <button
        className={`mt-4 px-4 py-2 rounded ${allFilled && evaluationName ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-500"}`}
        disabled={!allFilled || !evaluationName}
        onClick={handleSubmit}
      >
        Save
      </button>

      {/* Popup for contact info */}
      <ContactInfoPopup
        showPopup={showPopup}
        currentSection={currentSection}
        tempContactInfo={tempContactInfo}
        handleInputChange={handleInputChange}
        handleSave={handleSave}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default EvaluationContainer;
