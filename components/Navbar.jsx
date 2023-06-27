"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const router = useRouter();

  const handleMobileNavigate = (endpoint) => {
    setMobileNav(false);
    router.push(endpoint);
  };

  return (
    <nav className="fixed top-0 left-0 w-screen shadow-md bg-white/95 z-50">
      <div className="max-w-[1480px] mx-auto flex justify-between h-20 items-center px-8">
        <Image alt="Igoth" src="/logo.png" width={100} height={100} className="w-12 h-16" priority />
        <div className="hidden sm:flex sm:gap-10 md:gap-20">
          <Link href="/#home" scroll={false}>
            <p className="tracking-widest">HOME</p>
          </Link>
          <Link href="/invest" scroll={false}>
            <p className="tracking-widest">INVEST</p>
          </Link>
          <Link href="/#about" scroll={false}>
            <p className="tracking-widest">ABOUT</p>
          </Link>
        </div>
        <div className="hidden sm:flex">
          <p>Profile</p>
        </div>
        <div
          className="sm:hidden"
          onClick={() => {
            setMobileNav(true);
          }}>
          <Image alt="menu" src="/menu.svg" width={16} height={16} className="w-12 h-16" priority />
        </div>
      </div>
      <div
        className={
          mobileNav
            ? "fixed w-screen h-screen top-0 left-0 block sm:hidden z-[100] ease-in-out duration-300"
            : "fixed w-screen h-screen top-0 left-[-100vw] block sm:hidden z-[100] ease-in-out duration-300"
        }>
        <div
          className="w-screen h-screen bg-black/40 z-[100] delay-100"
          onClick={() => {
            setMobileNav(false);
          }}
        />
        <div className="fixed h-screen top-0 w-80 bg-white z-[101] p-4 flex flex-col items-center">
          <div className="max-w-fit flex mx-auto">
            <Image alt="Igoth" src="/logo.png" width={100} height={100} className="w-24 h-32" priority />
          </div>
          <h2 className="font-bold text-3xl">Invest Mate</h2>
          <div className="flex flex-col items-start w-full my-20 gap-y-4">
            <Link
              href="/#home"
              scroll={false}
              onClick={(e) => {
                e.preventDefault();
                handleMobileNavigate("/#home");
              }}>
              <p className="tracking-widest">HOME</p>
            </Link>
            <Link
              href="/invest"
              scroll={false}
              onClick={(e) => {
                e.preventDefault();
                handleMobileNavigate("/invest");
              }}>
              <p className="tracking-widest">INVEST</p>
            </Link>
            <Link
              href="/#about"
              scroll={false}
              onClick={(e) => {
                e.preventDefault();
                handleMobileNavigate("/#about");
              }}>
              <p className="tracking-widest">ABOUT</p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
