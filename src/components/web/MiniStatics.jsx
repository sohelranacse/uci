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

function MiniStatics() {
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
    <section className="AboutUsbg miniStatics py-28">
      <div className="bg-[#D9D9D9] py-[37px] px-2">
        <div className="container mx-auto md:grid grid-cols-4 gap-[30px]">
          <div className="bg-[#034EA2] text-white text-center">
            <h2
              className="text-[65px] pt-[60px] leading-[60px] inline-flex"
              ref={ref}
            >
              {isVisible ? <Number start={0.1} end={9} decimal={0} /> : 9}+
            </h2>
            <p className="text-[25px] leading-[42px] pb-[46px] font-[700]">
              Years of Experiences
            </p>
          </div>
          <div className="bg-white text-[#034EA2] text-center">
            <h2
              className="text-[65px] pt-[60px] leading-[60px] inline-flex"
              ref={ref}
            >
              {isVisible ? <Number start={0.1} end={2.5} decimal={1} /> : 2.5}M
            </h2>
            <p className="text-[25px] leading-[42px] pb-[46px] font-[700]">
              Yearly Revenue
            </p>
          </div>
          <div className="bg-[#034EA2] text-white text-center">
            <h2
              className="text-[65px] pt-[60px] leading-[60px] inline-flex"
              ref={ref}
            >
              {isVisible ? <Number start={0.1} end={100} decimal={0} /> : 100}+
            </h2>
            <p className="text-[25px] leading-[42px] pb-[46px] font-[700]">
              Team Members
            </p>
          </div>
          <div className="bg-white text-[#034EA2] text-center">
            <h2
              className="text-[65px] pt-[60px] leading-[60px] inline-flex"
              ref={ref}
            >
              {isVisible ? <Number start={0.1} end={2.5} decimal={1} /> : 2.5}X
            </h2>
            <p className="text-[25px] leading-[42px] pb-[46px] font-[700]">
              Growth Rate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MiniStatics;
