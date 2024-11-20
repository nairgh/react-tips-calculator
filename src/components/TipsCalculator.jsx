import React,{useState} from 'react'
import BillInput from './BillInput'
import SelectPercentage from './SelectPercentage'
import Output from './Output'

const TipsCalculator = () => {
    const [bill, setBill] = useState("")
    const [percentage1, setPercentage1] = useState(0)
    const [percentage2, setPercentage2] = useState(0)

    const tip = (bill * (percentage1 + percentage2) / 2 / 100);

    function Reset({ onReset }) {
      return <button className='btn' onClick={onReset}>Reset</button>;
    }
    function handleReset(){
        setBill("")
        setPercentage1(0)
        setPercentage2(0)
    }
  return (
    <div>
      <h2 className="header">Bill Calculator</h2>
      <div className="form-container">
        <div children="form-group">
          <BillInput bill={bill} onSetBill={setBill} />
        </div>

        <div className="form-group">
          <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
            How did you like the service ?
          </SelectPercentage>
        </div>
        <div className="form-group">
          <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
            How did your friend like the service ?
          </SelectPercentage>
        </div>
      </div>
      <div className="form-container">
        <div className="summary">
          {bill > 0 && (
            <>
              <Output bill={bill} tip={tip} />
              <Reset onReset={handleReset} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default TipsCalculator