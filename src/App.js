import './sass/home_style.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home'
import ShoppingList from './pages/ShoppingList'
import Factorial from './pages/Factorial'
import PrimeNumber from './pages/PrimeNumber'
import RandomNumber from './pages/RandomNumber'

function App() {

  return (
      <Router>
          <div className="container">
              <div className="content">
                  <header>
                      <div className="hero"><h1>React.JS</h1></div>
                  </header>

                  <Routes>
                      <Route path="/" element={<Home/>} />
                      <Route path="/ShoppingList" element={<ShoppingList/>} />
                      <Route path="/Factorial" element={<Factorial/>} />
                      <Route path="/PrimeNumber" element={<PrimeNumber/>} />
                      <Route path="/RandomNumber" element={<RandomNumber/>} />
                  </Routes>

                  <section className="one">
                      <div className="text">
                          <Link to="/Shoppinglist"><h2>Shopping List</h2></Link>
                      </div>
                  </section>
                  <section className="two">
                      <div className="text">
                          <Link to="/Factorial"><h2>Factorial</h2></Link>
                      </div>
                  </section>
                  <section className="three">
                      <div className="text">
                          <Link to="/PrimeNumber"><h2>Random Number</h2></Link>
                      </div>
                  </section>
                  <section className="four">
                      <div className="text">
                          <Link to="/RandomNumber"><h2>Prime Number</h2></Link>
                      </div>
                  </section>
                  <footer>
                      <p>React.JS Projects</p>
                  </footer>
              </div>
          </div>
      </Router>
  );
}

export default App;
