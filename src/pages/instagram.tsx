import Image from "next/image";
import InstagramScreen1 from "@/../public/InstagramScreen1.png";
import InstagramScreen2 from "@/../public/InstagramScreen2.png";
import InstagramScreen3 from "@/../public/InstagramScreen3.png";
import InstagramScreen4 from "@/../public/InstagramScreen4.png";
import { useEffect, useState } from "react";

export default function Instagram() {
  const [displayImage, setDisplayImage] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayImage(displayImage > 2 ? 0 : displayImage + 1);
    }, 3000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [displayImage]);

  useEffect(() => {
    console.log(displayImage);
  }, [displayImage]);

  return (
    <main className="bg-white min-h-screen flex justify-center items-center">
      <section className="relative bg-[url('/InstagramPhones.png')] w-[468.32px] h-[634.15px] bg-cover">
        {/* <Image
          src={InstagramPhones}
          alt="Instagram Phones"
          className="absolute w-full"
        /> */}
        <Image
          src={InstagramScreen1}
          alt="Instagram Phones"
          className={
            "w-[250px] absolute bottom-[70px] right-[60px] transition-opacity duration-500 " +
            (displayImage === 0 ? "opacity-100" : "opacity-0")
          }
        />
        <Image
          src={InstagramScreen2}
          alt="Instagram Phones"
          className={
            "w-[250px] absolute bottom-[70px] right-[60px] transition-opacity duration-500 " +
            (displayImage === 1 ? "opacity-100" : "opacity-0")
          }
        />
        <Image
          src={InstagramScreen3}
          alt="Instagram Phones"
          className={
            "w-[250px] absolute bottom-[70px] right-[60px] transition-opacity duration-500 " +
            (displayImage === 2 ? "opacity-100" : "opacity-0")
          }
        />
        <Image
          src={InstagramScreen4}
          alt="Instagram Phones"
          className={
            "w-[250px] absolute bottom-[70px] right-[60px] transition-opacity duration-500 " +
            (displayImage === 3 ? "opacity-100" : "opacity-0")
          }
        />
      </section>
    </main>
  );
}
