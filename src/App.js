import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<LandingPage />}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
