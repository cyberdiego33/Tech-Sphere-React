import HeroSection from "../components/homePage-Components/heroSection";
import SectionTwo from "../components/homePage-Components/SectionTwo";
import SectionThree from "../components/homePage-Components/SectionThree";
import OurProducts from "../components/homePage-Components/OurProducts";
import CreativeCrew from "../components/homePage-Components/creativeCrew";
import ReadySection from "../components/homePage-Components/readySection";


function HomeScreen() {
  return (
    <main>
        <HeroSection />
        <SectionTwo />
        <SectionThree />
        <OurProducts />
        <CreativeCrew />
        <ReadySection />
    </main>
  );
}

export default HomeScreen;
