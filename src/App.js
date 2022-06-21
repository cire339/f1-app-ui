import logo from './f1_logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my Formula One 2021 application.
        </p>
        GitHub Links:
        <a
          className="App-link"
          href="https://github.com/cire339/f1-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          API Project
        </a>
        <a
            className="App-link"
            href="https://github.com/cire339/f1-app-ui"
            target="_blank"
            rel="noopener noreferrer"
        >
          UI Project
        </a>
      </header>
    </div>
  );
}

export default App;
