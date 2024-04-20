import IntroSection from "@/components/main/intro";
import AboutSection from "@/components/main/about";
import FeatureSection from "@/components/main/feature";
import ServiceSection from "@/components/main/service";
import PartnerSlider from "@/components/main/partnerSlider";
import RoadmapSection from "@/components/main/roadmap";
import PricingSection from "@/components/main/pricing";
import TeamSection from "@/components/main/team";
import TestimonialSection from "@/components/main/testimonial";
import BlogSection from "@/components/main/blogs";
import FAQSection from "@/components/main/faq";

const HomeContainer = () => {
  return (
    <>
      <div className="wrapper">
        <IntroSection />
        <PartnerSlider />
        <AboutSection />
        <FeatureSection />
        <ServiceSection />
        <RoadmapSection />
        <PricingSection />
        <TeamSection />
        <BlogSection />
        <TestimonialSection />
        <FAQSection />
      </div>
    </>
  );
};

export default HomeContainer;
