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
            <p className="pls">Deposit Fee</p>
            <p>$150</p>
            <p style={{ textAlign: "center" }}>
              To begin the website creation we need to take a Deposit, that will
              be subtracted from the final price.
            </p>
            <div>
              <p>How did you find us ?</p>
              <div className="rowContainer">
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

        <button>Pay</button>
      </div>
    </body>
  );
}

export function links() {
  return [...navBarLinks(), { rel: "stylesheet", href: style }];
}
