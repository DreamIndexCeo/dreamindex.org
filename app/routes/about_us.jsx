import NavBar, { links as navBarLinks } from "../components/index/NavBar";
import styles from "../styles/contact_us.css";
export const meta = () => {
  return [{ title: "DreamIndex || About Us" }];
};

export default function AboutUs() {
  return (
    <body>
      <NavBar />
    </body>
  );
}

export function links() {
  return [...navBarLinks(), { rel: "stylesheet", href: styles }];
}
