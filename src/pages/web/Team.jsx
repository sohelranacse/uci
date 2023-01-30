import { Helmet } from "react-helmet";
import NewsMedia from "../../components/web/NewsMedia";
import TeamHero from "../../components/web/TeamHero";
import TeamSection from "../../components/web/TeamSection";

function Team() {
  return (
    <>
      <Helmet>
        <title>Team | UCI International</title>
      </Helmet>
      <TeamHero />

      <TeamSection />
      <NewsMedia />
    </>
  );
}

export default Team;
