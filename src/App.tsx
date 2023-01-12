import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

    const increment = () => setCount((count) => count + 1)

  return (
    <div className="App">
      Hello count {count}
        <button style={{background: "black"}} onClick={increment}>Hellos ;)</button>
    </div>
  )
}

export default App
