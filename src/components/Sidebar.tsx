import React,{FC} from 'react'
import '../styles/sidebar.scss'
import StepItem from './StepItem'

const Sidebar:FC = () => {
  return (
   <aside className="sidebar">
      <StepItem />
      <StepItem />
      <StepItem />
   </aside>
  )
}

export default Sidebar