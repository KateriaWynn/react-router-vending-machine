import SelectItem from '../select-item/SelectItem';
import './energy-bar.scss';

export default function EnergyBar({ snacks }) {
  return (
    <div className="energy-bar">
      <div className="item-picture">
        <img className="item" src={snacks[1].src} alt={snacks[1].name} />
      </div>
      <div className="item-price">
        <p className="price">${snacks[1].price}</p>
      </div>
      <p className="name">{snacks[1].name}</p>
      <SelectItem snack={snacks[1]} />
    </div>
  );
}
