import styles from "../styles/services/submittedPayment.css";
import NavBar, { links as navBarLinks } from "../components/index/NavBar";

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
            Thank you for your payment! We're thrilled to have you on board! Get ready to dive in—we'll be sending you a link to your consultation form along with an access code shortly. Your exciting journey with us starts now!
            </h2>
          </div>
          <div style={{ width: "500px", textAlign: "center" }}>
            <p>
              Look out for your email in the next 30 mins
            </p>
          </div>
          
        </div>
      </div>
    </body>
  );
}

export function links() {
  return [...navBarLinks(), { rel: "stylesheet", href: styles }];
}
