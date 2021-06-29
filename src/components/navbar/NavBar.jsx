import { NavLink } from 'react-router-dom';
import './navbar.scss';

export default function NavBar() {
  return (
    <div className="vending-machine">
      <nav className="navbar">
        <NavLink exact to="/energybar">
          Crunchy Peanut Butter Cliff Bar
        </NavLink>
        <NavLink exact to="/trailmix">
          Nature's Garden Heart Healthy Trail Mix
        </NavLink>
        <NavLink exact to="/water">
          Evian Natural Spring Water
        </NavLink>
      </nav>
    </div>
  );
}
