import Hero from "../sections/Hero";
import AboutIntro from "../sections/AboutIntro";
import Services from "../sections/Services";
import WhyChoose from "../sections/WhyChoose";
import Products from "../sections/Products";
import Contact from "../sections/Contact";

function Home() {
  return (
    <>
      <Hero />
      <AboutIntro />
      <Services />
      <WhyChoose />
      <Products />
      <Contact  />
    </>
  );
}

export default Home;