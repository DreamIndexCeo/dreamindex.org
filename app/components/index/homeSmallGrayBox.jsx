import styles from "../../styles/index/grayBox.css";

export default function GrayBox({ paragraph, src }) {
  return (
    <div className="grayBox">
      <img src={src} alt="imageIcon" />
      <p className="cutiveParagraph">{paragraph}</p>
    </div>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
