import HeroSection from "@/components/HeroSection";
import BlogSection from "@/components/BlogSection";
import NewsletterSection from "@/components/NewsletterSection";
import SwapsGrid from "@/components/SwapsGrid";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen dynamic-bg particle-bg relative overflow-hidden">
        {/* Moving animated shapes */}
        <div className="moving-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        
        {/* Dynamic floating elements with different animations */}
        <div className="absolute inset-0 opacity-20 z-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-xl wave-animation"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-lg bounce-animation"></div>
          <div className="absolute top-60 left-1/3 w-40 h-40 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-2xl floating-animation"></div>
          <div className="absolute bottom-40 right-10 w-36 h-36 bg-gradient-to-r from-green-400 to-teal-400 rounded-full blur-xl wave-animation" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-20 w-28 h-28 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-lg rotate-animation"></div>
          <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-gradient-to-r from-pink-400 to-red-400 rounded-full blur-md bounce-animation" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Content with enhanced fade-in animations */}
        <div className="relative z-20">
          <div id="home" className="fade-in-up">
            <HeroSection />
          </div>
          <div id="search" className="fade-in-up" style={{ animationDelay: '0.3s' }}>
            <SwapsGrid />
          </div>
          <div id="learn" className="fade-in-up" style={{ animationDelay: '0.6s' }}>
            <BlogSection />
          </div>
          <div className="fade-in-up" style={{ animationDelay: '0.9s' }}>
            <FAQSection />
          </div>
          <div className="fade-in-up" style={{ animationDelay: '1.2s' }}>
            <NewsletterSection />
          </div>
          <div className="fade-in-up" style={{ animationDelay: '1.5s' }}>
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
};

export default Index;
