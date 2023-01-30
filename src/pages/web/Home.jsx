import { Helmet } from "react-helmet";
import HeroSlider from "../../components/web/HeroSlider";
import AboutUs from "../../components/web/AboutUs";
import Experience from "../../components/web/Experience";
import NewsMedia from "../../components/web/NewsMedia";
import Team from "../../components/web/Team";
import CompanyVideo from "../../components/web/CompanyVideo";
import MiniStatics from "../../components/web/MiniStatics";
import LetsGo from "../../components/web/LetsGo";

function Home() {
  return (
    <>
      <Helmet>
        <title>UCI International</title>
      </Helmet>
      <>
        <HeroSlider />
        <AboutUs />
        <Experience />
        <NewsMedia />
        <Team />
        <CompanyVideo />
        <MiniStatics />
        <LetsGo />
      </>
    </>
  );
}

export default Home;
