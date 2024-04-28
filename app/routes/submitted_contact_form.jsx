import NavBar, { links as navBarLinks } from "../components/index/NavBar";
import styles from "../styles/contact_us/submitted_contact_form.css";
import { Link } from "@remix-run/react";
export const meta = () => {
  return [{ title: "DreamIndex || Thank You" }];
};
export default function SubmittedContactForm() {
  return (
    <body>
      <NavBar />
      <div className="mainContent">
        <h1>Your Form Has Been Submitted</h1>

        <div className="boxContainer">
          <img src="imgs/gifs/sentAirplane.gif" style={{ width: "200px" }} />

          <div className="centeredText">
            <h2 id="mainMessage">
              Your Message has been send to us. We will get back to you as soon
              as possible.
            </h2>
          </div>
          <div className="centeredText">
            <h2 id="noticeMessage">
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
