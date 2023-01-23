import { BsArrowRight } from "react-icons/bs";

function AboutUs() {
  return (
    <section className="AboutUsbg px-2 pt-80 pb-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-8">
          <div className="flex justify-end">
            <img src="./about-us/Rectangle 13.jpg" alt="img" />
          </div>
          <div>
            <h1 className="text-[#006AB6] text-[64px] leading-[75px]">
              About Us
            </h1>
            <p className="text-[20px] leading-[29px]">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source.
            </p>
            <a
              href="/"
              className="text-[#006AB6] text-[20px] font-[600] py-4 flex gap-2 leading-[20px] hover:text-[#EE3129] ease-linear duration-300"
            >
              Learn More <BsArrowRight />
            </a>
          </div>
        </div>

        {/* story */}
        <div className="grid grid-cols-2 gap-8">
          <div className="mt-20">
            <img src="./about-us/Rectangle 14.jpg" alt="img" />
            <div className="pt-8 pb-4">
              <h1 className="text-[#006AB6] text-[40px] leading-[29px] font-[600] py-3">
                Our Mission
              </h1>
              <p className="text-[20px] leading-[29px]">
                There are many variations of passages of Lorem Ipsum avail, but
                the majority have suffered alteration in some form, by injected
                humour.
              </p>
              <a
                href="/"
                className="text-[#006AB6] text-[20px] font-[600] py-2 flex gap-2 leading-[20px] hover:text-[#EE3129] ease-linear duration-300"
              >
                Learn More <BsArrowRight />
              </a>
            </div>
            <div>
              <h1 className="text-[#006AB6] text-[40px] leading-[29px] font-[600] py-3">
                Our Vision
              </h1>
              <p className="text-[20px] leading-[29px]">
                There are many variations of passages of Lorem Ipsum avail, but
                the majority have suffered alteration in some form, by injected
                humour.
              </p>
              <a
                href="/"
                className="text-[#006AB6] text-[20px] font-[600] py-2 flex gap-2 leading-[20px] hover:text-[#EE3129] ease-linear duration-300"
              >
                Learn More <BsArrowRight />
              </a>
            </div>
          </div>
          <div>
            <h1 className="text-[#006AB6] text-[64px] leading-[75px]">
              Our Story
            </h1>
            <p className="text-[20px] leading-[29px]">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source.
            </p>
            <a
              href="/"
              className="text-[#006AB6] text-[20px] font-[600] py-4 flex gap-2 leading-[20px] hover:text-[#EE3129] ease-linear duration-300"
            >
              Learn More <BsArrowRight />
            </a>
            <div className="mt-[103px]">
              <img src="./about-us/Rectangle 15.jpg" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
