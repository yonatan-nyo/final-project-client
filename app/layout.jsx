import Navbar from "@/components/Navbar";
import { Raleway } from "next/font/google";
import "./globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "./Stripe.css";
import "react-toastify/dist/ReactToastify.css";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Invest Mate",
  description: "Join Us and Invest Together!",
};

export default function RootLayout({ children }) {
  return (
    <html
      className="scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
      lang="en"
    >
      <body className={raleway.className} style={{ overflowX: "hidden" }}>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
