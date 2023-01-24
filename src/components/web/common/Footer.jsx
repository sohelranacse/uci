import { Link } from "react-router-dom";

function Footer() {
  return (
    <section>
      <div
        className="px-2"
        style={{
          background: "url('./about-us/footer-bg.png')",
        }}
      >
        <div className="text-white">
          <div>
            <img src="./about-us/footer-logo.png" alt="logo" />
          </div>
          <p>hello</p>
          <ul>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* right */}
        <div>
          <div>
            <input type="text" placeholder="Email" />
            <button type="button">Subscribe</button>
          </div>

          {/* social icon */}
          <ul>
            <li>
              <Link href="/" target="_blank" passHref></Link>
            </li>
          </ul>
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
