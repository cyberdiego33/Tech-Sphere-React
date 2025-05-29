import AboutHero from "../components/AboutPage-Components/AboutHero";
import OurMission from "../components/AboutPage-Components/OurMission";
import CreativeCrew from "../components/homePage-Components/creativeCrew";
import ReadySection from "../components/AboutPage-Components/ReadySection";
import FAQ from "../components/AboutPage-Components/FAQ";
import OurServices from "../components/AboutPage-Components/ourServices";


function AboutScreen() {
    return (
        <main>
            <AboutHero />
            <OurMission />
            <CreativeCrew />
            <OurServices />
            <ReadySection />
            <FAQ />
        </main>
    )
}

export default AboutScreen;