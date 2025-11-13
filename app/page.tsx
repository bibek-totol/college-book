"use client";
import { motion } from "framer-motion";
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

        
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1.10 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.1 }}
        >
          <ResearchSection />
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1.10 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.1 }}
        >
          <ReviewsSection />
        </motion.div>
      </main>
    </div>
  );
};

export default Home;
