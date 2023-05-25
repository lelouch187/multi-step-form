import React, {FC} from 'react'

const StepItem:FC = () => {
  return (
    <div className='step__wrapper'>
      <div className='step__number'>1</div>
      <div className='step__info'>
         <p className='step__subtitle'>step 1</p>
         <h3 className='step__title'>your info</h3>
      </div>
    </div>
  )
}

export default StepItem