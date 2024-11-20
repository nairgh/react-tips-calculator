import React from 'react'

const Output = ({bill,tip}) => {
  const totalBill = parseFloat(bill) + parseFloat(tip);
  return (
    <div>
      <h3>
        Amount Payable: ${totalBill.toFixed(2)} (${parseFloat(bill).toFixed(2)} + $
        {parseFloat(tip).toFixed(2)} tip)
      </h3>
     </div>
  );
}

export default Output