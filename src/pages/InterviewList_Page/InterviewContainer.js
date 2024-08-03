import React from 'react';
import InterviewItem from './InterviewItem';
import Paperwork from './Paperwork';

const InterviewContainer = ({ people = [], id }) => {
  return (
    <div className="absolute top-[344px] left-[351px] w-[1278px] h-[280px] flex flex-col items-start justify-start gap-[38px]">
      {people.length > 0 ? (
        people.map((person, index) => (
          <InterviewItem 
            key={index} 
            name={person.interviewer_name} 
            date={new Date(person.interview_date).toLocaleDateString()} 
            id={id}
            interviewid={person.id}
          />
        ))
      ) : (
        <p>No interviews found</p>
      )}



            <Paperwork personId={id} />
    
   

    </div>
  );
};

export default InterviewContainer;
