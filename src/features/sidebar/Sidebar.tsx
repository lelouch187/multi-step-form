import React, { FC } from 'react';
import '../../styles/sidebar.scss';
import StepItem from './StepItem';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectChangeStep } from './side-slice';

const Sidebar: FC = () => {
  const steps = ['your info', 'select plan', 'add-ons', 'summary'];
  const currentStep = useAppSelector(selectChangeStep)
  const dispatch = useAppDispatch()

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
