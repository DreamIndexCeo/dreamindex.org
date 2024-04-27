import NavBar, { links as navBarLinks } from "../components/index/NavBar";
import BubbleCurve, {
  links as bubbleCurveLinks,
} from "../components/svgs/BubbleCurve";
import TopBookCurve, {
  links as topBookCurveLinks,
} from "../components/svgs/TopBookCurve";
import BottomBookCurve, {
  links as bottomOfBookCurveLinks,
} from "../components/svgs/BottomOfBookCurve";
import GraidentCard, {
  links as gradientCardLinks,
} from "../components/index/homeGradientCard";
import GrayBox, {
  links as grayBoxLinks,
} from "../components/index/homeSmallGrayBox";
import DynamicGrayBox, {
  links as dynamicGrayBoxLinks,
} from "../components/index/homeBigGrayBox";

export const meta = () => {
  return [{ title: "DreamIndex" }];
};

export default function Index() {
  return (
    <body style={{ backgroundColor: "var(--color-black" }}>
      <NavBar />

      <div className="hero">
        <section className="starryBackground">
          <div>
            <h1 className="rubikGlitchHeader">Dream Index</h1>
            <p className="rubikGlitchParagraph">
              The Business that will help all types of up and coming businesses
              build their online presence or advance it, using services like web
              and logo design, hosting and marketing software
            </p>
          </div>

          <div></div>
        </section>
        <BubbleCurve color="var(--color-off-black)" />
      </div>

      <section className="services columnContainer">
        <div className="rowContainer">
          <div className="columnContainer">
            <img src="./imgs/coding.png" />
            <h3>Coding</h3>
            <p className="rubikGlitchParagraph">
              The Business that will help all types of up and coming
            </p>
          </div>

          <div className="columnContainer">
            <img src="./imgs/startup.png" alt="startup" />
            <h3>Startup</h3>
            <p className="rubikGlitchParagraph">
              The Business that will help all types of up and coming
            </p>
          </div>

          <div className="columnContainer">
            <img src="./imgs/server.png" />
            <h3>Server</h3>
            <p className="rubikGlitchParagraph">
              The Business that will help all types of up and coming
            </p>
          </div>
        </div>

        <div className="columnContainer">
          <h1 className="rubikGlitchHeader">Services</h1>
          <div className="rowContainer">
            <div>
              <GraidentCard />
            </div>
            <div>
              <GraidentCard />
            </div>
            <div>
              <GraidentCard />
            </div>
            <div>
              <GraidentCard />
            </div>
          </div>
        </div>

        <div className="astronaut"></div>
        <BubbleCurve color="var(--color-light-grey)" />
      </section>

      <section className="websiteProcess">
        <div className="columnContainer">
          <h1 className="rubikGlitchHeader">Wesbiste Process</h1>

          <div className="rowContainer">
            <div>
              <GrayBox
                src={"./imgs/explanation.png"}
                paragraph={"Invision & Discuss your Dream Site"}
              />
            </div>
            <div>
              <GrayBox
                src={"./imgs/illustration.png"}
                paragraph={"Invision & Discuss your Dream Site"}
              />
            </div>
            <div>
              <GrayBox
                src={"./imgs/programming.png"}
                paragraph={"Invision & Discuss your Dream Site"}
              />
            </div>
          </div>

          <div className="rowContainer">
            <div>
              <GrayBox
                src={"./imgs/hosting.png"}
                paragraph={"Invision & Discuss your Dream Site"}
              />
            </div>
            <div>
              <GrayBox
                src={"./imgs/world_grid.png"}
                paragraph={"Invision & Discuss your Dream Site"}
              />
            </div>
            <div>
              <GrayBox
                src={"./imgs/smartphone.png"}
                paragraph={"Invision & Discuss your Dream Site"}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="dreamsite rowContainer">
        <div>
          <img id="computerLogo" src="./imgs/computer_logo.png" />
        </div>
        <div style={{ width: "500px" }}>
          <h1
            style={{ color: "var(--color-black" }}
            className="rubikGlitchHeader"
          >
            DreamSite
          </h1>
          <p
            style={{ color: "var(--color-black" }}
            className="cultiveBiggerParagraph"
          >
            The Convenient web editor to your Dream Site. Be able to make any
            changes to your website's Content, Color Scheme, and Prices
          </p>
          <div style={{ height: "35px" }}></div>
          <h4
            style={{ color: "var(--color-black" }}
            className="cultiveBiggerParagraph"
          >
            Available for Desktop, IOS, and Android
          </h4>
          <p
            style={{ color: "var(--color-black" }}
            className="cultiveBiggerParagraph"
          >
            (depending on your hosting plan)
          </p>
        </div>
        <BottomBookCurve color="var(--color-black)" />
      </section>

      <section className="dica columnContainer">
        <div className="columnContainer">
          <h1 className="moonRocksHeader">D.I.C.A</h1>
          <img style={{ width: "350px" }} src="./imgs/dica_content.png" />
          <h1 className="codyStartHeader">Building the Digital Market</h1>
          <div className="arrowContainer">
            <img src="./imgs/left_curve_arrow.png" />
            <img src="./imgs/down_arrow.png" />
            <img src="./imgs/right_curve_arrow.png" />
          </div>
          <div className="rowContainer">
            <div>
              <DynamicGrayBox
                src="./imgs/calendar.png"
                color="6px 6px 20px 5px #FE3218"
                header={"Capture"}
                paragraph={
                  "Capture leads using our landing pages, surveys, forms, calendars, inbound phone system & more!"
                }
              />
            </div>
            <div>
              <DynamicGrayBox
                src="./imgs/comments.png"
                color="6px 6px 20px 5px #C152E2"
                header={"Nurture"}
                paragraph={
                  "Automatically message leads via voicemail, forced calls, SMS, emails, FB Messenger & more!"
                }
              />
            </div>
            <div>
              <DynamicGrayBox
                src="./imgs/secure_payment.png"
                color="6px 6px 20px 5px #6ECBF5"
                header={"Close"}
                paragraph={
                  "Use our built in tools to collect payments, schedule appointments, and track analytics!"
                }
              />
            </div>
          </div>
        </div>

        <div>
          <h1 className="rubikGlitchHeader">You Think & We Create</h1>
          <p className="cutiveParagraph">
            The Convenient web editor to your dream site. Be able to make any
            chances to you website’s Content, Color Scheme, and Prices.
            Availably for Desktop, IOS & Android!!! (depending on your hosting
            plan)
          </p>
        </div>

        <div>
          <h1 className="rubikGlitchSubtitle">Our Recent Work</h1>
        </div>
        <TopBookCurve color="var(--color-grey)" />
      </section>
    </body>
  );
}

// maps out all the links the components contains
export function links() {
  return [
    ...navBarLinks(),
    ...bubbleCurveLinks(),
    ...topBookCurveLinks(),
    ...bottomOfBookCurveLinks(),
    ...gradientCardLinks(),
    ...grayBoxLinks(),
    ...dynamicGrayBoxLinks(),
  ];
}
