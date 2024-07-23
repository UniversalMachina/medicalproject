import TAGHeader from "../components/TAGHeader";
import Sidebar from "../components/Sidebar";
import Evaulations3 from "../components/Evaulations3";

const PatientsInterviewPage = () => {
  return (
    <div className="w-full h-[2080px] relative bg-lavender overflow-hidden mix-blend-normal leading-[normal] tracking-[normal] text-left text-6xl text-color-black-100 font-plus-jakarta-sans mq850:h-auto mq850:min-h-[2080]">
      <TAGHeader />
      <div className="absolute top-[163px] left-[1443px] rounded-6xs-5 bg-color-primary-100 w-[213.4px] overflow-hidden flex flex-row items-start justify-center pt-[9px] px-5 pb-[7.2px] box-border text-smi text-white font-poppins">
        <b className="relative inline-block min-w-[45px]">Delete</b>
      </div>
      <Sidebar />
      <div className="absolute top-[169px] left-[276px] w-[1175px] flex flex-row items-start justify-start py-0 px-[75px] box-border max-w-full z-[2] text-13xl text-black font-poppins">
        <div className="h-[22px] relative font-semibold inline-block mq450:text-lgi mq850:text-7xl">
          Travis Durand Interview
        </div>
      </div>
      <div className="absolute top-[507px] left-[334px] rounded-sm-5 bg-color-white-100 w-[1494px] flex flex-row items-start justify-start py-2 pr-[75px] pl-20 box-border max-w-full text-gray">
        <div className="flex-1 relative leading-[38px] font-semibold inline-block mix-blend-darken max-w-full mq450:text-xl mq450:leading-[30px]">{`Travis Durand `}</div>
      </div>
      <Evaulations3 />
      <div className="absolute top-[1212px] left-[351px] rounded-[20.23px] bg-white w-[1375px] h-[790px] overflow-hidden">
        <div className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden hidden" />
      </div>
      <div className="absolute top-[799px] left-[332px] rounded-sm-5 bg-color-white-100 w-[1494px] flex flex-row items-start justify-start py-2 pr-[75px] pl-20 box-border max-w-full text-gray">
        <div className="flex-1 relative leading-[38px] font-semibold inline-block mix-blend-darken max-w-full mq450:text-xl mq450:leading-[30px]">
          In Person
        </div>
      </div>
      <div className="absolute top-[1135px] left-[363px] w-[1401px] flex flex-row items-start justify-between gap-[20px] max-w-full text-[37.5px] mq450:flex-wrap">
        <div className="relative leading-[57px] font-semibold shrink-0 mq450:text-[22px] mq450:leading-[34px] mq850:text-[30px] mq850:leading-[45px]">
          Transcription
        </div>
        <div className="h-[45.9px] w-[45.9px] relative overflow-hidden shrink-0 hidden" />
        <div className="flex flex-col items-start justify-start pt-[9.4px] px-0 pb-0">
          <img
            className="w-[34.4px] h-[38.3px] relative shrink-0"
            alt=""
            src="/group.svg"
          />
        </div>
      </div>
      <div className="absolute top-[653px] left-[334px] rounded-sm-5 bg-color-white-100 w-[1494px] flex flex-row items-start justify-start py-2 pr-[75px] pl-20 box-border max-w-full text-gray">
        <div className="flex-1 relative leading-[38px] font-semibold inline-block mix-blend-darken max-w-full mq450:text-xl mq450:leading-[30px]">{`July, 15th, 2023 `}</div>
      </div>
      <div className="absolute top-[453px] left-[338px] text-3xl-1 leading-[34px] inline-block w-[545.8px] mq450:text-lg mq450:leading-[27px]">
        Who was the interview with?
      </div>
      <div className="absolute top-[604px] left-[338px] text-3xl-1 leading-[34px] inline-block w-[545.8px] mq450:text-lg mq450:leading-[27px]">
        Date
      </div>
      <div className="absolute top-[750px] left-[338px] text-3xl-1 leading-[34px] inline-block w-[545.8px] mq450:text-lg mq450:leading-[27px]">
        Virtual
      </div>
    </div>
  );
};

export default PatientsInterviewPage;
