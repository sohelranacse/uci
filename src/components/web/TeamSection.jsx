import React from "react";

function TeamSection() {
  return (
    <section className="teamBg px-2">
      <div className="container mx-auto py-16">
        <div className="md:grid grid-cols-7 pb-10 md:pb-[76px]">
          <h1 className="col-span-3 pt-[5px] text-5xl leading-[60px] md:text-[64px] md:leading-[75px] text-[#006AB6]">
            Meet Our Strong Team
          </h1>
          <p className="col-span-4 text-[20px] text-[#58595B] leading-[29px] font-[600] py-4">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour. There are many variations of passages of Lorem Ipsum
            available, but the majority have suffered alteration in some form,
            by injected humour.
          </p>
        </div>

        {/* member */}
        <div className="md:grid grid-cols-3 gap-[30px] text-[#58595B] md:pb-12">
          <div className="py-5 md:py-0">
            <img src="./images/team/member-1.png" alt="member" />
            <h3 className="text-[30px] leading-[29px] pt-[21px]">Sajib Paul</h3>
            <p className="py-2 font-[600] text-[20px] leading-[29px]">
              CEO & Founder
            </p>
          </div>
          <div className="py-5 md:py-0">
            <img src="./images/team/member-2.png" alt="member" />
            <h3 className="text-[30px] leading-[29px] pt-[21px]">
              Tasnim Jahan
            </h3>
            <p className="py-2 font-[600] text-[20px] leading-[29px]">
              Director
            </p>
          </div>
          <div className="py-5 md:py-0">
            <img src="./images/team/member-3.png" alt="member" />
            <h3 className="text-[30px] leading-[29px] pt-[21px]">
              Zara jesmin
            </h3>
            <p className="py-2 font-[600] text-[20px] leading-[29px]">
              Accountant
            </p>
          </div>
          <div className="py-5 md:py-0">
            <img src="./images/team/member-4.png" alt="member" />
            <h3 className="text-[30px] leading-[29px] pt-[21px]">
              Mehejabin Khan
            </h3>
            <p className="py-2 font-[600] text-[20px] leading-[29px]">
              Business Development
            </p>
          </div>
          <div className="py-5 md:py-0">
            <img src="./images/team/member-5.png" alt="member" />
            <h3 className="text-[30px] leading-[29px] pt-[21px]">
              Eiahia Sohel
            </h3>
            <p className="py-2 font-[600] text-[20px] leading-[29px]">
              Marketing
            </p>
          </div>
          <div className="py-5 md:py-0">
            <img src="./images/team/member-6.png" alt="member" />
            <h3 className="text-[30px] leading-[29px] pt-[21px]">Payel Das</h3>
            <p className="py-2 font-[600] text-[20px] leading-[29px]">
              Head of IT
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
