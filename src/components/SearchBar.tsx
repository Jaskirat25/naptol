"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function SearchBar() {
    const router=useRouter();
  const handleSearch = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata=new FormData(e.currentTarget);
    const search=formdata.get("name") as string;
  if(search){
    router.push(`/list?name=${search}`)
  }
  };
  return (
    <form
    onSubmit={handleSearch}
    className="flex items-center bg-white border border-gray-300 rounded-full px-2 py-2 
               shadow-md w-26  transition-all focus-within:border-blue-500"
  >
      <svg
        className="w-5 h-5 text-gray-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35M16 10.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z"
        ></path>
      </svg>
      <input
      name="name"
        type="text"
        className="ml-2 w-full outline-none bg-transparent text-gray-700"
        placeholder="Search..."
      />
    </form>
  );
}
