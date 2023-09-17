import { useState } from 'react'

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import './App.css'
import Layout from './components/Layout';
import Home from './pages/Home';
import Foods from './pages/Foods';
import Account from './pages/Account';
import NotFound from './pages/NotFound';
function App() {
  // const [count, setCount] = useState(0)
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />}/>
          <Route path='foods' element={<Foods />} />
          <Route path='/login' element={<Account />} />

        <Route path='*' element={<NotFound />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
