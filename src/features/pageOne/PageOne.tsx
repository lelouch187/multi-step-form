import { FC } from 'react';
import PageInfo from '../../components/PageInfo';
import FormOne from './FormOne';

const PageOne: FC = () => {
  return (
    <section className="page">
      <PageInfo
        title="Personal info"
        subtitle="Please provide your name, email address, and phone number"
      />
      <FormOne />
    </section>
  );
};
export default PageOne;
