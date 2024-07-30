import React from 'react';
import EvaulationsItem from './EvaulationsItem';

const EvaluationContainer = ({ people }) => {
  return (
    <div className="absolute top-[344px] left-[351px] w-[1278px] h-[280px] flex flex-col items-start justify-start gap-[38px]">
      {people.map((person, index) => (
        <EvaulationsItem key={index} name={person.name} date={person.date} id={person.id}/>
      ))}
    </div>
  );
};

export default EvaluationContainer;
