import Navbar from "../navbar";
import Hero from "../hero";
import Footer from "../footer";
import ContactUs from "../contact-us";
import AboutUs from "../about-us";
import OurGames from "../our-games";

export default function Layout ({children, router}) {
 return (
  <div>
      <Navbar router={router}/>
      <Hero/>
      <AboutUs/>
      <OurGames/>
      <ContactUs/>
      {children}
      <Footer/>
  </div>
 );
}
