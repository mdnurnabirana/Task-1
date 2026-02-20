import Image from "next/image";
import Link from "next/link";

type FeaturedProductCardProps = {
  title: string;
  price: number;
  image: string;
};

const FeaturedProductCard = ({
  title,
  price,
  image,
}: FeaturedProductCardProps) => {
  return (
    <div className="flex flex-col">
      <div className="bg-white rounded-2xl sm:rounded-3xl p-2 relative">
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className="w-full h-auto rounded-xl sm:rounded-3xl"
        />
        <span className="bg-[#4A69E2] rounded-tl-xl sm:rounded-tl-2xl rounded-br-[14px] sm:rounded-br-3xl px-2 sm:px-4 py-1 sm:py-3 text-white font-semibold text-xs absolute top-2">
          New
        </span>
      </div>

      <h1 className="font-semibold text-[16px] text-xl mt-3 uppercase line-clamp-2 sm:line-clamp-1">
        {title}
      </h1>

      <Link href="/products/1">
        <button className="bg-[#232321] font-semibold text-xs sm:text-sm uppercase text-white py-3 w-full rounded-xl sm:rounded-2xl mt-4 cursor-pointer">
          View Product - <span className="text-[#FFA52F]">${price}</span>
        </button>
      </Link>
    </div>
  );
};

export default FeaturedProductCard;
