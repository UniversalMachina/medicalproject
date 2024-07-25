import React from 'react';

const ContactInfoPopup = ({ showPopup, currentSection, tempContactInfo, handleInputChange, handleSave, handleCancel }) => {
  if (!showPopup) return null;

  const isSaveDisabled = !tempContactInfo.firstName || !tempContactInfo.lastName;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8">
        <h2 className="text-xl font-semibold mb-4">Enter Contact Info for {currentSection}</h2>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          onChange={handleInputChange}
          value={tempContactInfo.firstName || ''}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          onChange={handleInputChange}
          value={tempContactInfo.lastName || ''}
        />
        <div className="flex justify-end gap-4">
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className={`px-4 py-2 rounded ${isSaveDisabled ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
            onClick={handleSave}
            disabled={isSaveDisabled}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoPopup;
