import './sass/home_style.css'
import {Homepage } from './Homepage'
import { ShoppingList } from './ShoppingList'
import { Factorial } from './Factorial'
import { PrimeNumber } from './PrimeNumber'
import { RandomNumber } from './RandomNumber'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
      <BrowserRouter>
          <div className="container">
              <div className="content">
                  <header>
                      <div className="hero"><h1>React.JS</h1></div>
                  </header>

                  <Routes>
                      <Route path="/" element={<Homepage/>} />
                      <Route path="/ShoppingList" element={<ShoppingList/>} />
                      <Route path="/Factorial" element={<Factorial/>} />
                      <Route path="/PrimeNumber" element={<PrimeNumber/>} />
                      <Route path="/RandomNumber" element={<RandomNumber/>} />
                  </Routes>

                  <footer>
                      <p>React.JS Projects</p>
                  </footer>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
