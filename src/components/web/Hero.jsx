import { Link } from "react-router-dom";

function Hero({ title1, title2, title3, description }) {
  return (
    <div className="grid md:grid-cols-3 justify-between pt-12 md:pt-28 pb-8">
      <h1 className="col-span-2 text-[#EE3129] text-4xl leading-[50px] md:text-[75px] md:leading-[91px]">
        {title1} <span className="text-[#034EA2]">{title2}</span>, {title3}
      </h1>
      <div>
        <p className="font-[700] text-[19px] leading-[33px] py-6">
          {description}
        </p>
        <Link
          to="/team"
          className="font-[700] text-[20px] text-white bg-[#034EA2] block text-center py-4 rounded-[4px] mt-4 hover:bg-[#EE3129] ease-linear duration-300"
        >
          Explore Team
        </Link>
      </div>
    </div>
  );
}

export default Hero;
