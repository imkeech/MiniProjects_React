import { useState } from 'react'
import './App.css'
import { Usercard } from './Usercard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Usercard />
    </>
  )
}

export default App
