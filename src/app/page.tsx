import Hero from "@/app/components/hero";
import Brands from "@/app/components/brands";
import Services from "@/app/components/services";
import Prices from "@/app/components/prices";
import Why from "@/app/components/why";
import Testimonials from "@/app/components/testimonials";
import Team from "@/app/components/team";
import Location from "@/app/components/location";
import Divider from "./components/divider";

export default function Home() {
  return (
    <>
      <Divider />
      <Hero />
      <Divider />
      <Brands />
      <Divider />
      <Services />
      <Divider />
      <Prices />
      <Divider />
      <Why />
      <Divider />
      <Testimonials />
      <Divider />
      <Team />
      <Divider />
      <Location />
      <Divider />
    </>
  );
}
