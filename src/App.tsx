import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

    const increment = () => setCount((count) => count + 1)

  return (
    <div className="App">
      Hello count {count}
        <button onClick={increment}>Hello ;)</button>
    </div>
  )
}

export default App
