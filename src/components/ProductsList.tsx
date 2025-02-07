import Image from "next/image";
import Link from "next/link";

const PRODUCT_PER_PAGE = 8;

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href={"/"}
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        key={1}
      >
        <div className="relative w-full h-80">
          <Image
      src= "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
      alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          {
            <Image
              src={"https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"}
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md"
            />
          }
        </div>
        <div className="flex justify-between">
          <span className="font-medium">name</span>
          <span className="font-semibold">$300</span>
        </div>

        <div className="text-sm text-gray-500">Description</div>

        <button className="rounded-2xl ring-1 ring-black text-black w-max py-2 px-4 text-xs hover:bg-black hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link
        href={"/"}
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        key={2}
      >
        <div className="relative w-full h-80">
          <Image
      src= "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
      alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          {
            <Image
              src={"https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"}
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md"
            />
          }
        </div>
        <div className="flex justify-between">
          <span className="font-medium">name</span>
          <span className="font-semibold">$300</span>
        </div>

        <div className="text-sm text-gray-500">Description</div>

        <button className="rounded-2xl ring-1 ring-black text-black w-max py-2 px-4 text-xs hover:bg-black hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link
        href={"/"}
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        key={3}
      >
        <div className="relative w-full h-80">
          <Image
      src= "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
      alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          {
            <Image
              src={"https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"}
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md"
            />
          }
        </div>
        <div className="flex justify-between">
          <span className="font-medium">name</span>
          <span className="font-semibold">$300</span>
        </div>

        <div className="text-sm text-gray-500">Description</div>

        <button className="rounded-2xl ring-1 ring-black text-black w-max py-2 px-4 text-xs hover:bg-black hover:text-white">
          Add to Cart
        </button>
      </Link>
      <Link
        href={"/"}
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
        key={4}
      >
        <div className="relative w-full h-80">
          <Image
      src= "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
      alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          {
            <Image
              src={"https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800"}
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md"
            />
          }
        </div>
        <div className="flex justify-between">
          <span className="font-medium">name</span>
          <span className="font-semibold">$300</span>
        </div>

        <div className="text-sm text-gray-500">Description</div>

        <button className="rounded-2xl ring-1 ring-black text-black w-max py-2 px-4 text-xs hover:bg-black hover:text-white">
          Add to Cart
        </button>
      </Link>
</div>
    )

};
export default ProductList;
