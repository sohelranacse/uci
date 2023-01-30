import { Swiper, SwiperSlide } from "swiper/react";
import Hero from "./Hero";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import AboutDetails from "./AboutDetails";

function AboutHero() {
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

        {/* slider */}
        <div className="py-8">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <img src="./images/about-slider/1.png" alt="slider 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./images/about-slider/2.png" alt="slider 2" />
            </SwiperSlide>
          </Swiper>
        </div>

        <AboutDetails />
      </div>
    </section>
  );
}

export default AboutHero;
