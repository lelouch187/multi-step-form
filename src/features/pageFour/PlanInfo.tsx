import React, { FC } from 'react';
import { ICard } from '../pageTwo/pageTwo-slice';
import { useAppDispatch } from '../../hooks';
import { changeStep } from '../sidebar/side-slice';

interface IPlanInfoProps {
  card: ICard;
  checkedStatus: boolean;
}

const PlanInfo: FC<IPlanInfoProps> = ({ card, checkedStatus }) => {
  const dispatch = useAppDispatch()
  return (
      <div className="pay__plan">
        <div className="pay__plan__info">
          <h3 className="pay__plan__title">
            {card.title} ({checkedStatus ? 'Yearly' : 'Monthly'})
          </h3>
          <button onClick={()=>dispatch(changeStep(2))}
          className="pay__plan__change">Change</button>
        </div>
        <p className="pay__plan__cost">
          {checkedStatus ? `$${card.cost * 10}/yr` : `$${card.cost}/mo`}
        </p>
      </div>
  );
};

export default PlanInfo;
