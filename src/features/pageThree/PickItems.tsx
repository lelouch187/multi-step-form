import React, { FC } from 'react';
import { useAppSelector } from '../../hooks';
import { pickItemsSelect } from './pageThree-slice';
import PickItem from './PickItem';
import { checkedStatusSelect } from '../pageTwo/pageTwo-slice';

const PickItems: FC = () => {
  const items = useAppSelector(pickItemsSelect);
  const checkedStatus = useAppSelector(checkedStatusSelect);
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
