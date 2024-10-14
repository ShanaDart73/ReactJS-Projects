import './sass/home_style.css'
import {Homepage } from './pages/Homepage'
import { ShoppingList } from './pages/ShoppingList'
import { TicTacToe } from './pages/TicTacToe'
import { Flashcard } from './pages/Flashcard'
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
                      <Route path="/TicTacToe" element={<TicTacToe/>} />
                      <Route path="/Flashcard" element={<Flashcard/>} />
                      <Route path="/RandomNumber" element={<RandomNumber/>} />
                  </Routes>

              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;


