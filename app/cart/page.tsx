import RecommendedProduct from "@/components/layouts/RecommendedProduct";
import Container from "@/components/ui/Container";
import Image from "next/image";
import React from "react";
import { BsCartX } from "react-icons/bs";
import { LuHeart } from "react-icons/lu";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Cart = () => {
  return (
    <section className="mt-6 sm:mt-8 text-[#232321]">
      <Container>
        <h1 className="font-semibold text-2xl sm:text-[32px] px-0 sm:px-10">
          Saving to celebrate
        </h1>
        <p className="mt-2 text-xs sm:text-sm font-open-sans w-full px-0 sm:px-10">
          Enjoy up to 60% off thousands of styles during the End of Year sale -
          while suppiles last. No code needed.
        </p>

        <p className="mt-2 text-xs sm:text-sm font-open-sans w-full px-0 sm:px-10">
          <span className="underline">Join us</span> or{" "}
          <span className="underline">Sing in</span>
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-between gap-10 px-0 sm:px-10">
          {/* Left Section  */}
          <div className="bg-[#FAFAFA] rounded-2xl p-3 sm:p-6">
            <h1 className="font-semibold text-2xl sm:text-[32px] ">Your Bag</h1>
            <p className="mt-2 text-xs sm:text-sm font-open-sans">
              Items in your bag not reserved- check out now to make them yours.
            </p>

            <div className="flex justify-between gap-3 sm:gap-6 mt-6">
              <Image
                src="/review1.png"
                alt="sample"
                height={225}
                width={200}
                className="rounded-2xl w-39 h-54 sm:w-50 sm:h-57"
              />
              <div>
                <div className="flex justify-start sm:justify-between items-start gap-8">
                  <h1 className="font-semibold text-[16px] sm:text-2xl line-clamp-2">
                    DROPSET TRAINER SHOES
                  </h1>
                  <p className="font-open-sans font-semibold text-[#4A69E2] text-2xl hidden sm:block">
                    $120.2
                  </p>
                </div>
                <p className="mt-2 text-xs sm:text-sm font-open-sans">
                  Men’s Road Running Shoes
                </p>
                <p className="mt-2 text-xs sm:text-sm font-open-sans">
                  Men’s Road Running Shoes
                </p>
                <div className="flex items-center gap-2 sm:gap-8 text-xs sm:text-sm font-open-sans mt-5">
                  <div className="flex items-center gap sm:gap-2">
                    <span>Size:</span>
                    <span className="font-medium">10</span>
                    <MdOutlineKeyboardArrowDown
                      size={20}
                      className="text-gray-500"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <span>Quantity:</span>
                    <span className="font-medium">1</span>
                    <MdOutlineKeyboardArrowDown
                      size={20}
                      className="text-gray-500"
                    />
                  </div>
                </div>

                <p className="mt-2 font-open-sans font-semibold text-[#4A69E2] text-xl sm:text-2xl block sm:hidden">
                  $120.2
                </p>

                <div className="flex justify-start gap-5 mt-3 sm:mt-9">
                  <LuHeart size={28} />
                  <BsCartX size={28} />
                </div>
              </div>
            </div>
          </div>
          {/* Right Section  */}
          <div className="bg-[#FAFAFA] sm:bg-transparent rounded-2xl p-4 flex-1">
            <h1 className="font-semibold text-xl sm:text-3xl">Order Summary</h1>
            <div className="mt-3 sm:mt-6 flex justify-between uppercase font-open-sans">
              <h1>1 Item</h1>
              <p>$120</p>
            </div>
            <div className="mt-2 sm:mt-3 flex justify-between uppercase font-open-sans">
              <h1>Delivery</h1>
              <p>$0</p>
            </div>
            <div className="mt-2 sm:mt-3 flex justify-between uppercase font-open-sans">
              <h1>Sales Tax</h1>
              <p>$0</p>
            </div>
            <div className="mt-2 sm:mt-3 flex justify-between uppercase font-open-sans">
              <h1 className="font-bold">Total</h1>
              <p className="font-bold">$120</p>
            </div>
            <button className="mt-3 sm:mt-6 bg-[#232321] text-white py-3 rounded-lg font-semibold text-sm w-full">
              Checkout
            </button>

            <p className="font-semibold mt-3 sm:mt-6">Use a promo code</p>
          </div>
        </div>
      </Container>

      <RecommendedProduct />
    </section>
  );
};

export default Cart;