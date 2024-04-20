import { ReactNode } from "react";
import { useParams } from "react-router-dom";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import Newsletter from "@/components/main/newsletter";
import LanguageSwitcher from "@/components/shared/languageSwitcher";
import ThemeSwitcher from "@/components/shared/themeSwitcher";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const { path } = useParams<{ path: string }>();
  const isHomePage = path === "";

  return (
    <>
      <Header />
      <LanguageSwitcher />
      <ThemeSwitcher />

      {isHomePage ? null : <></>}

      <main>{children}</main>
      <Newsletter />
      <Footer />
    </>
  );
};

export default MainLayout;
