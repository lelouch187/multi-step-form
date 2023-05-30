import React, { FC } from 'react'
import { useAppDispatch } from '../../hooks'
import { changeStep } from '../sidebar/side-slice'

const Buttons:FC = () => {
   const dispatch = useAppDispatch()
  return (
    <>
      <input onClick={()=>dispatch(changeStep(1))}
      className='button-prev'
      value='Go Back'
      type='button' />
      <input onClick={()=>dispatch(changeStep(3))}
      className='button-next'
      value='Next Step'
      type='button' />
    </>
  )
}

export default Buttons