import { useState } from 'react'
import './App.css'
import TipsCalculator from './components/TipsCalculator'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='app'>
         <TipsCalculator />
      </div>  
  )
}

export default App
