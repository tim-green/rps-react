import logo from './logo.svg';
import './App.css';

import { useContext } from "react";
import "./App.css";

// import components
import Header from "./components/Header/Header";
import Rules from "./components/Rules/Rules";
import Options from "./components/Options/Options";
import Footer from "./components/Footer/Footer";
import Picks from "./components/Picks/Picks";
import Overlay from "./components/Overlay/Overlay";

// import media.scss
import "./media.scss";

// import game context
import GameContext from "./context/GameContext";

// Function App
function App() {
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
      </header>
    </div>
  );
}

export default App;
