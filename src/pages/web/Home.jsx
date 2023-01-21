import { Helmet } from "react-helmet";
import Hero from "../../components/web/Hero";
import AboutUs from "../../components/web/AboutUs";
import Experience from "../../components/web/Experience";
import NewsMedia from "../../components/web/NewsMedia";
import Team from "../../components/web/Team";
import CompanyVideo from "../../components/web/CompanyVideo";
import MiniStatics from "../../components/web/MiniStatics";

function Home() {
  return (
    <>
      <Helmet>
        <title>UCI International</title>
      </Helmet>
      <h3>Homepage</h3>
      <Hero />
      <AboutUs />
      <Experience />
      <NewsMedia />
      <Team />
      <CompanyVideo />
      <MiniStatics />
    </>
  );
}

export default Home;
