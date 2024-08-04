// Notification.js
import React, { useEffect } from 'react';

const Notification = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Notification disappears after 3 seconds

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, [onClose]);

  // useEffect(() => {
  //   const audio = new Audio('/path-to-your-sound-file.mp3'); // Add your sound file path
  //   audio.play();
  // }, []);

  return (
    <div className="notification bg-green-500 text-white p-4 rounded fixed top-4 right-4 shadow-lg transition-opacity duration-300 ease-in-out opacity-100">
      <span>{message}</span>
      <button onClick={onClose} className="ml-4 text-black">
        X
      </button>
    </div>
  );
};

export default Notification;
