"use client";

import Image from "next/image";
import { BsCartX } from "react-icons/bs";
import { LuHeart } from "react-icons/lu";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "motion/react";

const CartItems = () => {
  const { cart } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
      }}
      className="mt-8 flex flex-col sm:flex-row justify-between gap-10 px-0 sm:px-10"
    >
      {/* Left Section */}
      <div className="bg-[#FAFAFA] rounded-2xl p-3 sm:p-6 flex-1">
        {cart.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center h-full text-center py-20 text-gray-500"
          >
            <BsCartX size={50} className="mb-4" />
            <h1 className="font-semibold text-2xl sm:text-3xl">
              Cart Not Available
            </h1>
            <p className="mt-2 text-sm sm:text-base">
              Your shopping bag is empty. Start adding items to see them here!
            </p>
          </motion.div>
        ) : (
          <>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="font-semibold text-2xl sm:text-[32px]"
            >
              Your Bag
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="mt-2 text-xs sm:text-sm font-open-sans"
            >
              Items in your bag not reserved- check out now to make them yours.
            </motion.p>

            <AnimatePresence>
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                  }}
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
                      <motion.h1
                        layout
                        className="font-semibold text-[16px] sm:text-2xl line-clamp-2"
                      >
                        {item.title}
                      </motion.h1>

                      <motion.p
                        layout
                        className="font-open-sans font-semibold text-[#4A69E2] text-2xl hidden sm:block"
                      >
                        ${item.price}
                      </motion.p>
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
                        <motion.span
                          layout
                          key={item.quantity}
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 0.2 }}
                          className="font-medium"
                        >
                          {item.quantity}
                        </motion.span>
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
                </motion.div>
              ))}
            </AnimatePresence>
          </>
        )}
      </div>

      {/* Order Summary */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="bg-[#FAFAFA] sm:bg-transparent rounded-2xl p-4 flex-1"
      >
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="font-semibold text-xl sm:text-3xl"
        >
          Order Summary
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-3 sm:mt-6 flex justify-between uppercase font-open-sans"
        >
          <h1>{totalItems} Item</h1>
          <p>${totalPrice}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="mt-2 sm:mt-3 flex justify-between uppercase font-open-sans"
        >
          <h1>Delivery</h1>
          <p>$0</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.37 }}
          className="mt-2 sm:mt-3 flex justify-between uppercase font-open-sans"
        >
          <h1>Sales Tax</h1>
          <p>$0</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.39 }}
          className="mt-2 sm:mt-3 flex justify-between uppercase font-open-sans"
        >
          <h1 className="font-bold">Total</h1>
          <p className="font-bold">${totalPrice}</p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, delay: 0.45 }}
          className="mt-3 sm:mt-6 bg-[#232321] text-white py-3 rounded-lg font-semibold text-sm w-full"
        >
          Checkout
        </motion.button>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.47 }}
          className="font-semibold mt-3 sm:mt-6"
        >
          Use a promo code
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default CartItems;