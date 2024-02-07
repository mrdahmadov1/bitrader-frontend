import { Link } from "react-router-dom";
import { memberList } from "../../../../constants/main/home/team";
import styles from "./assets/css/styles.module.css";
import MemberItem from "./memberItem";
import { useTranslation } from "react-i18next";

const TeamSection = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className={styles.team}>
        <div className="container">
          <header className={styles.header}>
            <h2 className={styles.title}>
              {t("home.team.title")}
              <span>{t("home.team.titleSpan")}</span>
            </h2>
            <p className={styles.description}>{t("home.team.description")}</p>
          </header>
          <ul className={styles.memberList}>
            {memberList.map((member, index) => (
              <MemberItem key={index} member={member} />
            ))}
          </ul>
          <div className="text-center">
            <Link to="about/team" className={styles.btnMore}>
              {t("home.team.btnMore")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamSection;
