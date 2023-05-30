import React, { FC } from 'react'
import PageInfo from '../../components/PageInfo'
import Cards from './Cards'

const PageTwo:FC = () => {
  return (
    <>
  <PageInfo title='Selecet your plan'
  subtitle='You have the option of monthly or yearly billing.'
  />
  <Cards />
    </>
  )
}

export default PageTwo