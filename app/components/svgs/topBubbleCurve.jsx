import styles from "./bubbleCurve.css";
const TopBubbleCurve = ({ color }) => {
  return (
    <div class="topBubbleCurve">
      <svg
        fill={color}
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"></path>
      </svg>
    </div>
  );
};

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default TopBubbleCurve;
