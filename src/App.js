import logo from './logo.svg';
import './App.css';
import Componet from './Componet';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Siempre fit
        </p>
        <a
          className="App-link"
          href="https://es.react.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende React
        </a>
      <Componet/>
      </header>
    </div>
  );
}

export default App;
