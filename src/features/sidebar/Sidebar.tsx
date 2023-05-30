import React, { FC } from 'react';
import StepItem from './StepItem';
import { useAppSelector } from '../../hooks';
import { selectChangeStep } from './side-slice';

const Sidebar: FC = () => {
  const steps = ['your info', 'select plan', 'add-ons', 'summary'];
  const currentStep = useAppSelector(selectChangeStep)

  return (
    <aside className="sidebar">
      {steps.map((step, index)=> {
        return <StepItem key={index}
        text={step} 
        numberStep={index+1}
        currentStep={currentStep} />
      })} 
    </aside>
  );
};

export default Sidebar;
