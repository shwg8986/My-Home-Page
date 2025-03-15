import { ResponsiveAppBar } from "../components/ResponsiveAppBar/ResponsiveAppBar";
import { Footer } from "../components/Footer";
import { Profile } from "../components/Profile";
import { Awards } from "../components/Awards/Awards";
import { Certifications } from "../components/Certifications/Certifications";
import { EducationalBackground } from "../components/EducationalBackground/EducationalBackground";
import { Experience } from "../components/Experience/Experience";
import { Research } from "../components/Research/Reaserch";
import { Link } from "../components/Link/Link";
import ScrollTop from "../ui-elements/ScrollTop";

export const Home = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Profile />
      <EducationalBackground />
      <Experience />
      <Research />
      <Certifications />
      <Awards />
      <Link />
      <Footer />
      <ScrollTop />
    </>
  );
};
