import NavBar, { links as navBarLinks } from "../components/NavBar";

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
      </div>
      
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
      </section>

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
      </section>
      
    </div>
   
  );

  
}

// maps out all the links the components contains
export function links() {
  return [...navBarLinks()];
}
