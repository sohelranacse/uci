import GroupPost from "./GroupPost";
import Hero from "./Hero";

function GroupHero() {
  return (
    <section className="headerbg px-2">
      <div className="container mx-auto">
        {/* hero text */}

        <Hero
          title1={`Teamwork Begins by`}
          title2={`Building`}
          title3={`Trust`}
          description={`There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected humour`}
        />

        {/* image */}
        <div className="py-8">
          <img src="./images/about-slider/2.png" alt="images 2" />
        </div>

        <div className="py-10 md:py-[107px]">
          <h1 className="pb-4 md:pb-1 text-5xl md:text-[65px] text-[#006AB6] md:leading-[75px] text-center">
            Our Great Groups
          </h1>
          <p className="font-[400] text-[20px] leading-[29px] text-black pb-8 text-center">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through.
          </p>

          {/* group post */}
          <GroupPost
            image={`./images/group/post-1.png`}
            tag={`Himacol`}
            title={`Alone we can do so little, together we can do so much.`}
            description={`Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock,`}
            member={25}
            leader={`01`}
            dream={25}
            author={`Vikram Batra`}
            authorImg={`./images/group/author-1.png`}
            authorDesc={`Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC,`}
          />
          <GroupPost
            image={`./images/group/post-2.png`}
            tag={`Nilachal`}
            title={`Talent wins games, but teamwork and intelligence win championships`}
            description={`Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock,`}
            member={10}
            leader={`01`}
            dream={10}
            author={`Vikram Batra`}
            authorImg={`./images/group/author-2.png`}
            authorDesc={`Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC,`}
          />
          <GroupPost
            image={`./images/group/post-3.png`}
            tag={`Arunachal`}
            title={`If you want to lift yourself up, lift up someone else.`}
            description={`Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock,`}
            member={40}
            leader={`02`}
            dream={50}
            author={`Vikram Batra`}
            authorImg={`./images/group/author-3.png`}
            authorDesc={`Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC,`}
          />
        </div>
      </div>
    </section>
  );
}

export default GroupHero;
