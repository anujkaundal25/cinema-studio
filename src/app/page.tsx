import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/ui/Loader";
import HeroSection from "@/components/home/HeroSection";
import PrintServices from "@/components/home/PrintServices";
import PrintCaseStudy from "@/components/home/PrintCaseStudy";
import Category from "@/components/home/Category";
export default function Home() {
  return (
    <main className="relative">
      {/* <Loader /> */}
      <Navbar />
      <HeroSection/>
      <PrintServices/>
      <PrintCaseStudy/>
      <Category/>
      <Footer />
    </main>
  );
}
