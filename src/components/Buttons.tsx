import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { changeStep, selectStep } from '../features/sidebar/side-slice';

const Buttons: FC = () => {
  const currentStep = useAppSelector(selectStep);
  const dispatch = useAppDispatch();
  return (
    <>
      <input
        onClick={() => dispatch(changeStep(currentStep - 1))}
        className="button-prev"
        value="Go Back"
        type="button"
      />
      <input
        onClick={() => dispatch(changeStep(currentStep + 1))}
        className="button-next"
        value="Next Step"
        type="button"
      />
    </>
  );
};

export default Buttons;
