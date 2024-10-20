import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomePage></HomePage>
      </header>
    </div>
  );
}

export default App;
