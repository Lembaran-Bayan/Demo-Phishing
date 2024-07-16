import Image from "next/image";
import InstagramScreen1 from "@/../public/InstagramScreen1.png";
import InstagramScreen2 from "@/../public/InstagramScreen2.png";
import InstagramScreen3 from "@/../public/InstagramScreen3.png";
import InstagramScreen4 from "@/../public/InstagramScreen4.png";
import InstagramLogoText from "@/../public/LogoInstagram.png";
import FacebookLogo from "@/../public/Facebook.png";
import GooglePlay from "@/../public/GooglePlay.png";
import Microsoft from "@/../public/Microsoft.png";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function Instagram() {
  const [displayImage, setDisplayImage] = useState<number>(0);
  const [identifier, setIdentifier] = useState<string>("");
  const [password, setPassword] = useState<string>("");

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
    <main className="bg-white min-h-screen flex justify-center items-center text-black">
      <Head>
        <title>Instagram Fake</title>
        <link
          rel="icon"
          href="/InstagramLogo.png"
        />
      </Head>
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

      <div>
        <section className="border-[1px] border-[rgba(219,219,219)] w-[350px] flex flex-col justify-center items-center pt-[10px] pb-5">
          <Image
            src={InstagramLogoText}
            alt="Instagram Logo Text"
            className="mt-9 mb-3"
          />

          <form
            className="flex flex-col justify-center items-center"
            onSubmit={(e) => {
              e.preventDefault();
              console.log(`Phone/email/username\t: ${identifier}`);
              console.log(`Password\t: ${password}`);
              alert(
                `
            Kredensial anda telah dikirim ke hacker 😂\n
            ID : ${identifier}\n
            Password : ${password}
            `
              );
            }}
          >
            <label>
              <input
                type="text"
                className="text-[12px] w-[258px] p-[9px] outline outline-1 outline-[rgba(219,219,219)] text-black mb-[6px]"
                placeholder="Phone number, username, or email"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
              />
            </label>
            <label>
              <input
                type="password"
                className="text-[12px] w-[258px] p-[9px] outline outline-1 outline-[rgba(219,219,219)] text-black"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button
              type="submit"
              className="bg-[rgba(0,149,246)] font-semibold rounded-[8px] py-1.5 text-[14px] w-full mt-[12px] text-white hover:bg-[#1877f2] transition"
            >
              Log in
            </button>
          </form>

          <div className="relative w-full my-5 flex justify-center items-center px-10">
            <div className="w-full h-[1px] bg-[rgba(219,219,219)] my-3" />
            <span className="absolute font-bold bg-white px-5">OR</span>
          </div>

          <div className="flex items-center gap-2">
            <Image
              src={FacebookLogo}
              alt="Facebook Logo"
              className="w-[15px]"
            />
            <a
              className="font-medium text-[#385185] text-[14px]"
              href="#"
            >
              Log in with Facebook
            </a>
          </div>

          <div className="mt-4">
            <a
              className="text-[12px] text-[#00376B]"
              href="#"
            >
              Forgot password?
            </a>
          </div>
        </section>

        <section className="border-[1px] border-[rgba(219,219,219)] mt-[10px] text-[14px] text-center py-[25px]">
          Don&apos;t have an account?{" "}
          <a
            href="#"
            className="text-[#0095F6] font-semibold"
          >
            Sign up
          </a>
        </section>

            <p className="text-[14px] text-center mt-[20px] mb-[10px]">Get the app.</p>
        <section className="flex justify-center mt-[15px] pb-10 gap-2">
          <Image
            src={GooglePlay}
            alt="Google Play"
            className="h-[40px]"
          />
          <Image
            src={Microsoft}
            alt="Microsoft"
            className="h-[40px]"
          />
        </section>
      </div>
    </main>
  );
}
