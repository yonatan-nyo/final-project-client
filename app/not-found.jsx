import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen max-w-[1450px] mx-auto ot-24">
      <div className="bg-white">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-3xl text-blue-600 lg:text-6xl">404</h1>

          <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
            <span className="text-red-500">Oops!</span> Page not Found
          </h6>

          <p className="mb-4 text-center text-gray-500 md:text-lg">The page you&apos;re looking for doesn&apos;t exist.</p>

          <Link href="/" className="px-5 py-2 rounded-md text-blue-100 bg-blue-600 hover:bg-blue-700">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
