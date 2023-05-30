import { FC } from 'react';

interface IPageInfo {
  title: string;
  subtitle: string;
}

const PageInfo: FC<IPageInfo> = ({ title, subtitle }) => {
  return (
    <>
      <h2 className="page__title">{title}</h2>
      <p className="page__subtitle">{subtitle}</p>
    </>
  );
};
export default PageInfo;
