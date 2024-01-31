import Header from "../../shared/header";
import LanguageSwitcher from "../../shared/languageSwitcher";
import ThemeSwitcher from "../../shared/themeSwitcher";
import AboutSection from "./about";
import Intro from "./intro";
import PartnerSlider from "./partnerSlider";

const HomeContainer = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Intro />
        <LanguageSwitcher />
        <ThemeSwitcher />
        <PartnerSlider />
        <AboutSection />
      </div>
    </>
  );
};

export default HomeContainer;
