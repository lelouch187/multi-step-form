import React, { FC } from 'react'
import confirm from '../../assets/images/icon-thank-you.svg'

const PageFive:FC = () => {
  return (
    <div className='result'>
      <div className='result__img__wrapper'
      ><img className='result__img'
      src={confirm as unknown as string} alt='confirm'/></div>
      <h2 className='result__title'>Thank you!</h2>
      <p className='result__text'>Thanks for comfirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </div>
  )
}

export default PageFive