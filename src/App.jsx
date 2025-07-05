import React from 'react'
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Home from './pages/Dashboard/Home'
import Income from './pages/Dashboard/Income'
import Expense from './pages/Dashboard/Expense'
import { Toaster } from 'react-hot-toast'
import Budget from './pages/Dashboard/Budget'
const App = () => {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/income" exact element={<Income />} />
            <Route path="/expense" exact element={<Expense />} />
            <Route path="/budget" exact element={<Budget />} />
          </Routes>
        </Router>
      </div>
      <Toaster
        toastOptions={{
          className: '',
          style: {
            fontSize: '13px',
          },
        }}
      />
    </>
  )
}

export default App
