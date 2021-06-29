import { v4 as uuid } from 'uuid';
import './select-item.scss';

export default function SelectItem({ snack }) {
  return (
    <div className="select-item">
      <div className="item-features">
        <ul>
          {snack.features.map((feature) => (
            <li key={uuid()}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="item-quantity">
        <p className="quantity">{snack.qty} left!</p>
      </div>
    </div>
  );
}
