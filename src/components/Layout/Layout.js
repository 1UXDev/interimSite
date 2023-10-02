import Nav from "../Nav/Nav";
//import Content from "./Content";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Contact />
      <Footer />
    </>
  );
}
