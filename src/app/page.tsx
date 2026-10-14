import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/ui/Loader";
import HeroSection from "@/components/home/HeroSection";
import PrintServices from "@/components/home/PrintServices";
export default function Home() {
  return (
    <main className="relative bg-background">
      {/* <Loader /> */}
      <Navbar />
      <HeroSection/>
      <PrintServices/>
      <Footer />
    </main>
  );
}
