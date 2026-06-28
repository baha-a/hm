import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Brands from "./components/brands";
import Services from "./components/services";
import Prices from "./components/prices";
import Why from "./components/why";
import Testimonials from "./components/testimonials";
import Team from "./components/team";
import Location from "./components/location";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Brands />
        <Services />
        <Prices />
        <Why />
        <Testimonials />
        <Team />
        <Location />
      </main>
      <Footer />
    </>
  );
}
