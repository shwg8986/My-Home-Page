import { ResponsiveAppBar } from "../components/ResponsiveAppBar/ResponsiveAppBar";
import { Footer } from "../components/Footer";
import { Profile } from "../components/Profile";
import { Awards } from "../components/Awards/Awards";
import { Certifications } from "../components/Certifications/Certifications";
import { EducationalBackground } from "../components/EducationalBackground/EducationalBackground";
import { Experience } from "../components/Experience/Experience";
import { Research } from "../components/Research/Reaserch";
import { Programming } from "../components/Programming/Programming";
import { Contact } from "../components/Contact";
import { Link } from "../components/Link/Link";

export const Home = () => {
    return (
        <>
            <ResponsiveAppBar />
            <Profile />
            <EducationalBackground />
            <Experience />
            <Research />
            <Programming />
            <Certifications />
            <Awards />
            <Contact />
            <Link />
            <Footer />
        </>
    );

}
