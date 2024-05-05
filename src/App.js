import './sass/home_style.css'
import {Homepage } from './pages/Homepage'
import { ShoppingList } from './pages/ShoppingList'
import { Factorial } from './pages/Factorial'
import { PrimeNumber } from './pages/PrimeNumber'
import { RandomNumber } from './pages/RandomNumber'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
      <BrowserRouter>
          <div className="container">
              <div className="content">

                  <Routes>
                      <Route path="/" element={<Homepage/>} />
                      <Route path="/ShoppingList" element={<ShoppingList/>} />
                      <Route path="/Factorial" element={<Factorial/>} />
                      <Route path="/PrimeNumber" element={<PrimeNumber/>} />
                      <Route path="/RandomNumber" element={<RandomNumber/>} />
                  </Routes>

              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;


