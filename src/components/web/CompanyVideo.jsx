import { FaYoutube } from "react-icons/fa";
import { useState } from "react";

function CompanyVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <section className="AboutUsbg pt-28">
      <div className="videoBg w-full">
        <div className="bg-[rgba(0,0,0,0.5)] h-[40vh] md:h-screen relative text-white">
          {isPlaying ? (
            <iframe
              width="100%"
              height="100%"
              title="UCI International"
              src={`https://www.youtube.com/embed/rkpzYNB6xks?autoplay=${
                isPlaying ? 1 : 0
              }`}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="h-0 w-full text-center absolute top-[46%] md:top-[49%]">
              <button
                type="button"
                className="w-[45px] hover:text-[red] ease-linear duration-200"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                <FaYoutube className="h-[45px] w-full" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default CompanyVideo;
