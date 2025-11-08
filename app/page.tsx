import Image from "next/image";
import ComparisonTable from "./components/ComparisonTable";
import FAQSection from "./components/Faq";
import FinancingBanner from "./components/FinancingBanner";
import HomeHero from "./components/Home";
import HowItWorks from "./components/HowItWorks";
import MoneyBackGuarantee from "./components/MoneyBackGuarantee";
import ScienceSection from "./components/ScienceSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import WhyGoNanoWorks from "./components/WhyGoNanoWorks";
import WhyWeDoSection from "./components/WhyWeDoSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center  font-sans ">
      <HomeHero/>
      <WhyGoNanoWorks/>
      <HowItWorks/>
      <FinancingBanner/>
      <ServicesSection/>
      <ComparisonTable/>
      <ScienceSection/>
      <TestimonialsSection/>
      <FinancingBanner/>
      <MoneyBackGuarantee/>
      <WhyWeDoSection/>
      <FinancingBanner/>
      <FAQSection/>
    </div>
  );
}
