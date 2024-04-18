import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/Jokes'
import Jokes from './components/Jokes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Jokes></Jokes>
    </>
  )
}

export default App
