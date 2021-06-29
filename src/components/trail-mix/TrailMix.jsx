import SelectItem from '../select-item/SelectItem';
import './trail-mix.scss';

export default function TrailMix({ snacks }) {
  return (
    <div className="trail-mix">
      <div className="item-picture">
        <img className="item" src={snacks[0].src} alt={snacks[0].name} />
      </div>
      <div className="item-price">
        <p className="price">${snacks[0].price}</p>
      </div>
      <p className="name">{snacks[0].name}</p>
      <SelectItem snack={snacks[0]} />
    </div>
  );
}
