import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './components/landing.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        {/* Nav bar */}
        {/* Landing Page */}
        {/* "Donuts: Love at First Bite" */}{/* Spinning 3D pink donut model */}
        {/* Featured Donuts "Shop Now" */}
        {/* Landing Page 3D donut model */}
        {/* Newsletter Notification Signup */}
        {/* Footer Links */}
      <Landing />
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
