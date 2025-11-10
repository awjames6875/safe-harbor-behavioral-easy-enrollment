import HeroSection from "../HeroSection";

export default function HeroSectionExample() {
  return (
    <HeroSection 
      language="en" 
      onGetStarted={() => console.log("Get started clicked")} 
    />
  );
}
