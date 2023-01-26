function Experience() {
  return (
    <section
      style={{
        background: "url('./images/experience-bg.png')",
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className="px-2"
        style={{
          background: "rgba(0, 0, 0, 0.79)",
        }}
      >
        <div className="container mx-auto items-center text-center">
          <h1 className="text-5xl md:text-[106px] leading-[80px] md:leading-[136px] py-32 md:py-[180px]">
            <span className="text-white">Experience the Passion of</span>{" "}
            <span className="text-[#006AB6]">Unity Mind</span>
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Experience;
