import NavBar, { links as navBarLinks } from "../components/NavBar";
import styles from "../styles/services.css"
export const meta = () => {
  return [{ title: "DreamIndex || Services" }];
};

export default function Services() {
    return (
      <body>
         <NavBar />
         <div className="columnContainer">
          <section className="columnContainer">
            <h1>Where your Dream Website becomes Reality</h1>
            <p>Offering options for <span style={{color: 'red'}}>4 months financing</span> to give you</p>
            <p> more flexibility</p>
          </section>
         </div>
      </body>
       
    );
}

export function links() {
  return [
    ...navBarLinks(), 
    {rel: 'stylesheet', href: styles}
  ];
}