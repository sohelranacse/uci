import React from "react";

function LetsGo() {
  return (
    <section className="bg-[#034EA2] px-2">
      <div className="container mx-auto md:flex flex-grap gap-2">
        {/* left */}
        <div className="text-white py-[79px]">
          <h1 className="pt-[72px] text-5xl md:text-[64px] leading-6-[75px]">
            Hello World! <br />
            <span className="italic">Let's Go!</span>
          </h1>
          <p className="text-[20px] leading-[33px] pt-4 pb-[35px]">
            It is a long established fact that a reader will be distracted by
            the readable content It is a long established fact that a reader
            will be distracted by the readable content.
          </p>
          <a
            href="/"
            rel="noreferrer"
            className="bg-white text-[#006AB6] px-[40px] py-[20px] rounded-[3px] text-[20px] leading-[33px] font-[700] hover:bg-[#EE3129] hover:text-white ease-linear duration-200"
          >
            Get Started
          </a>
        </div>
        {/* right */}
        <img
          src="./images/world.png"
          alt="world images"
          className="md:py-[79px]"
        />
      </div>
    </section>
  );
}

export default LetsGo;
