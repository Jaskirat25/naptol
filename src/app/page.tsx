import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductsList";
import Skeleton from "@/components/Skeleton";
import Slider from "@/components/Slider";
import { wixClientServer } from "@/lib/wixClientServers";
import { Suspense } from "react";

const HomePage = async () => {
  // const Wix = await wixClientServer();

  // const data =  await Wix.products.queryProducts().find();

  // console.log(data);

  return (
    <div>
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Products</h1>
        <Suspense fallback={<Skeleton/>}>
        <ProductList category={process.env.NEXT_PUBLIC_FEATURED_PRODUCTS_ID!} limit={4}/>

        </Suspense>
      </div>
      <div className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">
          Categories
        </h1>
        <CategoryList />
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">New Products</h1>
        <Suspense fallback={<Skeleton/>}>
        <ProductList category={process.env.NEXT_PUBLIC_FEATURED_PRODUCTS_ID!} limit={4}/>

        </Suspense>      </div>
    </div>
  );
};

export default HomePage;
