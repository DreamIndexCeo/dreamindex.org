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

        <div className="topics">
          <div class="button-group">
            <input type="radio" id="1" name="subject" />
            <label for="1">Website Development Inquiries</label>
          </div>

          <div class="button-group">
            <input type="radio" id="2" name="subject" />
            <label for="2">Mobile App Development</label>
          </div>

          <div class="button-group">
            <input type="radio" id="3" name="subject" />
            <label for="3">Graphic Design Services</label>
          </div>

          <div class="button-group">
            <input type="radio" id="4" name="subject" />
            <label for="4">Pricing and Payment Plans</label>
          </div>

          <div class="button-group">
            <input type="radio" id="5" name="subject" />
            <label for="5">Hosting and Maintenance</label>
          </div>

          <div class="button-group">
            <input type="radio" id="6" name="subject" />
            <label for="6">Consultation Booking</label>
          </div>

          <div class="button-group">
            <input type="radio" id="7" name="subject" />
            <label for="7">Cloud Portal Featuress</label>
          </div>

          <div class="button-group">
            <input type="radio" id="8" name="subject" />
            <label for="8">Other</label>
          </div>
        </div>
        

        <div class="inputGroup">
          <label class="inputLabel">Tell Us In Detail</label>
          <input
            autocomplete="off"
            name="Content"
            id="Content"
            class="biggerInput"
            type="text"
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
