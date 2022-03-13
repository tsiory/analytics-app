import logo from './logo.svg';
import './App.css';

let umami;

function App() {
  function handleSalesClick() {
    if (window.umami) {
      umami('Sales button clicked');
    }
  }

  function handleProductsClick() {
    if (window.umami) {
      umami('Products button clicked');
    }
  }

  function handleCoursesClick() {
    if (window.umami) {
      umami('Courses button clicked');
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button id="sales" onClick={handleSalesClick}>Sales</button>
        <button id="products" onClick={handleProductsClick}>Products</button>
        <button id="courses" onClick={handleCoursesClick}>Courses</button>
      </header>
    </div>
  );
}

export default App;
