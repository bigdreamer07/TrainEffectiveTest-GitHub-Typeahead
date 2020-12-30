import './assets/App.css';
import Typeahead from './components/Typeahead.js'

function App() {
  const logo = 'https://media-exp1.licdn.com/dms/image/C4E0BAQFCPsksHVB7Jw/company-logo_100_100/0/1519867276417?e=1617235200&v=beta&t=uDV9q0X5zAJKjsjAbkQHCr-xMX6o-yLz8UjT5ALodr4';
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
