import React from 'react'

const BillInput = ({bill, onSetBill}) => {
  return (
      <div className="form-group">
         <label for="bill">Bill Amount:</label>
         <input
          type="text"
          id="bill"
          value={bill}
          onChange={(e) => onSetBill(e.target.value)}
        />
      </div>
   
  );
}

export default BillInput