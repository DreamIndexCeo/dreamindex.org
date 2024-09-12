import styles from "../../styles/services/addOnCard.css";

export default function AddOnCard({ addonName, addOnPrice }) {
  return (
    <div className="checkHover">
      <div className="card">
        <div className="front">
          <img src="./imgs/addon_button.png" />
        </div>
        <div className="back">
          <h3>{addonName}</h3>
          <h2>{addOnPrice}</h2>
        </div>
      </div>
    </div>
  );
}

export function links() {
  return [{ rel: "styleSheet", href: styles }];
}
