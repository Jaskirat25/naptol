"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartModal from "./CartModal";
import { Bell, ShoppingCart, User } from "lucide-react";

function NavIcons() {
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      {/* <Image
        src="/profile.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={() => {
          setProfileOpen((prev) => !prev);
        }}
      /> */}
      <div onClick={() => {
          setProfileOpen((prev) => !prev);
        }}>

      <User/>
      </div>
      {isProfileOpen && (
        <div className=" z-10 absolute top-12 left-0 w-48 bg-white rounded-lg shadow-lg border border-gray-200 p-4">
          <Link
            href="/"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md"
          >
            Profile
          </Link>
          <div className="mt-2 border-t border-gray-300"></div>
          <div className="mt-2 px-4 py-2 text-red-600 hover:bg-red-100 rounded-md cursor-pointer">
            Logout
          </div>
        </div>
      )}

      {/* <Image
        src="/notification.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
      /> */}
      <Bell/>
      <div className="relative">
        <div
          className="relative cursor-pointer"
          onClick={() => setCartOpen((prev) => !prev)}
        >
        
          <ShoppingCart/>
          <div className="absolute -top-3 -right-3 w-6 h-6 bg-red-500 text-white text-xs flex items-center justify-center rounded-full shadow-md ">
            3
          </div>
        </div>
      

        {isCartOpen && (
         
            <CartModal />
       
        )}
      </div>
    </div>
  );
}

export default NavIcons;
