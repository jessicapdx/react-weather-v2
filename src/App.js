import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Vancouver" />
        <div className="footer">
          <a
            href="https://github.com/jessicapdx/react-weather-v2"
            target="_blank"
            rel="noreferrer"
          >
            Open source code
          </a>
          <span> by Jessica Barrows-Butler</span>
        </div>
      </div>
    </div>
  );
}
