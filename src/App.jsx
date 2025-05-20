import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fmwskwong.com%2Fblog%2Fenforcing-coding-style-with-vercel-style-guide&psig=AOvVaw0RhrdS5o4M1F-FxMFmlhGm&ust=1747795952744000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCODdubiFsY0DFQAAAAAdAAAAABAE" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Test Vercel</h1>
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
