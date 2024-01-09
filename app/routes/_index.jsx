import NavBar, { links as navBarLinks } from "../components/NavBar";
import BubbleCurve, {links as bubbleCurveLinks} from "../components/svgs/BubbleCurve";
import TopBookCurve, {links as topBookCurveLinks} from "../components/svgs/TopBookCurve";
import BottomBookCurve, {links as bottomOfBookCurveLinks} from "../components/svgs/BottomOfBookCurve";



export const meta = () => {
  return [{ title: "DreamIndex" }];
};

export default function Index() {
  return (
   <body>
      <NavBar />

      <div className="hero">   
        <section>

          <div>
            <h1>Dream Index</h1>
            <p>The Business that will help all types of up and coming businesses build their online presence or advance it, using services like web and logo design, hosting and marketing software</p>
          </div>

         <div>
         </div>

        </section>
         <BubbleCurve color='#111111' />
      </div>
     
     
      <section className="services">
        <div>
          <h3>Coding</h3>
          <p>The Business that will help all types of up and coming</p>
        
          <h3>Startup</h3>
          <p>The Business that will help all types of up and coming</p>
        
          <h3>Server</h3>
          <p>The Business that will help all types of up and coming</p>
        </div>
        <div>
          <h1>Services</h1>
        </div>
        <div>
          <h1>Astronaut</h1>     
        </div>
        <BubbleCurve color='#D9D9D9' />
      </section>
   

    <section className="websiteProcess">
        <div>
          <h1>Website Creation Made Easy</h1>
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
        <h1>DreamSite</h1>
        <p>The Convenient web editor to your Dream Site. Be able to make any changes to your website's Content, Color Scheme, and Prices</p>
        <h4>Available for Desktop, IOS, and Android</h4>
        <p>(depending on your hosting plan)</p>
      </div>  
      <BottomBookCurve color='#111111' />
    </section>

    <section className="dica">
      <h1>D.I.C.A</h1>
      <div>
        <h2>Row with Arrows</h2>
      </div>
        <div>
          <h2>Capture</h2>
          <p>Capture leads using our landing pages, surveys, forms, calendars, inbound phone system & more!</p>
          
          <h2>Nurture</h2>
          <p>Automatically message leads via voicemail, forced calls, SMS, emails, FB Messenger & more!</p>
        
          <h2>Close</h2>
          <p>Use our built in tools to collect payments, schedule appointments, and track analytics!</p>
        
        </div>
        <button>View Plan</button>

        <div>
          <h2>You think & We Create</h2>
          <p>The Convenient web editor to your dream site. Be able to make any chances to you website’s Content, Color Scheme, and Prices. Availably for Desktop, IOS & Android!!! (depending on your hosting plan)</p>
        </div> 
        <button>Contact</button>
        <div>
          <h2>Our Recent Work</h2>
          <p>Carousel</p>
          <button>View More</button>
        </div>    
        <TopBookCurve color='#D2D2D2' />  
    </section>
      
   </body>
   
  );

  
}

// maps out all the links the components contains
export function links() {
  return [...navBarLinks(), ...bubbleCurveLinks(), ...topBookCurveLinks(), ...bottomOfBookCurveLinks()];
}
