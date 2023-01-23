function Hero() {
  return (
    <section className="headerbg px-2 h-[120vh]">
      <div className="container mx-auto">
        {/* hero text */}
        <div className="grid md:grid-cols-3 justify-between pt-28 pb-8">
          <h1 className="col-span-2 text-[#EE3129] text-[75px] leading-[91px]">
            Dreams and Teams Work{" "}
            <span className="text-[#034EA2]">Together</span>, We Build Team
          </h1>
          <div className="">
            <p className="font-[700] text-[19px] leading-[33px] py-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour
            </p>
            <button
              type="button"
              className="font-[700] text-[20px] text-white bg-[#034EA2] w-full py-4 rounded-[4px] mt-4 hover:bg-[#EE3129] ease-linear duration-300"
            >
              Explore Team
            </button>
          </div>
        </div>
        {/* slider */}
        <div className="py-4 grid grid-cols-7 gap-6 justify-between">
          <img
            className="col-span-3"
            src="./slider/Rectangle 9.png"
            alt="slider 1"
          />
          <img
            className="col-span-2 pt-28"
            src="./slider/Rectangle 10.png"
            alt="slider 2"
          />
          <img
            className="col-span-2"
            src="./slider/Rectangle 11.png"
            alt="slider 3"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
