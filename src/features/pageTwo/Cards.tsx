import React, { FC } from 'react'
import Card from './Card'
import { useAppSelector } from '../../hooks'
import { selectCards } from './pageTwo-slice'



const Cards:FC = () => {
  const cards = useAppSelector(selectCards)
  return (
    <div className='Cards'>
      {cards.map(card=>{
        return <Card cost={card.cost}
        img={card.img}
        title={card.title}
        />
      })}
    </div>
  )
}

export default Cards