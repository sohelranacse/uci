import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <section>
      <div
        className="px-2"
        style={{
          background: "url('./images/footer-bg.png')",
        }}
      >
        <div className="container mx-auto grid md:grid-cols-2 pt-[107px] pb-[74px] gap-8">
          <div className="text-white justify-start">
            <img
              src="./images/footer-logo.png"
              alt="logo"
              className="w-[200px] md:w-[265px]"
            />
            <p className="font-[600] text-[20px] leading-[29px] pt-[36px] pb-[23px]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum.
            </p>
            <ul className="md:flex flex-wrap gap-x-20 gap-y-4">
              <li>
                <Link
                  to="/about"
                  className="font-[700] text-[20px] leading-[29px] hover:text-[#034EA2] ease-linear duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="font-[700] text-[20px] leading-[29px] hover:text-[#034EA2] ease-linear duration-200"
                >
                  Terms & Condition
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="font-[700] text-[20px] leading-[29px] hover:text-[#034EA2] ease-linear duration-200"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="font-[700] text-[20px] leading-[29px] hover:text-[#034EA2] ease-linear duration-200"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* right */}
          <form className="md:text-right pt-[36px]">
            <div className="h-[66px] inline-flex w-full md:w-[80%]">
              <input
                type="email"
                placeholder="Email"
                className="h-full bg-[#D9D9D9] w-full md:w-[80%] pl-2"
                required
              />
              <button
                type="submit"
                className="text-white bg-[#034EA2] font-[600] text-[20px] leading-[29px] h-full px-4"
              >
                Subscribe
              </button>
            </div>

            {/* social icon */}
            <ul className="flex gap-x-5 md:justify-end pt-8 md:pt-[236px]">
              <li className="h-[28px] w-[28px] bg-white rounded-full text-center leading-[26px]">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full inline-block w-full h-full hover:text-white hover:bg-[#3b5998] ease-linear duration-300"
                >
                  <FaFacebookF className="inline-block" />
                </a>
              </li>
              <li className="h-[28px] w-[28px] bg-white rounded-full text-center leading-[26px]">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full inline-block w-full h-full hover:text-white hover:bg-[#FF0000] ease-linear duration-300"
                >
                  <FaYoutube className="inline-block" />
                </a>
              </li>
              <li className="h-[28px] w-[28px] bg-white rounded-full text-center leading-[26px]">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full inline-block w-full h-full hover:text-white hover:bg-[#feda75] ease-linear duration-300"
                >
                  <FaInstagram className="inline-block" />
                </a>
              </li>
              <li className="h-[28px] w-[28px] bg-white rounded-full text-center leading-[26px]">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full inline-block w-full h-full hover:text-white hover:bg-[#0072b1] ease-linear duration-300"
                >
                  <FaLinkedinIn className="inline-block" />
                </a>
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div className="text-center bg-[#034EA2] py-[5px] px-2">
        <p className="font-[500] text-[16px] leading-[29px] text-white">
          All Rights Reserved by UCI
        </p>
      </div>
    </section>
  );
}

export default Footer;
