import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes'
    

function App() {
  const [nightMode, SetNightMode] = useState(true)

  return (
    <div id='app' className="App">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
