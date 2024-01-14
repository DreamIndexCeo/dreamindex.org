import NavBar, { links as navBarLinks } from "../components/NavBar";
import styles from "../styles/hosting.css"
export const meta = () => {
  return [{ title: "DreamIndex || Services" }];
};

export default function Services() {
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