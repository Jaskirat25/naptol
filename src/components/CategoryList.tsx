import Image from "next/image";
import Link from "next/link";

const CategoryList = async () => {
  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        <Link
          href={`/list?cat`}
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
          key={111}
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
      src= "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
      alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">Name</h1>
        </Link>
        <Link
          href={`/list?cat`}
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
          key={112}


        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
      src= "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
      alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">Name</h1>
        </Link>
        <Link
          href={`/list?cat`}
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
          key={113}
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
      src= "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
      alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">Name</h1>
        </Link>
        <Link
          href={`/list?cat`}
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
          key={114}
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
      src= "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
      alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">Name</h1>
        </Link>
        <Link
          href={`/list?cat`}
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
          key={115}
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
      src= "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
      alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">Name</h1>
        </Link>
        <Link
          href={`/list?cat`}
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
          key={151}
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
      src= "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
      alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">Name</h1>
        </Link>
        <Link
          href={`/list?cat`}
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
          key={116}
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
      src= "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
      alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">Name</h1>
        </Link>
        <Link
          href={`/list?cat`}
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
          key={117}
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
      src= "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
      alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">Name</h1>
        </Link>
        <Link
          href={`/list?cat`}
          className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6"
          key={118}
        >
          <div className="relative bg-slate-100 w-full h-96">
            <Image
      src= "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800"
      alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">Name</h1>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
