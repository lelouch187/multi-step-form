import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeStatus, checkedStatus } from './pageTwo-slice';

const Switch: FC = () => {
  const checked = useAppSelector(checkedStatus);
  const dispatch = useAppDispatch();
  return (
    <div className="switch">
      <span className={checked ? 'switch__text' : 'switch__text active'}>Monthly</span>
      <input
        onChange={() => dispatch(changeStatus(!checked))}
        name="position"
        value="year"
        checked={checked}
        type="checkbox"
        id="switch"
      />
      <label htmlFor="switch">Toggle</label>
      <span className={!checked ? 'switch__text' : 'switch__text active'}>Yearly</span>
    </div>
  );
};

export default Switch;
