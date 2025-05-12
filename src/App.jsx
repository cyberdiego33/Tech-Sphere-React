import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button className='border border-red-500 bg-red-600 mt-[25%] mx-auto block text-white font-bold px-4 py-2' onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  )
}

export default App
