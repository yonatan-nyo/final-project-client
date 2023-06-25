import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col px-4 max-w-[1480px] mx-auto">
      <section id="home" className="w-full flex justify-between min-h-screen items-center py-24">
        <div className="h-full flex flex-col justify-center">
          <h1>INVEST</h1>
          <h2>Invest Mate</h2>
          <p>The future of crowd funding</p>
          <button>
            <p>START INVESTING &gt;</p>
          </button>
        </div>
        <div className="hidden md:flex  md:w-[33rem] lg:w-[40rem] h-full max-h-screen justify-center items-center">
          <Image
            alt="Invest together"
            src="/illustrationInvest.png"
            width={400}
            height={400}
            className="w-full h-auto"
            priority
          />
        </div>
      </section>
      <div id="about" className="w-full flex justify-between min-h-screen items-center py-24">
        <p>About</p>
      </div>
    </div>
  );
}
