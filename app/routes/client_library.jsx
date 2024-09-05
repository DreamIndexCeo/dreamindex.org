import NavBar, { links as navBarLinks } from "../components/index/NavBar";
import LibraryApp from "../components/svgs/icons/library_apps";
import LibraryDesign from "../components/svgs/icons/library_designs";
import LibraryWebsite from "../components/svgs/icons/library_websites";
import styles from "../styles/client_library/client_library.css";
import { FaSearch } from "react-icons/fa/index.js";
export const meta = () => {
  return [{ title: "DreamIndex || About Us" }];
};

export default function ClientLibrary() {
  return (
    <body>
      <div style={{ backgroundColor: "var(--color-black)" }}>
        <NavBar />
      </div>

      <section className="starryBackground headerContainer">
        <h1>Client Lirbrary</h1>
        <div className="pillDivContainer">
          <div className="pillDiv rowContainer">
            <p>Time</p>
            <p>Price</p>
            <p>Catergory</p>
          </div>
          <div className="pillDiv rowContainer">
            <LibraryWebsite />
            <LibraryDesign />
            <LibraryApp />
          </div>
          <div className="pillDiv rowContainer">
            <FaSearch />
          </div>
        </div>
      </section>
      <section style={{ height: "100%", backgroundColor: "#1D1D1D" }}></section>
    </body>
  );
}

export function links() {
  return [...navBarLinks(), { rel: "stylesheet", href: styles }];
}
