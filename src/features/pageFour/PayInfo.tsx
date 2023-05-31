import React, { FC } from 'react';
import { useAppSelector } from '../../hooks';
import { selectActiveCardInfo, selectCheckedStatus } from '../pageTwo/pageTwo-slice';
import { selectActiveItems } from '../pageThree/pageThree-slice';
import ActivePick from './ActivePick';
import TotalCost from './TotalCost';

import PlanInfo from './PlanInfo';
import Buttons from '../../components/Buttons';

const PayInfo: FC = () => {
  const [card] = useAppSelector(selectActiveCardInfo);
  const activePick = useAppSelector(selectActiveItems);
  const checkedStatus = useAppSelector(selectCheckedStatus);
  const cost = activePick.map((item) => item.cost).reduce((summ, item) => summ + item, 0);
  const totalCost = checkedStatus ? (card.cost + cost) * 10 : card.cost + cost;
  return (
    <>
      <div className="pay__info">
        <PlanInfo card={card} checkedStatus={checkedStatus} />
        <ActivePick checkedStatus={checkedStatus} activePick={activePick} />
      </div>
      <TotalCost checkedStatus={checkedStatus} totalCost={totalCost} />
      <Buttons final={true} />
    </>
  );
};

export default PayInfo;
