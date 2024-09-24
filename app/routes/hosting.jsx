import { Link } from "@remix-run/react";
import NavBar, { links as navBarLinks } from "../components/index/NavBar";
import styles from "../styles/hosting/hosting.css";
import Footer, { links as footerLinks } from "../components/index/Footer";
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
        <p className="subTitle">Monthly / Yearly</p>
        <label class="switch">
          <input class="toggle" type="checkbox" />
          <span class="slider"></span>
          <span class="card-side"></span>
        </label>
      </section>

      <section className="hostingContainer">
        <section className="hostingOptions">
          <div className="basic priceContainer">
            <h3>BASIC</h3>
            <div className="priceRow">
              <h3 className="price">$35</h3>
              <h3 className="price2">/m</h3>
            </div>
            <p className="planList">
              <ul>
                <li>Standard Performance</li>
                <li>24/7 Website Hosting</li>
                <li>Domain Name</li>
                <li>Website Security</li>
                <li>9/5 Live Support</li>
              </ul>
            </p>
            <p>*Fee $50 for website changes</p>
          </div>
          <div className="advance priceContainer">
            <h3>ADVANCED</h3>
            <div className="priceRow">
              <h3 className="price">$50</h3>
              <h3 className="price2">/m</h3>
            </div>
            <p className="planList">
              <ul>
                <li>Standard Performance</li>
                <li>24/7 Website Hosting</li>
                <li>Domain Name</li>
                <li>Website Security</li>
                <li>9/5 Live Support</li>
                <li> + Web Editor (Desktop version)</li>
                <li> + Database Hosting</li>
                <li> + Appointment Manager</li>
              </ul>
            </p>
          </div>
          <div className="master priceContainer">
            <h3>Pro +</h3>
            <div className="priceRow">
              <h3 className="price">$75</h3>
              <h3 className="price2">/m</h3>
            </div>
            <p className="planList">
              <ul>
                <li>+ Increased Performance</li>
                <li>24/7 Website Hosting</li>
                <li>Domain Name</li>
                <li>Website Security</li>
                <li>+ 24/7 Live Support</li>
                <li>+ Web Editor (Desktop version & App Version)</li>
                <li>Database Hosting</li>
                <li>Appointment Manager</li>
                <li>+ 1 Extra Website and Database hosting</li>
              </ul>
            </p>
          </div>
        </section>

        <a class="fancy" href="#">
          <span class="top-key"></span>
          <span>
            <Link class="text" to="/services">
              Get A Quote
            </Link>
          </span>
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
      <Footer/>
    </body>
  );
}

export function links() {
  return [...navBarLinks(),...footerLinks(), { rel: "stylesheet", href: styles }];
}
