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
      <div
        className="animated"
        style={{ animationDelay: "0.1s", animationName: "slideInLeft" }}
      >
        <Profile />
      </div>
      <div
        className="animated"
        style={{ animationDelay: "0.2s", animationName: "slideInRight" }}
      >
        <EducationalBackground />
      </div>
      <div
        className="animated"
        style={{ animationDelay: "0.3s", animationName: "slideInLeft" }}
      >
        <Experience />
      </div>
      <div
        className="animated"
        style={{ animationDelay: "0.3s", animationName: "slideInRight" }}
      >
        <Research />
      </div>
      <div
        className="animated"
        style={{ animationDelay: "0.3s", animationName: "slideInLeft" }}
      >
        <Certifications />
      </div>
      <div
        className="animated"
        style={{ animationDelay: "0.3s", animationName: "slideInRight" }}
      >
        <Awards />
      </div>
      <div
        className="animated"
        style={{ animationDelay: "0.3s", animationName: "slideInLeft" }}
      >
        <Link />
      </div>
      <div
        className="animated"
        style={{ animationDelay: "0.3s", animationName: "slideInRight" }}
      >
        <Footer />
      </div>
      <ScrollTop />
      <style>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-10%) translateY(10%); }
          to { opacity: 1; transform: translateX(0) translateY(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(10%) translateY(10%); }
          to { opacity: 1; transform: translateX(0) translateY(0); }
        }
        .animated {
          animation-duration: 1.0s;
          animation-fill-mode: forwards;
        }
      `}</style>
    </>
  );
};
