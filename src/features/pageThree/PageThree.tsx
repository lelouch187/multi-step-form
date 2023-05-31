import React, { FC } from 'react';
import PageInfo from '../../components/PageInfo';
import PickItems from './PickItems';

const PageThree: FC = () => {
  return (
    <>
      <PageInfo title='Pick add-ons'
      subtitle='Add-ons help enchance your gaming experience.'
      />
      <PickItems />
    </>
  );
};

export default PageThree;
