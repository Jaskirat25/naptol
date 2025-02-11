import { wixClientServer } from "@/lib/wixClientServers";
import { products } from "@wix/stores";
import { log } from "console";
import Image from "next/image";
import Link from "next/link";

const PRODUCT_PER_PAGE = 8;

const ProductList = async ({
  category,
  limit,
}: {
  category: string;
  limit: number;
}) => {
  const Wix = await wixClientServer();

  const item =await Wix.products
    .queryProducts()
    .eq("collectionIds",process.env.NEXT_PUBLIC_FEATURED_PRODUCTS_ID!)
    .limit(limit || PRODUCT_PER_PAGE)
    .find();

  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {item.items.map((product: products.Product) => {


return(

  <Link
  href={"/" + product.slug}
  className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
  key={product._id}
  >
          <div className="relative w-full h-80">
            <Image
              src={product.media?.mainMedia?.image?.url || "/product.png"}
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
              />
            {product.media?.items && (
              <Image
              src={product.media?.items[1]?.image?.url || ""}
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md"
              />
            )}
          </div>
          <div className="flex justify-between">
            <span className="font-medium">{product.name}</span>
            <span className="font-semibold">{product.price?.price}</span>
          </div>

          <div className="text-sm text-gray-500">{product.description}</div>

          <button className="rounded-2xl ring-1 ring-black text-black w-max py-2 px-4 text-xs hover:bg-black hover:text-white">
            Add to Cart
          </button>
        </Link>
          )
      })}
    </div>
  );
};
export default ProductList;
