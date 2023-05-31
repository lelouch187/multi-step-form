import React, { FC } from 'react';

interface ITotalCostProps {
  totalCost: number;
  checkedStatus: boolean;
}

const TotalCost: FC<ITotalCostProps> = ({ totalCost, checkedStatus }) => {
  return (
      <div className="total">
        <p className="total__title">Total {checkedStatus ? '(per year)' : '(per month)'}</p>
        <p className="total__cost">
          {`+$${totalCost}`}
          {checkedStatus ? '/yr' : '/mo'}
        </p>
      </div>
  );
};

export default TotalCost;
