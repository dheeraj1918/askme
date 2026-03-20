import Navigation from './Navigation/Navigation.jsx'
import Help from './pages/Help.jsx'
import Home from './pages/Home.jsx'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navigation/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/help" element={<Help/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
