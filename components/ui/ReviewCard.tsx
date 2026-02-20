import Image from "next/image";
import { MdStar } from "react-icons/md";

type Props = {
  userImg: string;
};

const ReviewCard = ({ userImg }: Props) => {
  return (
    <div className="bg-[#FAFAFA] rounded-2xl sm:rounded-4xl">
      <div className="p-4 sm:p-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="font-semibold text-2xl">Good Quality</h1>
            <p className="text-[16px] font-open-sans text-[#232321]">
              I highly recommend shopping from kicks
            </p>
          </div>
          <Image src={userImg} alt="Review User Image" height={64} width={64} />
        </div>
        <div className="flex items-center mt-2">
          <MdStar color="#FFA52F" size={24} />
          <MdStar color="#FFA52F" size={24} />
          <MdStar color="#FFA52F" size={24} />
          <MdStar color="#FFA52F" size={24} />
          <MdStar color="#FFA52F" size={24} />
          <span className="font-semibold text-[16px] ml-2 font-open-sans">5.0</span>
        </div>
      </div>

      <Image
        src="/review1.png"
        alt="review"
        height={325}
        width={430}
        className="rounded-b-2xl sm:rounded-b-4xl"
      />
    </div>
  );
};

export default ReviewCard;