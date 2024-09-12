import styles from './bottomBookCurve.css'

const BottomBookCurve = ({color}) => {
    return(
       <div class="bottomBookCurve">
    <svg fill={color} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z"></path>
    </svg>
</div>
    );
}

export function links(){
    return [{rel: 'stylesheet', href: styles }];
}


export default BottomBookCurve;