import Navbar from "@/components/Navbar";
import HeroSearch from "@/components/HeroSearch";
import CollegesSection from "@/components/CollegesSection";
import ImageGallery from "@/components/ImageGallery";
import ResearchSection from "@/components/ResearchSection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSearch />
        <CollegesSection />
        <ImageGallery />
        <ResearchSection />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
