import React from 'react';
import Interview_item from './Interview_item';

const InterviewContainer = ({ people }) => {
  return (
    <div className="absolute top-[344px] left-[351px] w-[1278px] h-[280px] flex flex-col items-start justify-start gap-[38px]">
      {people.map((person, index) => (
        <Interview_item key={index} name={person.name} date={person.date} />
      ))}
    </div>
  );
};

export default InterviewContainer;
