import styles from "../styles/grayBox.css"

export default function DynamicGrayBox({color, header, paragraph, src}) {
    return (
        <div style={{boxShadow : color}} className="dynamicGrayBox grayBoxColumnContainer">
            <img style={{width: '80px'}} src={src} />
            <h1 className= "codyStartSubtitle">{header}</h1>
            <p className="codyStartParagraph">{paragraph}</p>

        </div>
    );
}

export function links() {
  return [{rel: 'stylesheet', href: styles}];
}