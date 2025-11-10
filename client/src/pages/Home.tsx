import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StepsSection from "@/components/StepsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FormEmbedSection from "@/components/FormEmbedSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [language, setLanguage] = useState<"en" | "es">("en");

  const scrollToForm = () => {
    const formSection = document.getElementById("enrollment-form");
    formSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Header language={language} onLanguageChange={setLanguage} />
      
      <HeroSection language={language} onGetStarted={scrollToForm} />
      <StepsSection language={language} />
      <TestimonialsSection language={language} />
      <FormEmbedSection language={language} />
      <Footer language={language} />
    </div>
  );
}
