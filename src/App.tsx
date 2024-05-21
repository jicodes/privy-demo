import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { usePrivy } from '@privy-io/react-auth'

function App() {
  const { login } = usePrivy()

  return (
    <>
      <div>
        <a href="https://docs.privy.io/" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://docs.privy.io/" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Privy Demo</h1>
      <div className="card">
        <button onClick={login}>
          Login
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on logos to learn more
      </p>
    </>
  )
}

export default App
