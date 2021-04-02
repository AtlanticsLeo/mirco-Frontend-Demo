import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a Vue. Don't be fooled by the logo.
        </p>
        <a
          className="App-link"
          href="https://www.google.com/search?q=google+it+yourself"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Vue
        </a>
        <br></br>
        <a href="/Definitely-not-vue"><button className="btn">Vue</button></a>
        <a href="/angular"><button className="btn">HTML</button></a>
      </header>
    </div>
  );
}

export default App;
