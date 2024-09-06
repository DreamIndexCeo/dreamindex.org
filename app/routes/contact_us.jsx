import styles from "../styles/contact_us/contact_us.css";
import NavBar, { links as navBarLinks } from "../components/index/NavBar";
import { Link } from "@remix-run/react";

import TopBubbleCurve, {
  links as topBubbleCurveLinks,
} from "../components/svgs/topBubbleCurve";
export const meta = () => {
  return [{ title: "DreamIndex || Contact Us" }];
};
export default function ContactUs() {
  return (
    <body>
      <NavBar />

      <div className="contactForm">
        <div class="inputGroup">
          <label class="inputLabel">Your Email Address</label>
          <input
            autocomplete="off"
            name="Email"
            id="Email"
            class="input"
            type="email"
          />
        </div>
        <p className="topicLabel">Topic:</p>
        <div>
          <button className="pillButton"></button>
        </div>
        <div class="inputGroup">
          <label class="inputLabel">Tell Us In Detail</label>
          <input
            autocomplete="off"
            name="Email"
            id="Email"
            class="biggerInput"
            type="email"
          />
        </div>
        <button>
          <Link className="button" to="/submitted_contact_form">
            <img src="./imgs/airplane.png" style={{ width: "15px" }} />
            Send
          </Link>
        </button>
      </div>
      <div className="cardContainer">
        <img src="./imgs/gifs/emailCard.gif" />
      </div>

      <section className="contactUsHeader">
        <h1 className="gradientLabel">Contact Us</h1>
        <div>
          <p>
            Have any Question about any of our services, products, custom
            request, sponsors, or anything you would like to know? Please submit
            this form.
          </p>
        </div>
      </section>
      <section className="whiteMiddleBackground"></section>
      <section className="pupleBottomBackground">
        <TopBubbleCurve color="var(--color-white)" />
      </section>
    </body>
  );
}

export function links() {
  return [
    ...navBarLinks(),
    ...topBubbleCurveLinks(),
    { rel: "stylesheet", href: styles },
  ];
}
