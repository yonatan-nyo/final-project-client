import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-screen h-20 shadow-md bg-white/95 z-50">
      <div className="max-w-[1480px] mx-auto flex justify-between h-20 items-center px-8">
        <Image alt="Igoth" src="/logo.png" width={100} height={100} className="w-12 h-16" priority />
        <div className="hidden sm:flex sm:gap-10 md:gap-20">
          <Link href="/#home" scroll={false}>
            <p className="tracking-widest">HOME</p>
          </Link>
          <Link href="/invest" scroll={false}>
            <p className="tracking-widest">INVEST</p>
          </Link>
          <Link href="/#desktop-about" scroll={false}>
            <p className="tracking-widest">ABOUT</p>
          </Link>
        </div>
        <div className="hidden sm:flex">
          <p>Profile</p>
        </div>
        <Image alt="Igoth" src="/menu.svg" width={16} height={16} className="w-12 h-16 sm:hidden" priority />
      </div>
    </nav>
  );
};

export default Navbar;
