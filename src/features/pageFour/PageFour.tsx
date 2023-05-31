import React, { FC } from 'react';
import PageInfo from '../../components/PageInfo';
import PayInfo from './PayInfo';

const PageFour: FC = () => {
  return <>
  <PageInfo title='Finishing up'
  subtitle='Double-check everything looks OK before confirming.'
  />
  <PayInfo />
  </>;
};

export default PageFour;
