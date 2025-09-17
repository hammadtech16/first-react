import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav class='bg-sky-200 flex justify-between items-center m-2 p-3 rounded-2xl '>
      <div><img src="/src/assets/react.svg" alt="" srcset="" /></div>
      <ul class='flex gap-8 pf-9 '>
        <li><a href="#">Home</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">About</a></li>
      </ul>
      <div class='flex gap-4'>
        <button class=' p-2 w-24 text-center rounded-2xl bg-gray-100 hover:bg-amber-200 '> <a href="#">Shop</a></button>
        <button>Sign Up</button>
        
      </div>
    </nav>

    </>
  )
}

export default App
