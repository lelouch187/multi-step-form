import React, { FC } from 'react';
import { useAppSelector } from '../../hooks';
import { selectPickItems } from './pageThree-slice';
import PickItem from './PickItem';
import { selectCheckedStatus } from '../pageTwo/pageTwo-slice';

const PickItems: FC = () => {
  const items = useAppSelector(selectPickItems);
  const checkedStatus = useAppSelector(selectCheckedStatus);
  return (
    <div className="pick__wrapper">
      {items.map((item, index) => {
        return (
          <PickItem
            key={item.title}
            index={index}
            title={item.title}
            subtitle={item.subtitle}
            cost={item.cost}
            checked={item.checked}
            isYear={checkedStatus}
          />
        );
      })}
    </div>
  );
};

export default PickItems;
