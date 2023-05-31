import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeActiveCard, selectPageTwo } from './pageTwo-slice';

interface ICard {
  img: string;
  title: string;
  cost: number;
}

const Card: FC<ICard> = ({ img, title, cost }) => {
  const page = useAppSelector(selectPageTwo);
  const dispatch = useAppDispatch();

  return (
    <div
      onClick={() => dispatch(changeActiveCard(cost))}
      className={page.activeCard === cost ? 'Cards__item active' : 'Cards__item'}>
      <div className="Cards__wrapper--img">
        <img src={img} alt="img1" />
      </div>
      <h3 className="Cards__title">{title}</h3>
      <p className="Cards__cost">{page.checkedStatus === false ? `$${cost}/mo` : `$${cost}0/yr`}</p>
      {page.checkedStatus === true ? <p className="Cards__discount">2 months free</p> : null}
    </div>
  );
};

export default Card;
