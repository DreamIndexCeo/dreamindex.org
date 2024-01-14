import NavBar, { links as navBarLinks } from "../components/NavBar";
import styles from "../styles/contact_us.css"
export const meta = () => {
  return [{ title: "DreamIndex || Contact Us" }];
};

export default function ContactUs() {
    return (
      <body>
         <NavBar />
      </body>
       
    );
}

export function links() {
  return [
    ...navBarLinks(), 
    {rel: 'stylesheet', href: styles}
  ];
}