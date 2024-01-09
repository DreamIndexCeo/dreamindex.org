import NavBar, { links as navBarLinks } from "../components/NavBar";
import BubbleCurve, {links as bubbleCurveLinks} from "../components/svgs/BubbleCurve";
import TopBookCurve, {links as topBookCurveLinks} from "../components/svgs/TopBookCurve";
import BottomBookCurve, {links as bottomOfBookCurveLinks} from "../components/svgs/BottomOfBookCurve";



export const meta = () => {
  return [{ title: "DreamIndex" }];
};

export default function Index() {
  return (
    <div>
      <div className="hero"> 
        <NavBar />
        <section>
          <h1>section 1</h1>
        </section>
         <BubbleCurve color='#111111' />
      </div>
     
     <div>
      <section className="services">
        <div>
          <h1>Row</h1>
        </div>
        <div>
          <h1>Services</h1>
        </div>
        <div>
          <h1>Astronaut</h1>     
        </div>
        <BubbleCurve color='#D9D9D9' />
      </section>
     
    </div>

    <section className="websiteProcess">
        <div>
          <h1>section 3</h1>
        </div>
        <div>
          <h1>section 3</h1>
        </div>      
    </section>

    <section className="dreamsite">
      <div>
        <h1>section 4</h1>
      </div>
      <div>
        <h1>section 4</h1>
      </div>  
      <BottomBookCurve />
    </section>

       <section className="dica">
        <div>
          <h1>section 5</h1>
        </div>
        <div>
          <h1>section 5</h1>
        </div> 
        <div>
          <h1>section 5</h1>
        </div>    
        <TopBookCurve />  
      </section>
      
    </div>
   
  );

  
}

// maps out all the links the components contains
export function links() {
  return [...navBarLinks(), ...bubbleCurveLinks(), ...topBookCurveLinks(), ...bottomOfBookCurveLinks()];
}
