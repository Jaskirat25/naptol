"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Image
        src="/menu.png"
        alt="hi"
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />

      {open && <div className="w-full h-full bg-black text-white absolute z-10 top-20 left-0 flex flex-col justify-center items-center gap-5">
        <Link href="/">Home</Link>
        <Link href="/">Shop</Link>
        <Link href="/">Deals</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Cart(1)</Link>
        <Link href="/">Logout</Link>
        </div>}
    </div>
  );
}

export default Menu;
