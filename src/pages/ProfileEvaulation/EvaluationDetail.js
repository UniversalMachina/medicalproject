import React from 'react';
import { useParams } from 'react-router-dom';

const EvaluationDetail = () => {
  const { name, date } = useParams();

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-white text-black">
      <h1 className="text-2xl font-bold">Evaluation Detail</h1>
      <p className="text-xl mt-4">Name: {decodeURIComponent(name)}</p>
      <p className="text-xl mt-2">Date: {decodeURIComponent(date)}</p>
    </div>
  );
};

export default EvaluationDetail;
