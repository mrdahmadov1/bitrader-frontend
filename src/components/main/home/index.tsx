import Header from "../../shared/header";
import LanguageSwitcher from "../../shared/languageSwitcher";
import ThemeSwitcher from "../../shared/themeSwitcher";
import Intro from "./intro";

const HomeContainer = () => {
  return (
    <>
      <Header />
      <Intro />
      <LanguageSwitcher />
      <ThemeSwitcher />
    </>
  );
};

export default HomeContainer;
