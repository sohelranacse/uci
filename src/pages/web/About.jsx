import { Helmet } from "react-helmet";
import AboutHero from "../../components/web/AboutHero";
import TeamSection from "../../components/web/TeamSection";
import CompanyVideo from "../../components/web/CompanyVideo";

function About() {
  return (
    <>
      <Helmet>
        <title>About | UCI International</title>
      </Helmet>

      <AboutHero />

      <TeamSection />
      <CompanyVideo />
      <div className="AboutUsbg py-14"></div>
    </>
  );
}

export default About;
