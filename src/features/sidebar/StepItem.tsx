import React, { FC } from 'react';


interface IStepItem {
  text: string;
  numberStep: number;
  currentStep: number;
}

const StepItem: FC<IStepItem> = ({ text, numberStep, currentStep }) => {
  const step = currentStep>4?4:currentStep;
  return (
    <div className="step__wrapper">
      <div className={step===numberStep?"step__number active":"step__number"}>{numberStep}</div>
      <div className="step__info">
        <p className="step__subtitle">step {numberStep}</p>
        <h3 className="step__title">{text}</h3>
      </div>
    </div>
  );
};

export default StepItem;
