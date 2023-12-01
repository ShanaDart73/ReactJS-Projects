import './sass/home_style.css';

function App() {
  return (
      <div className="container">
          <header>
              <div className="hero">
                  <h1>React.JS</h1>
              </div>
          </header>

          <div className="content">
              <section>
                  <div>Prime Number</div>
              </section>
              <section>
                  <div>Factorial</div>
              </section>
              <section>
                  <div>Random Number</div>
              </section>
              <section>
                  <div>ASCII Value</div>
              </section>
          </div>

          <footer>
              <p>React.JS Projects</p>
          </footer>
      </div>

  );
}

export default App;
