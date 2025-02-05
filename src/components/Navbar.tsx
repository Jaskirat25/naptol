import React from "react";
import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";
function Navbar() {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16  ">
      {/* mobile */}
      <div className="flex justify-between items-center h-full md:hidden">
        <Link href="/">
          <div className="test-2xl tracking-wide">NAPTOL</div>
        </Link>
        <Menu />
      </div>
      {/* laptop */}
      <div className="hidden md:flex h-full ml-10">
        {/* Left */}
        <div className=" flex items-center justify-between ">
          <Link href="/" className="flex items-center ml-20 gap-2">
            <Image src="/logo.png" alt="" width={24} height={24} />
            <div className="test-4xl tracking-wide">NAPTOL</div>
          </Link>
            <div className="flex gap-3 ml-20">
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
            </div>
        </div>
        {/* right */}
        <div className="w-2/3 flex items-center gap-9  h-full ml-20 ">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
