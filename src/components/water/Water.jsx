import SelectItem from '../select-item/SelectItem';
import './water.scss';

export default function Water({ snacks }) {
  return (
    <div className="water">
      <div className="item-picture">
        <img className="item" src={snacks[2].src} alt={snacks[2].name} />
      </div>
      <div className="item-price">
        <p className="price">${snacks[2].price}</p>
      </div>
      <p className="name">{snacks[2].name}</p>
      <SelectItem snack={snacks[2]} />
    </div>
  );
}
