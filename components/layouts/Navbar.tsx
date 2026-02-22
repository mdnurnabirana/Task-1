import Link from "next/link";
import Container from "../ui/Container";
import Logo from "../ui/Logo";
import { FiSearch } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { VscThreeBars } from "react-icons/vsc";
import CartCount from "../ui/CartCount";

const Navbar = () => {
  return (
    <header className="mt-8">
      <Container>
        <div className="hidden md:flex bg-[#FAFAFA] rounded-3xl px-8 py-6 items-center justify-between">
          <nav>
            <ul className="flex items-center gap-10 font-semibold">
              <li><Link href="/">New Drops 🔥</Link></li>
              <li><Link href="/">Men</Link></li>
              <li><Link href="/">Women</Link></li>
              <li><Link href="/cart">Cart</Link></li>
            </ul>
          </nav>

          <Link href={"/"}><Logo width={128} height={32} /></Link>
          
          <div className="flex items-center gap-8">
            <FiSearch size={24} />
            <FaUser size={24} />
            {/* <div className="bg-[#FFA52F] h-8 w-8 rounded-full flex items-center justify-center font-semibold">
              0
            </div> */}
            <CartCount />
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="flex md:hidden bg-[#FAFAFA] rounded-3xl px-4 py-4 items-center justify-between">
          <VscThreeBars size={28} />

          <Link href={"/"}><Logo width={128} height={32} /></Link>

          <div className="flex items-center gap-4">
            <FaUser size={24} />
            {/* <div className="bg-[#FFA52F] h-8 w-8 rounded-full flex items-center justify-center font-semibold">
              0
            </div> */}
            <CartCount />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;