
import HeroSearch from "@/components/HeroSearch";
import CollegesSection from "@/components/CollegesSection";
import ImageGallery from "@/components/ImageGallery";
import ResearchSection from "@/components/ResearchSection";
import ReviewsSection from "@/components/ReviewsSection";

const Home = () => {
  return (
    <div className="min-h-screen">
     
      <main>
        <HeroSearch />
        <CollegesSection />
        <ImageGallery />
        <ResearchSection />
        <ReviewsSection />
      </main>
      
    </div>
  );
};

export default Home;
