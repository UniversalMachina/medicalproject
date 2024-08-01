import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaUserAlt, FaRegComments } from 'react-icons/fa';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import PropTypes from 'prop-types';

const Earning = ({ className = "" }) => {
  const [data, setData] = useState({
    clients_on_waitlist: 0,
    total_clients: 0,
    reports_completed: 0,
  });

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/overview`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div className={`absolute top-[20px] left-[617px] shadow-[0px_5px_30px_rgba(226,_236,_249,_0.3)] rounded-[100px] bg-white flex flex-row items-end justify-start pt-[30px] pb-8 pl-[53px] pr-[47px] box-border gap-[55.3px] max-w-full text-left text-sm text-darkgray-100 font-poppins mq925:flex-wrap ${className}`}>
      <div className="h-[87px] w-[272px] flex flex-row items-start justify-start gap-[30px]">
        <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
          <div className="self-stretch flex flex-row items-start justify-start gap-3">
            <div className="w-[84px] flex flex-row items-center justify-center">
              <div className="h-[84px] w-[84px] relative flex items-center justify-center">
                <div className="absolute top-0 left-0 rounded-full bg-purple w-full h-full z-[1]" />
                <FaUserAlt className="relative w-[43px] h-[42px] text-black z-[4]" />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
              <div className="flex flex-row items-start justify-start relative">
                <h3 className="m-0 relative text-inherit tracking-[-0.01em] font-normal font-[inherit] z-[1]">{`Clients on waiting list `}</h3>
                <div className="h-[37.9px] w-14 absolute !m-[0] right-[13.3px] bottom-[-22.1px] z-[2]" />
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-1 text-13xl text-darkslategray-100">
                <div className="relative tracking-[-0.01em] leading-[100%] font-semibold inline-block min-w-[86px] z-[1] mq450:text-lgi mq450:leading-[19px] mq925:text-7xl mq925:leading-[26px]">
                  {data.clients_on_waitlist}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch w-px relative border-black1 border-r-[1px] border-solid box-border z-[1]" />
      </div>

      <div className="flex flex-col items-start justify-end pt-0 px-0 pb-0.5">
        <div className="flex flex-row items-start justify-start gap-5">
          <div className="w-[84px] flex flex-row items-center justify-center">
            <div className="h-[84px] w-[84px] relative flex items-center justify-center">
              <div className="absolute top-0 left-0 rounded-full bg-purple w-full h-full z-[1]" />
              <FaRegComments className="relative w-[41px] h-[55px] text-black z-[3]" />
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[5px]">
            <h3 className="m-0 relative text-inherit tracking-[-0.01em] font-normal font-[inherit] inline-block min-w-[83px] z-[1]">
              Total clients
            </h3>
            <div className="relative text-13xl tracking-[-0.01em] leading-[100%] font-semibold text-darkslategray-100 inline-block min-w-[99px] z-[1] mq450:text-lgi mq450:leading-[19px] mq925:text-7xl mq925:leading-[26px]">
              {data.total_clients}
            </div>
          </div>
        </div>
      </div>
      <div className="h-[88px] w-px relative border-black1 border-r-[1px] border-solid box-border z-[1] mq925:w-full mq925:h-px" />

      <div className="h-[87px] w-[272px] flex flex-row items-start justify-start gap-[30px]">
        <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
          <div className="self-stretch flex flex-row items-start justify-start gap-3">
            <div className="w-[84px] flex flex-row items-center justify-center">
              <div className="h-[84px] w-[84px] relative flex items-center justify-center">
                <div className="absolute top-0 left-0 rounded-full bg-purple w-full h-full z-[1]" />
                <HiOutlineDocumentReport className="relative w-[43px] h-[42px] text-black z-[4]" />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
              <div className="flex flex-row items-start justify-start relative">
                <h3 className="m-0 relative text-inherit tracking-[-0.01em] font-normal font-[inherit] z-[1]">Reports Completed</h3>
                <div className="h-[37.9px] w-14 absolute !m-[0] right-[13.3px] bottom-[-22.1px] z-[2]" />
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-1 text-13xl text-darkslategray-100">
                <div className="relative tracking-[-0.01em] leading-[100%] font-semibold inline-block min-w-[86px] z-[1] mq450:text-lgi mq450:leading-[19px] mq925:text-7xl mq925:leading-[26px]">
                  {data.reports_completed}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Earning.propTypes = {
  className: PropTypes.string,
};

export default Earning;
