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
              <section className="one">
                  <div>Prime Number</div>
              </section>
              <section className="two">
                  <div>Factorial</div>
              </section>
              <section className="three">
                  <div>Random Number</div>
              </section>
              <section className="four">
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
