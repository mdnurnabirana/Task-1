"use client";

import Container from "../ui/Container";
import Image from "next/image";
import { motion } from "motion/react";

const Newsletter = () => {
  return (
    <section className="mt-12 sm:mt-32">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="bg-[#4A69E2] rounded-3xl sm:rounded-[48px] text-white flex flex-col md:flex-row justify-between items-start sm:items-center px-4 sm:px-12 lg:px-18 py-4 sm:py-16 gap-8 md:gap-50 pb-50 sm:pb-50"
        >
          {/* Left text & input */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="flex-1 w-full"
          >
            <h1 className="font-semibold uppercase text-3xl sm:text-5xl">
              Join our KicksPlus Club & get 15% off
            </h1>
            <p className="font-semibold font-open-sans text-base sm:text-xl text-[#E7E7E3] mt-2 sm:mt-4">
              Sign up for free! Join the community.
            </p>
            <div className="flex gap-4 mt-6 sm:mt-8 w-full sm:w-[70%]">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 min-w-0 w-full rounded-lg px-4 py-3 border border-white placeholder-[#E7E7E3] text-black focus:outline-none focus:ring-2 focus:ring-white bg-white"
              />
              <button className="w-auto bg-[#232321] rounded-lg px-6 py-3 uppercase text-sm font-medium hover:bg-gray-800 transition">
                Submit
              </button>
            </div>
          </motion.div>

          {/* Right image/logo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="shrink-0"
          >
            <Image
              src="/newsLogo.png"
              alt="Newsletter Logo"
              height={112}
              width={367}
              className="object-contain w-50 h-15 sm:h-27 sm:w-80"
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Newsletter;