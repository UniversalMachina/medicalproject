import React from 'react';
import Evaulations1 from './Evaulations1';

const EvaluationContainer = ({ people }) => {
  return (
    <div className="absolute top-[344px] left-[351px] w-[1278px] h-[280px] flex flex-col items-start justify-start gap-[38px]">
      {people.map((person, index) => (
        <Evaulations1 key={index} name={person.name} date={person.date} />
      ))}
    </div>
  );
};

export default EvaluationContainer;
