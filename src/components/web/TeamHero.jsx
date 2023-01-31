import Hero from "./Hero";

function TeamHero() {
  return (
    <section className="headerbg px-2">
      <div className="container mx-auto">
        {/* hero text */}

        <Hero
          title1={`Alone We Can So So Little!`}
          title2={`Together`}
          title3={`We Can Do So Much!`}
          description={`There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected humour`}
        />

        {/* image */}
        <div className="py-8">
          <img src="./images/about-slider/2.png" alt="images 2" />
        </div>

        <div className="md:grid grid-cols-2 py-10 md:py-[107px] gap-9">
          <div>
            <h2 className="text-5xl md:text-[65px] text-[#006AB6] leading-[75px]">
              Our Team
            </h2>
            <p className="font-[400] text-[20px] leading-[29px] text-[#000000] py-1">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source.
            </p>
          </div>
          <div>
            <img src="./images/team/team-1.png" alt="team-1" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamHero;
