import styles from "../styles/priceBox.css";
import { FaCheckCircle } from "react-icons/fa/index.js";
export default function PriceBox({
  label,
  price,
  description,
  listItemOne,
  listenItemTwo,
  listItemThree,
}) {
  return (
    <div className="priceBox">
      <h3 className="label">{label}</h3>
      <h1>${price}</h1>
      <p className="description">{description}</p>
      <ul className="listItems">
        <li>
          <FaCheckCircle /> {listItemOne}
        </li>
        <li>
          <FaCheckCircle />
          {listenItemTwo}
        </li>
        <li>
          <FaCheckCircle />
          {listItemThree}
        </li>
      </ul>
      <button>
        <p>Get Started</p>
      </button>
    </div>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}