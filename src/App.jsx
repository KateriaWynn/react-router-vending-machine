import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import EnergyBar from './components/energy-bar/EnergyBar';
import TrailMix from './components/trail-mix/TrailMix';
import Water from './components/water/Water';
import snacks from './components/vending-machine/snacksList';
import './app.scss';

function App() {
  return (
    <div className="app">
      <h1 className="vending-title">Choose</h1>
      <div className="selections">
        <Router>
          <NavBar />
          <Route exact path="/energybar">
            <EnergyBar snacks={snacks} />
          </Route>
          <Route exact path="/trailmix">
            <TrailMix snacks={snacks} />
          </Route>
          <Route exact path="/water">
            <Water snacks={snacks} />
          </Route>
        </Router>
      </div>
    </div>
  );
}

export default App;
