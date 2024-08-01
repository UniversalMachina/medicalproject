import React from 'react';
import { useNavigate } from 'react-router-dom';

const FloatingButtons = () => {
  const navigate = useNavigate();

  return (
    <div
      className="absolute top-[168px] left-[1390px] flex items-center p-3 bg-color-primary-100 rounded-6xs-5 cursor-pointer"
      onClick={() => navigate('/clients')}
    >
      <b className="px-10 text-color-white-100">+ Add Clients</b>
    </div>
  );
};

export default FloatingButtons;
