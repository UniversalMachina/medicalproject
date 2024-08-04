import PropTypes from "prop-types";
import { useState, useRef } from "react";
import { FaDownload, FaPlay, FaPause } from "react-icons/fa";

const FileDownload = ({ audioFile, className = "" }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleDownload = () => {
    window.open(audioFile, '_blank');
  };

  const handlePlayPause = (e) => {
    e.stopPropagation();
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const progressBar = document.getElementById("progress-bar");
    if (audioRef.current && progressBar) {
      const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      progressBar.value = progress;
    }
  };

  const handleProgressChange = (event) => {
    if (audioRef.current) {
      const progress = event.target.value;
      audioRef.current.currentTime = (audioRef.current.duration / 100) * progress;
    }
  };

  return (
    <div
      className={`absolute top-[254px] left-[351px] rounded-[20.23px] bg-thistle w-[1339px] overflow-hidden flex flex-col items-center justify-between py-8 pr-[90px] pl-[57px] box-border gap-[20px] max-w-full text-left text-base-9 text-white font-poppins mq675:flex-wrap ${className} cursor-pointer hover:bg-thistle-600 hover:text-gray-200`}
    >
      <div
        className="flex flex-row items-center justify-between w-full"
        onClick={handleDownload}
      >
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center gap-[10px]">
            <div className="font-semibold">Download Audio File</div>
            <FaDownload size={24} />
          </div>
        </div>
        <div>
          <button
            className="ml-4 p-2 bg-gray-500 rounded text-white flex items-center"
            onClick={handlePlayPause}
          >
            {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center w-full mt-4">
        <audio ref={audioRef} src={audioFile} onTimeUpdate={handleTimeUpdate} />
        <input
          id="progress-bar"
          type="range"
          className="w-full"
          defaultValue="0"
          onChange={handleProgressChange}
        />
      </div>
    </div>
  );
};

FileDownload.propTypes = {
  audioFile: PropTypes.string.isRequired, // Ensure audioFile is required
  className: PropTypes.string,
};

export default FileDownload;
