import Header from "../../shared/header";
import LanguageSwitcher from "../../shared/languageSwitcher";
import Intro from "./intro";

const HomeContainer = () => {
  return (
    <>
      <Header />
      <Intro />
      <LanguageSwitcher />
    </>
  );
};

export default HomeContainer;
