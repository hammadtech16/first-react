import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav class='bg-sky-200 flex justify-between items-center m-2 p-3 rounded-2xl '>
      <div><img src="/src/assets/taxbert-logo.png" alt="" srcset="" /></div>
      <ul class='flex gap-8 pf-9 '>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Inbox</a></li>
        <li><a href="#">UTR</a></li>
        <li><a href="#">Tax returns</a></li>
        <li><a href="#">Search</a></li>
        <li><a href="#">Clients</a></li>
        <li><a href="#">Reports</a></li>
      </ul>
      <div>
        <div class='w-42 h-42 bg-white to-50% rounded-b-lg text-black'>
<span class="icon-[solar--chat-unread-bold]"></span>
        </div>
      </div>
    </nav>

    </>
  )
}

export default App
