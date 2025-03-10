import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";
import Reviews from "@/components/Reviews";
import { wixClientServer } from "@/lib/wixClientServers";

import { notFound } from "next/navigation";
import { Suspense } from "react";

import { FC } from "react";

interface PageProps {
  params: { slug: string };
}

const SinglePage: FC<PageProps> = async ({ params }) => {
  const wix = await wixClientServer();
  const prod = await wix.products.queryProducts().eq("slug", params.slug).find();

  const product = prod.items[0];
  
  return (
    // <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
    //   {/* IMG */}
    //   <div className="w-full lg:w-1/2 lg:sticky top-20 h-max border">
    //     <ProductImages items={data.items[0].media?.items} />
    //   </div>
    //   {/* TEXTS */}
    //   <div className="w-full lg:w-1/2 flex flex-col gap-6 ">
    //     <h1 className="text-4xl font-medium">{data.items[0].name}</h1>
    //     <p className="text-gray-500">{data.items[0].description}</p>
    //     <div className="h-[2px] bg-gray-100" />

    //     {data.items[0]?.price?.price ===
    //     data.items[0]?.priceData?.discountedPrice ? (
    //       <h2 className="font-medium text-2xl">
    //         ${data.items[0]?.priceData?.price}
    //       </h2>
    //     ) : (
    //       <div className="flex items-center gap-4">
    //         <h3 className="text-xl text-gray-500 line-through">
    //           ${data.items[0]?.priceData?.price}
    //         </h3>
    //         <h2 className="font-medium text-2xl">
    //           ${data.items[0]?.priceData?.discountedPrice}
    //         </h2>
    //       </div>
    //     )}

    //     <div className="h-[2px] bg-gray-100" />
    //     {data.items[0].variants && data.items[0].productOptions ? (
    //       <CustomizeProducts
    //         productId={data.items[0]._id!}
    //         variants={data.items[0].variants}
    //         productOptions={data.items[0].productOptions}
    //       />
    //     ) : (
    //       <Add
    //         productId={"1"}
    //         variantId="00000000-0000-0000-0000-000000000000"
    //         stockNumber={1}
    //       />
    //     )}

    //     {/* <Add
    //       productId={1}
    //       variantId="00000000-0000-0000-0000-000000000000"
    //       stockNumber={1}
    //     /> */}

    //     <div className="h-[2px] bg-gray-100" />

    //     {data.items[0].additionalInfoSections?.map((section: any) => (
    //       <div className="text-sm" key={section.title}>
    //         <h4 className="font-medium mb-4">{section.title}</h4>
    //         <p>{section.description}</p>
    //       </div>
    //     ))}

    //     <div className="h-[2px] bg-gray-100" />

    //     <h1 className="text-2xl">User Reviews</h1>
    //   </div>
    // </div>
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 ">
        <ProductImages items={product.media?.items} />
      </div>
      {/* TEXTS */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        <div className="h-[2px] bg-gray-100" />
        {product.price?.price === product.price?.discountedPrice ? (
          <h2 className="font-medium text-2xl">${product.price?.price}</h2>
        ) : (
          <div className="flex items-center gap-4">
            <h3 className="text-xl text-gray-500 line-through">
              ${product.price?.price}
            </h3>
            <h2 className="font-medium text-2xl">
              ${product.price?.discountedPrice}
            </h2>
          </div>
        )}
        <div className="h-[2px] bg-gray-100" />
        {product.variants && product.productOptions ? (
          <CustomizeProducts
            productId={product._id!}
            variants={product.variants ||[]}
            productOptions={product.productOptions || []}
          />
         ) : (
          <Add
            productId={product._id!}
            variantId="00000000-0000-0000-0000-000000000000"
            stockNumber={product.stock?.quantity || 0}
          />
        )}
        <div className="h-[2px] bg-gray-100" />
        {product.additionalInfoSections?.map((section: any) => (
          <div className="text-sm" key={section.title}>
            <h4 className="font-medium mb-4">{section.title}</h4>
            <p>{section.description}</p>
          </div>
        ))}
        <div className="h-[2px] bg-gray-100" />
        {/* REVIEWS */}
        <h1 className="text-2xl">User Reviews</h1>
        <Suspense fallback="Loading...">
          {/* <Reviews productId={product._id!} /> */}
        </Suspense>
      </div>
    </div>
  );
};

export default SinglePage;
