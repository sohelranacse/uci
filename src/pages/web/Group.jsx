import { Helmet } from "react-helmet";
import GroupHero from "../../components/web/GroupHero";
import NewsMedia from "../../components/web/NewsMedia";

function Group() {
  return (
    <>
      <Helmet>
        <title>Group | UCI International</title>
      </Helmet>
      <GroupHero />

      <section
        style={{
          background: "url('./images/effect-bg.png')",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          style={{
            background: "url('./images/effect.png')",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="container mx-auto items-center text-center">
            <h1 className="text-4xl md:text-[75px] leading-[91px] py-[131px]">
              <span className="text-white">
                "The whole is other than the sum of the parts."
              </span>
            </h1>
          </div>
        </div>
      </section>
      <NewsMedia />
    </>
  );
}

export default Group;
