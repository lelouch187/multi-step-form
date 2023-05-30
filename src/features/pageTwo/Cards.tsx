import React, { FC } from 'react'
import Card from './Card'
import arcade from '../../assets/images/icon-arcade.svg'
import advanced from '../../assets/images/icon-advanced.svg'
import pro from '../../assets/images/icon-pro.svg'


const Cards:FC = () => {
  return (
    <div className='Cards'>
      <Card cost={9}
      title='Arcade'
      key={1}
      img={arcade as unknown as string}/>
      <Card cost={12}
      title='Advanced'
      key={2}
      img={advanced as unknown as string} />
      <Card cost={15}
      title='Pro'
      key={3}
      img={pro as unknown as string}/>
    </div>
  )
}

export default Cards