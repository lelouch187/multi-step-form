import { FC } from 'react';
import PageInfo from '../../components/PageInfo';
import FormOne from './FormOne';

const PageOne: FC = () => {
  return (
    <>
      <PageInfo
        title="Personal info"
        subtitle="Please provide your name, email address, and phone number."
      />
      <FormOne />
    </>
  );
};
export default PageOne;
