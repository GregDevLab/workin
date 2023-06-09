import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyRouter from './router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MyRouter />
    </div>
  )
}

export default App
