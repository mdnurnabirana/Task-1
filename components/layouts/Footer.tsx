import React from "react";
import Container from "../ui/Container";
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="-mt-40">
      <Container>
        <section className="bg-[#232321] rounded-3xl sm:rounded-[48px] p-4 sm:p-10 text-[#E7E7E3] pb-0 sm:pb-0">
          <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-40">
            <div className="p-0 pb-0">
              <h1 className="text-[#FFA52F] font-semibold text-2xl sm:text-4xl">
                About us
              </h1>
              <p className="mt-2 font-open-sans font-medium text-[16px] sm:text-lg">
                We are the biggest hyperstore in the universe. We got you all
                cover with our exclusive collections and latest drops.
              </p>
            </div>
            <div>
              <h1 className="text-[#FFA52F] font-semibold text-xl sm:text-2xl">
                Categories
              </h1>
              <ul className="mt-4 font-open-sans font-medium text-[16px] sm:text-lg flex flex-col gap-2">
                <li>Runners</li>
                <li>Sneakers</li>
                <li>Basketball</li>
                <li>Outdoor</li>
                <li>Golf</li>
                <li>Hiking</li>
              </ul>
            </div>
            <div>
              <h1 className="text-[#FFA52F] font-semibold text-xl sm:text-2xl">
                Company
              </h1>
              <ul className="mt-4 font-open-sans font-medium text-[16px] sm:text-lg flex flex-col gap-2">
                <li>About</li>
                <li>Contacts</li>
                <li>Blogs</li>
              </ul>
            </div>
            <div>
              <h1 className="text-[#FFA52F] font-semibold text-xl sm:text-2xl">
                Follow us
              </h1>
              <div className="mt-4 flex justify-start sm:justify-between gap-6 list-none">
                <li>
                  <FaFacebook size={24} />
                </li>
                <li>
                  <FaInstagram size={24} />
                </li>
                <li>
                  <FaTwitter size={24} />
                </li>
                <li>
                  <FaTiktok size={24} />
                </li>
              </div>
            </div>
          </div>
          <Image
            src="/footerLogo.png"
            alt="Logo"
            height={320}
            width={1260}
            className="mt-11 sm:mt-24"
          />
        </section>
        <p className="font-open-sans font-regular text-[16px] text-[#232321] text-center my-4 sm:my-7">
          © All rights reserved
        </p>
      </Container>
    </footer>
  );
};

export default Footer;