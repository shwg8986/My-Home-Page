import { ResponsiveAppBar } from "../components/layouts/ResponsiveAppBar/ResponsiveAppBar";
import { Footer } from "../components/layouts/Footer";
import { Profile } from "../components/layouts/Profile";
import { Awards } from "../components/layouts/Awards/Awards";
import { Certifications } from "../components/layouts/Certifications/Certifications";
import { EducationalBackground } from "../components/layouts/EducationalBackground/EducationalBackground";
import { Experience } from "../components/layouts/Experience/Experience";
import { Research } from "../components/layouts/Research/Reaserch";
import { Programming } from "../components/layouts/Programming/Programming";
import { Contact } from "../components/layouts/Contact";
import { Link } from "../components/layouts/Link/Linx";

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
