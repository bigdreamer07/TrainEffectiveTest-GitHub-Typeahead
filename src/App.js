import logo from './logo.svg';
import './App.css';
import Typeahead from './Typeahead.js'

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <img src={logo} className="App-logo" alt="logo" />
        <Typeahead />
      </div>
    </div>
  );
}

export default App;
