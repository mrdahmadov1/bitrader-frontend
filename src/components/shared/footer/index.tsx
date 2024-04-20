import React from "react";
import { Link } from "react-router-dom";
import styles from "./assets/css/styles.module.css";
import logo from "@/assets/images/logo-light.png";
import applestoreicon from "./assets/images/apple.png";
import playstoreicon from "./assets/images/play.png";
import { useTranslation } from "react-i18next";
import { linkSections, socialLinks } from "@/constants/shared/footer";
import { LinkItem } from "@/models/IFooterNav";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const renderLinks = (links: LinkItem[], title: string) =>
    links.map((link, index) => (
      <li key={index}>
        <Link to={link.to}>{t(`shared.footer.${title}.${link.text}`)}</Link>
      </li>
    ));

  return (
    <footer className={styles.footer}>
      <span className={styles.shape1}>
        <span></span>
      </span>
      <div className="container">
        <div className={`row p-0 gy-5 gx-4 ${styles.content}`}>
          <header className={`col-md-6 ${styles.header}`}>
            <Link to={"/"} className={styles.logo}>
              <img src={logo} alt="logo" />
            </Link>
            <p className={styles.description}>
              {t(`shared.footer.description`)}
            </p>
            <div className={styles.apps}>
              <Link
                to={"https://www.apple.com/app-store"}
                className={styles.appApple}
              >
                <div className={styles.thumb}>
                  <img src={applestoreicon} alt="apple icon" />
                </div>
                <div className={styles.appContent}>
                  <span>download on the</span>
                  <p>app store</p>
                </div>
              </Link>
              <Link
                to={"https://play.google.com"}
                className={styles.appPlaystore}
              >
                <div className={styles.thumb}>
                  <img src={playstoreicon} alt="playstore icon" />
                </div>
                <div className={styles.appContent}>
                  <span>get it on</span>
                  <p>google play</p>
                </div>
              </Link>
            </div>
          </header>
          {linkSections.map((section, index) => (
            <ul key={index} className={`col-md-2 col-sm-4 ${styles.links}`}>
              <li>
                <h6>{t(`shared.footer.${section.title}.title`)}</h6>
              </li>
              {renderLinks(section.links, section.title)}
            </ul>
          ))}
        </div>
        <ul className={styles.socialLinks}>
          {socialLinks.map((link, index) => (
            <li key={index} className={styles.socialLink}>
              <Link to={link.url}>
                <i className={`bi ${link.icon}`} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
