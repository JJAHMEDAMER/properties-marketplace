import React from "react";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import HowItWorksSection from "./components/HowItWorks";
import TestimonialsSection from "./components/TestimonialsSection";

export default function LandingPage() {
  return (
    <div>
      <HeroSection />
      <div id="features">
        <FeaturesSection />
      </div>
      <HowItWorksSection />
      <div id="testimonials">
        <TestimonialsSection />
      </div>
    </div>
  );
}
