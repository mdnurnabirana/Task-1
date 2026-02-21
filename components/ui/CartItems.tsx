"use client";

import Image from "next/image";
import { BsCartX } from "react-icons/bs";
import { LuHeart } from "react-icons/lu";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useCart } from "@/context/CartContext";

const CartItems = () => {
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="mt-8 flex flex-col sm:flex-row justify-between gap-10 px-0 sm:px-10">
      {/* Left Section */}
      <div className="bg-[#FAFAFA] rounded-2xl p-3 sm:p-6">
        <h1 className="font-semibold text-2xl sm:text-[32px] ">Your Bag</h1>

        <p className="mt-2 text-xs sm:text-sm font-open-sans">
          Items in your bag not reserved- check out now to make them yours.
        </p>

        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between gap-3 sm:gap-6 mt-6"
          >
            <Image
              src={item.image}
              alt={item.title}
              height={225}
              width={200}
              className="rounded-2xl w-39 h-54 sm:w-50 sm:h-57"
            />

            <div>
              <div className="flex justify-start sm:justify-between items-start gap-8">
                <h1 className="font-semibold text-[16px] sm:text-2xl line-clamp-2">
                  {item.title}
                </h1>

                <p className="font-open-sans font-semibold text-[#4A69E2] text-2xl hidden sm:block">
                  ${item.price}
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
                  <span className="font-medium">{item.quantity}</span>
                  <MdOutlineKeyboardArrowDown
                    size={20}
                    className="text-gray-500"
                  />
                </div>
              </div>

              <p className="mt-2 font-open-sans font-semibold text-[#4A69E2] text-xl sm:text-2xl block sm:hidden">
                ${item.price}
              </p>

              <div className="flex justify-start gap-5 mt-3 sm:mt-9">
                <LuHeart size={28} />
                <BsCartX size={28} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#FAFAFA] sm:bg-transparent rounded-2xl p-4 flex-1">
        <h1 className="font-semibold text-xl sm:text-3xl">Order Summary</h1>

        <div className="mt-3 sm:mt-6 flex justify-between uppercase font-open-sans">
          <h1>{totalItems} Item</h1>
          <p>${totalPrice}</p>
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
          <p className="font-bold">${totalPrice}</p>
        </div>

        <button className="mt-3 sm:mt-6 bg-[#232321] text-white py-3 rounded-lg font-semibold text-sm w-full">
          Checkout
        </button>

        <p className="font-semibold mt-3 sm:mt-6">Use a promo code</p>
      </div>
    </div>
  );
};

export default CartItems;