import React from "react";

function Team() {
  return (
    <section className="teamBg px-2">
      <div className="container mx-auto py-16">
        <div className="md:grid grid-cols-7 pb-[76px]">
          <h1 className="col-span-3 pt-[5px] text-[64px] leading-[75px] text-[#006AB6]">
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
        <div className="md:grid grid-cols-3 gap-[30px] text-[#58595B] pb-12">
          <div>
            <img src="./team/member-1.png" alt="member" />
            <h3 className="text-[30px] leading-[29px] pt-[21px]">Sajib Paul</h3>
            <p className="py-2 font-[600] text-[20px] leading-[29px]">
              CEO & Founder
            </p>
          </div>
          <div>
            <img src="./team/member-2.png" alt="member" />
            <h3 className="text-[30px] leading-[29px] pt-[21px]">
              Tasnim Jahan
            </h3>
            <p className="py-2 font-[600] text-[20px] leading-[29px]">
              Director
            </p>
          </div>
          <div>
            <img src="./team/member-3.png" alt="member" />
            <h3 className="text-[30px] leading-[29px] pt-[21px]">
              Zara jesmin
            </h3>
            <p className="py-2 font-[600] text-[20px] leading-[29px]">
              Accountant
            </p>
          </div>
          <div>
            <img src="./team/member-4.png" alt="member" />
            <h3 className="text-[30px] leading-[29px] pt-[21px]">
              Mehejabin Khan
            </h3>
            <p className="py-2 font-[600] text-[20px] leading-[29px]">
              Business Development
            </p>
          </div>
          <div>
            <img src="./team/member-5.png" alt="member" />
            <h3 className="text-[30px] leading-[29px] pt-[21px]">
              Eiahia Sohel
            </h3>
            <p className="py-2 font-[600] text-[20px] leading-[29px]">
              Marketing
            </p>
          </div>
          <div>
            <img src="./team/member-6.png" alt="member" />
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

export default Team;
