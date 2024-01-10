import styles from '../styles/gradientCard.css'

export default function GraidentCard() {
    return (
        <div className="gradientCard">
            <img src='' alt='cardImage'/>
        </div>
    );
}

export function links() {
  return [{rel: 'stylesheet', href: styles}];
}