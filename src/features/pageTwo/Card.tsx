import React, { FC, SVGProps } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { activeCard, changeActiveCard } from './pageTwo-slice';

interface ICard {
  img: string;
  title: string;
  cost: number;
}

const Card: FC<ICard> = ({ img, title, cost }) => {
  const status = useAppSelector(activeCard);
  const dispatch = useAppDispatch();

  return (
    <div
      onClick={() => dispatch(changeActiveCard(cost))}
      className={status === cost ? 'Cards__item active' : 'Cards__item'}>
      <div className="Cards__wrapper--img">
        <img src={img} alt="img1" />
      </div>
      <h3 className="Cards__title">{title}</h3>
      <p className="Cards__cost">{status === 0 ? `$${cost}/mo` : `$${cost}0/yr`}</p>
      {status === 0 ? <p className="Cards__discount">2 months free</p> : null}
    </div>
  );
};

export default Card;
