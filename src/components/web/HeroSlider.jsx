import { Swiper, SwiperSlide } from "swiper/react";
import Hero from "./Hero";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

function HeroSlider() {
  return (
    <section className="headerbg px-2 md:h-[120vh]">
      <div className="container mx-auto">
        {/* hero text */}

        <Hero
          title1={`Dreams and Teams Work`}
          title2={`Together`}
          title3={`We Build Team`}
          description={`There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected humour`}
        />

        {/* slider */}
        <div className="hidden py-4 md:grid grid-cols-7 gap-6 justify-between">
          <img
            className="col-span-3"
            src="./images/slider/Rectangle 9.png"
            alt="slider 1"
          />
          <img
            className="col-span-2 md:pt-28"
            src="./images/slider/Rectangle 10.png"
            alt="slider 2"
          />
          <img
            className="col-span-2"
            src="./images/slider/Rectangle 11.png"
            alt="slider 3"
          />
        </div>

        {/* mobile slider */}
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper md:hidden"
        >
          <SwiperSlide>
            <img src="./images/slider/Rectangle 10.png" alt="slider 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./images/slider/Rectangle 11.png" alt="slider 3" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default HeroSlider;
