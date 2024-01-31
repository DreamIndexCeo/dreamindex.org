import NavBar, { links as navBarLinks } from "../components/index/NavBar";
import styles from "../styles/hosting/hosting.css";
export const meta = () => {
  return [{ title: "DreamIndex || Services" }];
};

export default function Services() {
  return (
    <body>
      <NavBar />

      <section className="titleContainer">
        <h1 className="gradientTitle">Let your Vision reach Millions</h1>
        <p className="subTitle">
          Now offering the first 30 days free for your first Company made
          website
        </p>
      </section>
      
      <section className="switchContainer">
        <p className="subTitle">
          Monthly / Yearly
        </p>
        <label class="switch">
            <input class="toggle" type="checkbox"/>
            <span class="slider"></span>
            <span class="card-side"></span>
        </label>
      </section>

      <section className="hostingContainer">
        <section className="hostingOptions">
          <div className="basic priceContainer">
            <h3>BASIC</h3>
            <div className="priceRow">
              <h3 className="price">$15</h3>
              <h3 className="price2">/m</h3>
            </div>
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
          <div className="advance priceContainer">
            <h3>ADVANCED</h3>
            <div className="priceRow">
              <h3 className="price">$35</h3>
              <h3 className="price2">/m</h3>
            </div>
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
          <div className="master priceContainer">
            <h3>MASTER</h3>
            <div className="priceRow">
              <h3 className="price">$60</h3>
              <h3 className="price2">/m</h3>
            </div>
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
          <div className="corporation priceContainer">
            <h3>Corporation</h3>
            <div className="priceRow">
              <h3 className="price">$???</h3>
              <h3 className="price2">/m</h3>
            </div>
          </div>

          
        </section>

        <a class="fancy" href="#">
          <span class="top-key"></span>
          <span class="text">Get A Quote</span>
          <span class="bottom-key-1"></span>
          <span class="bottom-key-2"></span>
        </a>
      </section>

      <section>
        <div className="blueDiv">
          <div class="img"></div>
          <div class="text">
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
