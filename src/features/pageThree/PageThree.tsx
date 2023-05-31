import React, { FC } from 'react';
import PageInfo from '../../components/PageInfo';
import PickItems from './PickItems';
import Buttons from '../../components/Buttons';

const PageThree: FC = () => {
  return (
    <>
      <PageInfo title="Pick add-ons" subtitle="Add-ons help enchance your gaming experience." />
      <PickItems />
      <Buttons />
    </>
  );
};

export default PageThree;
