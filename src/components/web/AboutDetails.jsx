import { useSpring, animated } from "react-spring";
import React, { useRef, useEffect, useState } from "react";

function Number({ start, end, decimal }) {
  const { number } = useSpring({
    from: { number: start },
    number: end,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(decimal))}</animated.div>;
}

function AboutDetails() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="py-16">
      <div className="md:grid grid-cols-2 py-4 gap-9">
        <div>
          <h1 className="text-[64px] leading-[75px] text-[#006AB6]">
            About Us
          </h1>
          <p className="text-[20px] leading-[29px] text-black">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. looked up one of the more obscure
            Latin words, consectetur, from a Lorem Ipsum passage, and going
            through the cites of the word in classical literature, discovered
            the undoubtable source.
          </p>
        </div>
        <div>
          <img src="./images/about-us/about-details-1.png" alt="about image1" />
        </div>
      </div>

      {/* ceo & founder */}
      <div className="md:grid grid-cols-5 py-[91px] gap-9">
        <div className="col-span-2">
          <div className="flex gap-2.5">
            <img
              className="rounded-full"
              src="./images/about-us/avatar.png"
              alt="avarter"
              width={80}
            />
            <div className="text-[#006AB6] pt-2">
              <h3 className="text-[30px] leading-[29px]">Kenan Mahmud</h3>
              <p className="py-1 text-[18px] leading-[29px]">CEO & Founder</p>
            </div>
          </div>
        </div>
        <p className="col-span-3 font-[600] text-[45px] leading-[60px] text-[#006AB6]">
          "Never quit. It is the easiest cop-out in the world. Set a goal and
          don't quit until you attain it. When you do attain it, set another
          goal, and don't quit until you reach it. Never quit."
        </p>
      </div>

      {/* counter */}
      <div className="md:grid grid-cols-3 gap-16">
        <div>
          <p className="text-[20px] leading-[29px] text-[#58595B] pb-[34px]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority form, by injected humour.
          </p>
          <h2
            className="text-[120px] leading-[29px] text-[#006AB6] inline-flex"
            ref={ref}
          >
            {isVisible ? <Number start={0.1} end={200} decimal={0} /> : 200}+
          </h2>
        </div>
        <div>
          <p className="text-[20px] leading-[29px] text-[#58595B] pb-[34px]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority form, by injected humour.
          </p>
          <h2
            className="text-[120px] leading-[29px] text-[#006AB6] inline-flex"
            ref={ref}
          >
            {isVisible ? <Number start={0.1} end={15} decimal={0} /> : 15}+
          </h2>
        </div>
        <div>
          <p className="text-[20px] leading-[29px] text-[#58595B] pb-[34px]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority form, by injected humour.
          </p>
          <h2
            className="text-[120px] leading-[29px] text-[#006AB6] inline-flex"
            ref={ref}
          >
            {isVisible ? <Number start={0.1} end={20} decimal={0} /> : 20}k+
          </h2>
        </div>
      </div>

      {/* story */}
      <div className="md:grid grid-cols-5 py-[107px] gap-9">
        <div className="col-span-2">
          <img src="./images/about-us/about-details-4.png" alt="story" />
        </div>
        <div className="col-span-3">
          <h2 className="text-[40px] text-[#006AB6] leading-[47px]">
            Our Story
          </h2>
          <p className="font-[600] text-[20px] leading-[29px] text-[#68696A] py-1">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source.
          </p>
        </div>
      </div>

      {/* mission */}
      <div className="md:grid grid-cols-7 gap-[29px]">
        <div className="col-span-4">
          <h2 className="text-[40px] font-[600] text-[#006AB6] leading-[29px] pt-[100px]">
            Our Mission
          </h2>
          <p className="font-[400] text-[20px] leading-[29px] text-[#68696A] py-3.5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </p>
          <p className="font-[400] text-[20px] leading-[29px] text-[#68696A] py-3.5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </p>
        </div>
        <div className="col-span-3">
          <img src="./images/about-us/about-details-3.png" alt="mission" />
        </div>
      </div>

      {/* vission */}
      <div className="md:grid grid-cols-7 pt-[107px] pb-[43px] gap-[29px]">
        <div className="col-span-3">
          <img src="./images/about-us/about-details-2.png" alt="vission" />
        </div>
        <div className="col-span-4">
          <h2 className="text-[40px] font-[600] text-[#006AB6] leading-[29px] pt-[125px]">
            Our Vission
          </h2>
          <p className="font-[400] text-[20px] leading-[29px] text-[#68696A] py-3.5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutDetails;
