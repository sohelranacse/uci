import { Helmet } from "react-helmet";
import Hero from "../../components/web/Hero";
import Team from "../../components/web/Team";
import CompanyVideo from "../../components/web/CompanyVideo";

function About() {
  return (
    <>
      <Helmet>
        <title>About | UCI International</title>
      </Helmet>

      <Hero />

      <Team />
      <CompanyVideo />
    </>
  );
}

export default About;
