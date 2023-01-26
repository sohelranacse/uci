import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

function NewsMedia() {
  return (
    <section className="AboutUsbg px-2">
      <div className="container mx-auto py-24">
        <h1 className="font-[800] text-5xl md:text-[64px] pb-8 md:pb-[61px] md:leading-[29px] text-[#006AB6]">
          News & Media
        </h1>

        {/* row */}
        <Link
          to="/about"
          className="pb-[40px] md:grid grid-cols-4 inline-block group"
        >
          <div className="bg-[#006AB6] text-white text-center group-hover:bg-[#58595B] ease-linear duration-200">
            <h2 className="text-[45px] leading-[38px] font-[800] px-[62px] py-[76px]">
              12 Nov 2022
            </h2>
          </div>
          <div className="col-span-3 bg-[#7D7E81] text-white pl-[30px] pr-[76px] group-hover:bg-white group-hover:text-[#006AB6] ease-linear duration-200">
            <h3 className="pt-[38px] text-3xl md:text-[45px] pb-[13px] font-[800] leading-[38px]">
              The Chottogram Int’l Fair
            </h3>
            <p className="text-[20px] leading-[33px] pb-4">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
          </div>
        </Link>
        <Link
          to="/about"
          className="pb-[40px] md:grid grid-cols-4 inline-block group"
        >
          <div className="bg-[#58595B] text-white text-center group-hover:bg-[#006AB6] ease-linear duration-200">
            <h2 className="text-[45px] leading-[38px] font-[800] px-[62px] py-[76px]">
              10 Nov 2022
            </h2>
          </div>
          <div className="col-span-3 bg-white text-[#006AB6] pl-[30px] pr-[76px] group-hover:bg-[#7D7E81] group-hover:text-white ease-linear duration-200">
            <h3 className="pt-[38px] text-3xl md:text-[45px] pb-[13px] font-[800] leading-[38px]">
              Tree Plantation are Growing
            </h3>
            <p className="text-[20px] leading-[33px] pb-4">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
          </div>
        </Link>

        <Link
          to="/about"
          className="pb-[40px] md:grid grid-cols-4 inline-block group"
        >
          <div className="bg-[#58595B] text-white text-center group-hover:bg-[#006AB6] ease-linear duration-200">
            <h2 className="text-[45px] leading-[38px] font-[800] px-[62px] py-[76px]">
              09 Nov 2022
            </h2>
          </div>
          <div className="col-span-3 bg-white text-[#006AB6] pl-[30px] pr-[76px] group-hover:bg-[#7D7E81] group-hover:text-white ease-linear duration-200">
            <h3 className="pt-[38px] text-3xl md:text-[45px] pb-[13px] font-[800] leading-[38px]">
              Free Training on Green World
            </h3>
            <p className="text-[20px] leading-[33px] pb-4">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
          </div>
        </Link>
        {/* all link */}
        <Link
          to="/"
          className="text-[#006AB6] text-lg md:text-[20px] font-[600] pt-[21px] flex gap-2 leading-[20px] hover:text-[#EE3129] ease-linear duration-300"
        >
          View More Insights/Blog <BsArrowRight />
        </Link>
      </div>
    </section>
  );
}

export default NewsMedia;
