import React from "react";
import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";
function Navbar() {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-64 border bg-white">
      {/* Mobile */}
      <div className="flex justify-between items-center h-full md:hidden">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={24} height={24} />
          <div className="text-2xl font-semibold text-gray-900 tracking-wide ">NAPTOL</div>
        </Link>
        <Menu />
      </div>

      {/* Laptop */}
      <div className="hidden md:flex flex-auto gap-12 items-center h-full">
        {/* Left */}
        <div className="w-2/3  flex items-center gap-10">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" width={26} height={26} />
            <div className="text-3xl font-bold text-gray-900 tracking-wide">NAPTOL</div>
          </Link>
          <nav className="hidden lg:flex gap-5 text-gray-700 font-medium">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/" className="hover:text-blue-600">Shop</Link>
            <Link href="/" className="hover:text-blue-600">Deal</Link>
            <Link href="/" className="hover:text-blue-600">About</Link>
            <Link href="/" className="hover:text-blue-600">Contact</Link>
          </nav>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4 w-full">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
}



export default Navbar;
