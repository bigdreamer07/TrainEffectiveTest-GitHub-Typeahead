import logo from './logo.svg';
import './App.css';
import Typeahead from './Typeahead.js'

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="App-title">Github User Typeahead</h2>
        <Typeahead />
      </div>
    </div>
  );
}

export default App;
