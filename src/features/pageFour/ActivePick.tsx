import React, { FC } from 'react';
import { IPickItem } from '../pageThree/pageThree-slice';

interface IActivePickProps {
  activePick: IPickItem[];
  checkedStatus: boolean;
}

const ActivePick: FC<IActivePickProps> = ({ activePick, checkedStatus }) => {
  return (
    <>
      {activePick.map((item) => {
        return (
          <div key={item.title}
          className="active--pick__wrapper">
            <p className="active--pick__title">{item.title}</p>
            <p className="active--pick__cost">
              {checkedStatus ? `+$${item.cost * 10}/yr` : `+$${item.cost}/mo`}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default ActivePick;
