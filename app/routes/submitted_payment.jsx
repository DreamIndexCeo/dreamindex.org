import styles from "../styles/services/submittedPayment.css";
import NavBar, { links as navBarLinks } from "../components/index/NavBar";
import { Link } from "@remix-run/react";

export const meta = () => {
  return [{ title: "DreamIndex || Thank You" }];
};

export default function SubmittedPayment() {
  return (
    <body>
      <NavBar />
      <div className="mainContent">
        <h1>Your Form Has Been Submitted</h1>

        <div className="boxContainer">
          <img src="imgs/gifs/sentAirplane.gif" style={{ width: "200px" }} />

          <div style={{ width: "400px", textAlign: "center" }}>
            <h2>
              Your Quote has been send to us. During this time of waiting, we
              suggest get everything you would like to show case to your
              designer during your meeting
            </h2>
          </div>
          <div style={{ width: "500px", textAlign: "center" }}>
            <h2>
              (You will receive a text and email reminder a day before your
              Meeting)
            </h2>
          </div>
          <button>
            <Link className="homeButton" to="/">
              Home
            </Link>
          </button>
        </div>
      </div>
    </body>
  );
}

export function links() {
  return [...navBarLinks(), { rel: "stylesheet", href: styles }];
}