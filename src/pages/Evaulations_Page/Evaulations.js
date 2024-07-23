import React from 'react';
import TopBar from '../../components/TopBar/TopBar';
import SideMenu from '../../components/SideMenu/SideMenu';
import EvaluationContainer from './EvaluationContainer';
import FloatingButtons from './FloatingButtons';
import Header from './Header';

const Evaulations = () => {
  return (
    <div className="w-full h-[1080px] relative bg-white overflow-hidden text-left text-sm text-gray2 font-poppins">
      <TopBar />
       <SideMenu />
      <EvaluationContainer />
    {/*  <FloatingButtons />
      <Header /> */}
    </div>
  );
};

export default Evaulations;
