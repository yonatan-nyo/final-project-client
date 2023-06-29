"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClickInvest = () => {
    router.push("/invest");
  };

  return (
    <div className="flex flex-col overflow-x-hidden relative">
      <svg
        width="603"
        height="663"
        viewBox="0 0 603 663"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -z-10 -left-80 top-20 hidden md:block">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M272.557 25.8045C338.479 28.2976 405.865 -1.7688 462.579 40.7432C531.396 92.327 592.064 173.235 600.849 271.888C610.076 375.506 566.547 474.417 507.744 547.907C450.381 619.597 371.507 674.951 290.287 660.016C215.963 646.349 181.187 546.205 129.296 478.319C82.4787 417.071 18.654 371.135 6.31207 288.509C-7.58855 195.447 2.39624 84.0672 61.6704 25.5813C118.501 -30.494 199.488 23.0411 272.557 25.8045Z"
          fill="#EBFBFF"
        />
      </svg>
      <section
        id="home"
        className="w-full max-w-[1450px] mx-auto md:flex md:justify-between min-h-screen max-w-screen items-center py-20 relative">
        <div className="block md:hidden w-auto">
          <Image
            alt="Invest together"
            src="/illustrationInvestMobile.png"
            width={800}
            height={800}
            className="w-full h-[450px] object-cover object-bottom"
            priority
          />
        </div>
        <div className="h-full flex flex-col justify-center pl-4 md:pl-6 ">
          <h1 className="text-blue-500 font-bold text-[30px] md:text-[40px] leading-none">INVEST</h1>
          <h2 className="font-bold text-[55px] md:text-[90px] leading-none">Invest Mate</h2>
          <p className="mt-5 text-[25px]">The future of crowd funding</p>
          <button className="bg-blue-500 max-w-fit px-4 py-3 rounded-xl text-white shadow-xl my-4" onClick={handleClickInvest}>
            <p>START INVESTING &gt;</p>
          </button>
        </div>

        <div className="hidden lg:flex absolute right-0 w-[50%] h-full max-h-screen justify-center items-center -z-10 pr-4 md:pr-6 ">
          <Image
            alt="Invest together"
            src="/illustrationInvest.png"
            width={800}
            height={800}
            className="w-full h-auto"
            priority
          />
        </div>
      </section>

      <section id="about" className="w-full justify-start min-h-screen items-center py-24 md:flex relative">
        <div className="absolute top-0 left-0 w-screen h-screen md:flex overflow-hidden">
          <svg
            width="794"
            height="700"
            viewBox="0 0 794 848"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -z-10 -right-[30rem] top-0">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M473.076 123.385C556.891 162.752 657.976 168.337 711.01 245.098C775.36 338.239 815.349 458 780.062 567.719C742.999 682.96 640.142 763.815 529.604 809.15C421.775 853.375 293.929 868.261 196.271 807.154C106.905 751.235 109.387 625.455 74.5608 524.419C43.1402 433.262 -17.4432 348.904 5.68559 254.233C31.7354 147.607 97.2356 34.8189 201.291 5.68823C301.057 -22.2417 380.176 79.751 473.076 123.385Z"
              fill="#D4F7FF"
            />
          </svg>
          <svg
            width="794"
            height="848"
            viewBox="0 0 794 848"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -z-10 -left-[30rem] bottom-0 h-[40rem] object-bottom object-cover">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M473.076 123.219C556.891 162.586 657.976 168.171 711.01 244.932C775.36 338.073 815.349 457.834 780.062 567.553C742.999 682.793 640.142 763.648 529.604 808.984C421.775 853.209 293.929 868.095 196.271 806.988C106.905 751.069 109.387 625.289 74.5608 524.253C43.1402 433.096 -17.4432 348.737 5.68559 254.067C31.7354 147.44 97.2356 34.6527 201.291 5.52197C301.057 -22.408 380.176 79.5847 473.076 123.219Z"
              fill="#D4F7FF"
            />
          </svg>
        </div>

        <div className="w-full md:w-fit px-5 md:px-20 text-center md:text-left">
          <div className="bg-slate-400 w-32 md:w-52 h-32 md:h-52 mx-auto md:mx-0" />
          <p className="font-bold mt-4">My. developer</p>
        </div>
        <div className="flex-grow text-center md:text-left px-5 md:px-10 mt-10 md:mt-0">
          <h2 className="text-blue-500 font-bold text-2xl md:text-4xl leading-none">About</h2>
          <p className="mt-5 text-[20px] leading-relaxed max-w-[1000px]">
            We are the leading destination for passionate individuals seeking support for their innovative projects. With a proven
            track record of success, we have empowered countless visionaries to transform their ideas into tangible
            accomplishments. Our platform provides a vibrant and inclusive community, connecting forward-thinking creators with a
            vast network of enthusiastic backers who share a common goal: to make a difference in the world.
          </p>
        </div>
      </section>
    </div>
  );
}
