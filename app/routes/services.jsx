import NavBar, { links as navBarLinks } from "../components/NavBar";
import AddOnCard, { links as addOnCardLinks } from "../components/addOnCard";
import PriceBox, { links as priceBoxLinks } from "../components/priceBox";
import styles from "../styles/services.css";
export const meta = () => {
  return [{ title: "DreamIndex || Services" }];
};

export default function Services() {
  return (
    <body>
      <NavBar />

      <section className="columnContainer">
        <h1>Where your Dream Website becomes Reality</h1>
        <div className="flexParagraph">
          <p>
            Offering options for{" "}
            <span style={{ color: "red" }}>4 months financing</span> to give you
          </p>
          <p> more flexibility</p>
        </div>
      </section>

      <div className="starryBackground">
        <section className="gifParagraphContainer">
          <div>
            <img src="./imgs/gifs/business_meetings.gif" />
          </div>
          <div className="businessMeeting">
            <p>
              After Paying the Commission, you'll be able to fill out a
              consolation form to give up front information about your vision.
            </p>
            <p>
              From there you'll be able to book the next available meeting date
              to have a virtual meeting to discuss the final details before the
              designing begins.
            </p>
          </div>
        </section>
        <div style={{ textAlign: "center" }}>
          <img src="./imgs/line_one.png" />
        </div>
        <section className="gifParagraphContainer">
          <div className="time">
            <p>
              The development process can take anywhere from 2 to 5 weeks
              depending on your type of site.
            </p>
            <p>
              During this waiting time you'll be getting updates and designs
              concept from us to approve to your liking. So you can continue to
              working hard on your business' ideas while we handle all your
              website and designing problems.
            </p>
          </div>
          <div>
            <img src="./imgs/gifs/time.gif" />
          </div>
        </section>
        <div style={{ textAlign: "center" }}>
          <img src="./imgs/line_two.png" />
        </div>
        <section className="gifParagraphContainer">
          <div>
            <img src="./imgs/gifs/interface.gif" />
          </div>
          <div className="interface">
            <p>
              Once you website is completely ready, signed off and hosting plan
              is made, you'll get a login from us to access your Cloud Portal.
            </p>
            <p>The Cloud Portal includes:</p>
            <p>
              <ul>
                <li>Website Manager,</li>
                <li>Dashboard Analytics,</li>
                <li>Web Editor,</li>
                <li>Subscription Manager,</li>
                <li>Appointment Manager,</li>
              </ul>
            </p>
          </div>
        </section>
      </div>

      <div className="priceRow">
        <section className="rowContainer">
          <PriceBox
            label={"Contacting"}
            price={"500"}
            description={
              "For businesses or individuals trying to build a online presence for themselves."
            }
            listItemOne={"Landing Page"}
            listenItemTwo={"Email Form Contractor"}
            listItemThree={"Extra Page of Choice"}
          />
          <PriceBox
            label={"Appointment"}
            price={"800"}
            description={
              "For Businesses or individuals that need a easier way of scheduling  appointments and handling payments."
            }
            listItemOne={"Contacting Website"}
            listenItemTwo={"Custom Booking Forms"}
            listItemThree={"Direct Payments"}
          />
          <PriceBox
            label={"E-Commerce"}
            price={"1,000"}
            description={
              "For Businesses or individuals that need a easier way of selling theirs products to people around the world"
            }
            listItemOne={"Contacting Website"}
            listenItemTwo={"Custom Booking Forms"}
            listItemThree={"Direct Payments"}
          />
          <PriceBox
            label={"Custom"}
            price={"500-10k"}
            description={
              "Need a custom request the is not listed? We'll hear out your million dollar idea and determine a price with you."
            }
          />
        </section>
      </div>

      <div>
        <section className="columnContainer">
          <h1>Addons</h1>

          <div className="rowContainer">
            <AddOnCard addonName={"Priority Fee"} addOnPrice={"$250"} />
            <AddOnCard addonName={"Account System Fee"} addOnPrice={"$400"} />
          </div>
        </section>
      </div>
    </body>
  );
}

export function links() {
  return [
    ...navBarLinks(),
    ...priceBoxLinks(),
    ...addOnCardLinks(),
    { rel: "stylesheet", href: styles },
  ];
}
