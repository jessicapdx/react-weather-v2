import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>React Weather App V2</h1>
        <Weather />
        <div className="footer">
          <a
            href="https://github.com/jessicapdx/react-weather-v2"
            target="_blank"
            rel="noreferrer"
          >
            Open source code
          </a>
          <p>by Jessica Barrows-Butler</p>
        </div>
      </div>
    </div>
  );
}
