import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/ui/Loader";
import HeroSection from "@/components/home/HeroSection";
import PrintingServices from "@/components/home/PrintingServices";
import Brand from "@/components/home/Brand";
import Use from "@/components/home/Use";
import Category from "@/components/home/Category";

export default function Home() {
  return (
    <main className="relative bg-background">
      <Loader />
      <Navbar />
      <HeroSection/>
      <PrintingServices />
      {/* <Category/> */}
      <Brand/>
      <Use />
      <Footer />
    </main>
  );
}
