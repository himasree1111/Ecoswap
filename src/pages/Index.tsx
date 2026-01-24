import HeroSection from "@/components/HeroSection";
import NewsletterSection from "@/components/NewsletterSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import BrowseItems from "@/components/SwapsGrid";

const Index = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <div id="home">
            <HeroSection />
          </div>
          <div id="browse">
            <BrowseItems />
          </div>
          <div>
            <FAQSection />
          </div>
          <div>
            <NewsletterSection />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
};

export default Index;
