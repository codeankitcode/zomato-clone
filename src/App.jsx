import { useState } from 'react'

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import './App.css'
import Layout from './components/Layout';
import Home from './pages/Home';

function App() {
  // const [count, setCount] = useState(0)
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />}/>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
