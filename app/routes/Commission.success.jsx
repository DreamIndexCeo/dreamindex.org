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
        <h1>Your Payment has been received</h1>

        <div className="boxContainer">
          <img src="../imgs/gifs/sentAirplane.gif" style={{ width: "200px" }} />

          <div style={{ width: "400px", textAlign: "center" }}>
            <h2>
              Your Payment has been successfully made. We will be sending a link to your consolation form with an access code to begin filling out.
            </h2>
          </div>
          <div style={{ width: "500px", textAlign: "center" }}>
            <h2>
              (You will receive the email within the next <br></br>30 minutes)
            </h2>
          </div>
        </div>
      </div>
    </body>
  );
}

export function links() {
  return [...navBarLinks(), { rel: "stylesheet", href: styles }];
}
