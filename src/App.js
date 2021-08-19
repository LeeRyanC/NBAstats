import './App.css';
import Main from './components/Main';
import Lookup from './components/Lookup';
import {Router} from '@reach/router'

function App() {
  return (
    <div className="App">
      <Router>
        <Main path='/'/>
        <Lookup path='/stats' />
      </Router>
    </div>
  );
}

export default App;
