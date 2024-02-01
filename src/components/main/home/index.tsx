import Header from "../../shared/header";
import LanguageSwitcher from "../../shared/languageSwitcher";
import ThemeSwitcher from "../../shared/themeSwitcher";
import AboutSection from "./about";
import Feature from "./feature";
import Intro from "./intro";
import PartnerSlider from "./partnerSlider";

const HomeContainer = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <LanguageSwitcher />
        <ThemeSwitcher />
        <Intro />
        <PartnerSlider />
        <AboutSection />
        <Feature />
      </div>
    </>
  );
};

export default HomeContainer;
