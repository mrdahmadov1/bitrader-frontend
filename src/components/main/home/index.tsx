import Header from "../../shared/header";
import LanguageSwitcher from "../../shared/languageSwitcher";
import ThemeSwitcher from "../../shared/themeSwitcher";
import IntroSection from "./intro";
import AboutSection from "./about";
import FeatureSection from "./feature";
import ServiceSection from "./service";
import PartnerSlider from "./partnerSlider";

const HomeContainer = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <LanguageSwitcher />
        <ThemeSwitcher />
        <IntroSection />
        <PartnerSlider />
        <AboutSection />
        <FeatureSection />
        <ServiceSection />
      </div>
    </>
  );
};

export default HomeContainer;
