import { useState } from 'react'

import './App.css'

function App() {

  
  const [count, setCount] = useState(0)

  const handleCount = (e) => {
    setCount(count + 1)
  }

  return (
    <>
    <div className="main-container">
      <button onClick={handleCount}>Gorda trola</button>
      {
        count > 20 ?
        <p className='contador'>Se paso</p> 
        :
        
        <p className="contador">{count}</p>
      }
      
    </div>
      

    </>
  )
}

export default App
