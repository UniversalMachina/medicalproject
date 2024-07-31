import PropTypes from "prop-types";

const FileDownload = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[274px] left-[351px] rounded-[20.23px] bg-thistle w-[1339px] overflow-hidden flex flex-row items-start justify-between py-8 pr-[90px] pl-[57px] box-border gap-[20px] max-w-full text-left text-base-9 text-white font-poppins mq675:flex-wrap ${className}`}
    >
      <div className="h-6 w-6 relative overflow-hidden shrink-0 hidden" />
      <div className="w-[285px] flex flex-row items-start justify-start gap-[40px]">
        <div className="h-[49.2px] w-[46px] relative">
          <img
            className="absolute top-[0.1px] left-[26px] w-5 h-[19.2px]"
            alt=""
            src="/vector1.svg"
          />
          <img
            className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
            alt=""
            src="/vector2.svg"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[12.1px] px-0 pb-0">
          <div className="self-stretch relative font-semibold">Sample.mp4</div>
        </div>
      </div>
      <img
        className="h-[60px] w-[60px] relative overflow-hidden shrink-0"
        alt=""
        src="/materialsymbolslightdownload.svg"
      />
    </div>
  );
};

Evaulations3.propTypes = {
  className: PropTypes.string,
};

export default FileDownload;
