import { FC } from 'react';

interface IPageInfo {
  title: string;
  subtitle: string;
}

const PageInfo: FC<IPageInfo> = ({ title, subtitle }) => {
  return (
    <>
      <h2 className="page-one__title">{title}</h2>
      <p className="page-one__subtitle">{subtitle}</p>
    </>
  );
};
export default PageInfo;
