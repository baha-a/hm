import Navbar from "./components/navbar";
import Carousel from "./components/carousel";
import Services from "./components/services";
import Brands from "./components/brands";
import Footer from "./components/footer";
import Team from "./components/team";
import Prices from "./components/prices";
import Location from "./components/location";
import Divider from "./components/divider";
import Why from "./components/why";

export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel images={[
        '/images/carousel/1.jpeg',
        '/images/carousel/2.jpeg',
        '/images/carousel/3.jpeg',
        '/images/carousel/4.jpeg',
        '/images/carousel/5.jpeg',
        '/images/carousel/6.jpeg',
        '/images/carousel/7.jpeg',
      ]} />
      <Divider />
      <Services />
      <Divider />
      <Why />
      <Prices />
      <Brands />
      <Team />
      <Divider />
      <Location />
      <Divider />
      <Footer />
    </>
  );
}
