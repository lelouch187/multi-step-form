import React, { FC } from 'react';
import PageInfo from '../../components/PageInfo';
import Cards from './Cards';
import Switch from './Switch';
import Buttons from '../../components/Buttons';

const PageTwo: FC = () => {
  return (
    <>
      <PageInfo
        title="Selecet your plan"
        subtitle="You have the option of monthly or yearly billing."
      />
      <Cards />
      <Switch />
      <Buttons />
    </>
  );
};

export default PageTwo;
