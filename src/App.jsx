import { useState } from 'react'

import {Routes,Route} from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import ProductMenu from './components/ProductMenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/products/:firmId/:firmName' element={<ProductMenu/>}/>
      </Routes>
      
    </div>
  )
}

export default App
