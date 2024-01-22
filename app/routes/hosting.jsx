import NavBar, { links as navBarLinks } from "../components/NavBar";
import styles from "../styles/hosting.css";
export const meta = () => {
  return [{ title: "DreamIndex || Services" }];
};

export default function Services() {
  return (
    <body>
      <NavBar />

      <section className="columnContainer">
        <h1 className="gradientTitle">Let your vision reach Millions</h1>
        <p>
          Now offering the first 30 days free for your first Company made
          website
        </p>
      </section>

      <section className="hostingOptions">
        <div className="basic">
          <h3>BASIC</h3>
          <h3 className="price">$15/m</h3>
          <p className="planList">
            <ul>
              <li>Standard Performance</li>
              <li>24/7 Website Hosting</li>
              <li>Domain Name</li>
              <li>Wesbite Security</li>
              <li>9/5 Live Support</li>
            </ul>
          </p>
          <p>*Fee $50 for wesbite changes</p>
        </div>
        <div className="advance">
          <h3>Advance</h3>
          <h3 className="price">$35/m</h3>
          <p className="planList">
            <ul>
              <li>Standard Performance</li>
              <li>24/7 Website Hosting</li>
              <li>Domain Name</li>
              <li>Wesbite Security</li>
              <li>9/5 Live Support</li>
              <li> + Web Editior (Desktop version)</li>
              <li> + Database Hosting</li>
              <li> + Appointment Manager</li>
            </ul>
          </p>
        </div>
        <div className="master">
          <h3>Master</h3>
          <h3 className="price">$60/m</h3>
          <p className="planList">
            <ul>
              <li>+ Increased Performance</li>
              <li>24/7 Website Hosting</li>
              <li>Domain Name</li>
              <li>Wesbite Security</li>
              <li>+ 24/7 Live Support</li>
              <li>+ Web Editior (Desktop version & App Version)</li>
              <li>Database Hosting</li>
              <li>Appointment Manager</li>
              <li>+ 1 Extra Website and Database hosting</li>
            </ul>
          </p>
        </div>
        <div className="corporation">
          <h3>Corporation</h3>
          <h3 className="price">$/m</h3>
        </div>
      </section>

      <section>
        <div className="blueDiv">
          <div>
            <img src="./imgs/software_mockup.png" />
          </div>
          <div>
            <h1>Make your Changes with DreamSite</h1>
            <p>
              No need to contact any Developers or Designers to make any simple
              changes needed in the moment.
            </p>
          </div>
        </div>
      </section>
    </body>
  );
}

export function links() {
  return [...navBarLinks(), { rel: "stylesheet", href: styles }];
}
