import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
function HomeBanner() {
  const router = useRouter();
  const [image, setImage] = useState(1);
  const [searchData, setSearchData] = useState("");
  useEffect(() => {
    const interval = setInterval(
      () => setImage(image >= 6 ? 1 : image + 1),
      10000
    );
    return () => clearInterval(interval);
  }, [image]);

  return (
    <div className="h-[680px] relative bg-cover">
      <div className="absolute top-0 right-0 w-[110vw] h-full transition-opacity z-0">
        <Image
          alt="hero"
          src="/bg-hero1.webp"
          fill
          className={`${
            image === 1 ? "opacity-100" : "opacity-0"
          } transition-all duration-1000`}
        />
        <Image
          alt="hero"
          src="/bg-hero2.webp"
          fill
          className={`${
            image === 2 ? "opacity-100" : "opacity-0"
          } transition-all duration-1000`}
        />
        <Image
          alt="hero"
          src="/bg-hero3.webp"
          fill
          className={`${
            image === 3 ? "opacity-100" : "opacity-0"
          } transition-all duration-1000`}
        />
        <Image
          alt="hero"
          src="/bg-hero4.webp"
          fill
          className={`${
            image === 4 ? "opacity-100" : "opacity-0"
          } transition-all duration-1000`}
        />
        <Image
          alt="hero"
          src="/bg-hero5.webp"
          fill
          className={`${
            image === 5 ? "opacity-100" : "opacity-0"
          } transition-all duration-1000`}
        />
        <Image
          alt="hero"
          src="/bg-hero6.webp"
          fill
          className={`${
            image === 6 ? "opacity-100" : "opacity-0"
          } transition-all duration-1000`}
        />
      </div>
      <div className="z-10 relative w-[650px] flex justify-center flex-col h-full gap-5 ml-20">
        <h1 className="text-white text-5xl leading-snug">
          Discover the power of &nbsp;
          <i>Giggs</i>
          <br />
        </h1>
        <h1 className="text-white text-4xl leading-snug">
          Showcase.Connect.Collaborate
        </h1>
        <p className="text-white">
          Whether you are a talented freelancer looking to showcase your skills
          or a business seeking top-notch services, Giggs is the platform that
          brings it all together. Join our community today and unlock a world of
          opportunities.
        </p>
        <div className="flex align-middle">
          <div className="relative"></div>
          <button
            className="bg-[#FD8D14] text-white px-9 py-3 text-2xl font-semibold rounded-md"
            onClick={() => router.push(`/search?q=${searchData}`)}
          >
            Start Earning
          </button>
          <button
            className="bg-[#FD8D14] text-white mx-3 px-9 py-3 text-2xl font-semibold rounded-md"
            onClick={() => router.push(`/search?q=${searchData}`)}
          >
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
