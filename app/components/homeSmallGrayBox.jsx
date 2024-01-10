import styles from "../styles/grayBox.css"

export default function GrayBox({paragraph}) {
    return (
        <div className="grayBox">
            <img src="" alt="imageIcon" />
            <p className="cutiveParagraph">{paragraph}</p>
        </div>
    );
}

export function links() {
  return [{rel: 'stylesheet', href: styles}];
}