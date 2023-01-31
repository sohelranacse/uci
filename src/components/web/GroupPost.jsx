import { HiOutlineUsers, HiOutlineUserGroup } from "react-icons/hi2";

function GroupPost({
  image,
  tag,
  title,
  description,
  member,
  leader,
  dream,
  author,
  authorImg,
  authorDesc,
}) {
  return (
    <div className="md:grid grid-cols-12 py-6 md:py-14">
      <div className="col-span-8">
        <img src={image} alt="post 1" />
        <div className="md:grid grid-cols-12">
          <div className="col-start-3 col-span-10 mt-[-28px]">
            <span className="text-[24px] text-white font-[700] text-center leading-[28.18px] py-2 md:py-4 px-8 md:px-12 bg-[#EE3129] inline-block">
              {tag}
            </span>
            <h2 className="text-[#006AB6] text-3xl md:text-[38px] md:leading-[44px] pt-[22px]">
              {title}
            </h2>
            <p className="border-b border-[#006AB6] pt-4 pb-[27px] text-[20px] leading-[29px] text-[#68696A]">
              {description}
            </p>
            <div className="flex flex-wrap justify-between py-3">
              <div className="text-[18px] leading-[21px] text-[#68696A]">
                <HiOutlineUsers className="inline-flex mr-2" />
                {member} Members
              </div>
              <div className="text-[18px] leading-[21px] text-[#68696A]">
                <HiOutlineUserGroup className="inline-flex mr-2" />
                {leader} Group Leader
              </div>
              <div className="text-[18px] leading-[21px] text-[#68696A]">
                {dream} Dreams
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-4 md:text-center">
        <h2 className="text-[#006AB6] text-[30px] leading-[35px]">
          About Group
        </h2>
        <img
          src={authorImg}
          alt="author 1"
          className="pt-[18px] pb-[14px] md:mx-auto"
        />
        <h3 className="text-[#006AB6] text-[20px] leading-[23px]">{author}</h3>
        <p className="text-[17px] leading-[29px] text-[#68696A] py-3">
          {authorDesc}
        </p>
      </div>
    </div>
  );
}

export default GroupPost;
