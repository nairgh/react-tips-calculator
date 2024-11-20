import React from 'react'

const SelectPercentage = ({children, percentage, onSelect}) => {
  return (
    <div className="form-group">
     <label>{children}</label>
    <select value={percentage}
     onChange={(e) => onSelect(Number(e.target.value))}
     >
      <option value="0">Dissatisfied - 0%</option>
      <option value="5">It was ok - 5%</option>
      <option value="10">It was good- 10%</option>
      <option value="20">Absalutely Amazing! - 25%</option>
    </select>
    </div>
  )
}

export default SelectPercentage
