import LanguageToggle from "@/components/LanguageToggle";
import logoImage from "@assets/circlelogo_1762768333281.png";

interface HeaderProps {
  language: "en" | "es";
  onLanguageChange: (lang: "en" | "es") => void;
}

export default function Header({ language, onLanguageChange }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 relative">
        <div className="flex items-center justify-center">
          <img 
            src={logoImage} 
            alt="Safe Harbor Behavioral Health" 
            className="h-20 w-auto"
            data-testid="img-logo"
          />
        </div>
        
        <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
          <LanguageToggle language={language} onLanguageChange={onLanguageChange} />
        </div>
      </div>
    </header>
  );
}
