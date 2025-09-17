import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav class='bg-sky-400 flex justify-between items-center m-2 p-3 rounded-2xl '>
      <div><img src="/src/assets/react.svg" alt="" srcset="" /></div>
      <ul class='flex gap-8 pf-9 bg-red-300  '>
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">About</a></li>
      </ul>
      <div class='flex gap-4'>
        <button class='mx-8 bg-gray-800 '>Shop</button>
        <button>Sign Up</button>
        <button>First <Second></Second></button>
      </div>
    </nav>

    </>
  )
}

export default App
