import React, { FC } from 'react';
import { useAppDispatch } from '../../hooks';
import { changeStep } from './side-slice';

interface IStepItem {
  text: string;
  numberStep: number;
  currentStep: number;
}

const StepItem: FC<IStepItem> = ({ text, numberStep, currentStep }) => {
  const dispatch = useAppDispatch()
  return (
    <div onClick={()=>dispatch(changeStep(numberStep))}
    className="step__wrapper">
      <div className={currentStep===numberStep?"step__number active":"step__number"}>{numberStep}</div>
      <div className="step__info">
        <p className="step__subtitle">step 1</p>
        <h3 className="step__title">{text}</h3>
      </div>
    </div>
  );
};

export default StepItem;
