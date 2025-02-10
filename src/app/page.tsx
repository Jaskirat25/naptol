"use client";
import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductsList";
import Slider from "@/components/Slider";
import { WixClient } from "@/context/wixContext";
import { useWixClient } from "@/hooks/useWixClient";

import { Suspense, useContext, useEffect } from "react";

const HomePage = () => {
  // const wixContext = useWixClient();

  // useEffect(() => {
  //   const data = async () => {
  //     try {
  //       const data = await wixContext.products.queryProducts().find();
      
  //     } catch (error) {
  //       console.log("Error i n jassi da data ", error);
  //     }
  //   };
  //   data();
  // }, [wixContext]);
  return (
    <div>
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <ProductList />
      </div>
      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">
          Categories
        </h1>
        <CategoryList />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
        <ProductList />
      </div>
    </div>
  );
};

export default HomePage;
