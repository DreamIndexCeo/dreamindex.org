import NavBar, { links as navBarLinks } from "../components/NavBar";
import style from "../styles/deposit.css";
export default function Deposit() {
  return (
    <body>
      <NavBar />
      <div className="columnContainer">
        <section>
          <h1>Start Your Dream Website Creation</h1>
        </section>

        <section>
          <div className="depositContainer">
            <div className="columnContainer">
              <img src="./imgs/pay_bill.gif" />
              <p style={{ fontSize: "31px" }}>Deposit Fee</p>
              <p>$150</p>
              <span className="smallDivider"></span>
              <p className="depositFeeP">
                To begin the website creation we need to take a Deposit, that
                will be subtracted from the final price.
              </p>
            </div>
            <div className="howdYouFindUS">
              <p style={{ textAlign: "left" }}>How did you find us ?</p>
              <div className="depositList">
                <ul>
                  <li>
                    <input type="checkbox" />
                    Instagram
                  </li>
                  <li>
                    <input type="checkbox" />
                    Youtube
                  </li>
                  <li>
                    <input type="checkbox" />
                    Facebook
                  </li>
                  <li>
                    <input type="checkbox" />
                    TikTok
                  </li>
                </ul>

                <ul>
                  <li>
                    <input type="checkbox" />
                    Marketing Team
                  </li>
                  <li>
                    <input type="checkbox" />
                    Google Ads
                  </li>
                  <li>
                    <input type="checkbox" />A friend
                  </li>
                  <li>
                    <input type="checkbox" />
                    Other
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section>
          <button>Pay</button>
        </section>
      </div>
    </body>
  );
}

export function links() {
  return [...navBarLinks(), { rel: "stylesheet", href: style }];
}
