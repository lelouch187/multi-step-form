import React, { FC } from 'react';
import { IPickItem, chengeCheck } from './pageThree-slice';
import { useAppDispatch } from '../../hooks';

interface PickItemProps extends IPickItem {
  isYear: boolean;
  index: number;
}

const PickItem: FC<PickItemProps> = ({ title, subtitle, cost, checked, isYear, index }) => {
  const dispatch = useAppDispatch();
  return (
    <div onClick={() => dispatch(chengeCheck(index))} 
    className={checked ? 'pick__item active' : 'pick__item'}>
      <input onChange={() => dispatch(chengeCheck(index))}
      id="happy" name="happy"
      checked={checked} className="custom-checkbox" type="checkbox" />
      <label htmlFor="happy"></label>
      <div className="pick__text__wrapper">
        <h3 className="pick__title">{title}</h3>
        <p className="pick__subtitle">{subtitle}</p>
      </div>
      <p className="pick__cost">{isYear ? `+$${cost * 10}/yr` : `+$${cost}/mo`}</p>
    </div>
  );
};

export default PickItem;
