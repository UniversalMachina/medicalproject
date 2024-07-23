import React from 'react';
import Evaulations1 from './Evaulations1';

const EvaluationContainer = () => {
  return (
    <div className="absolute top-[344px] left-[351px] w-[1278px] h-[280px] flex flex-col items-start justify-start gap-[38px]">
      <Evaulations1 ericDekryger="Eric Dekryger" />
      <Evaulations1 ericDekryger="Kanishk Jagwani" />
      <Evaulations1 ericDekryger="Thayla Ovalle PCE" />
    </div>
  );
};

export default EvaluationContainer;
