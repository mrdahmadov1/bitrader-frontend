import { Link } from "react-router-dom";
import styles from "./assets/css/styles.module.css";
import { MemberItemProps } from "../../../../../models/IMemberItemProps";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/configureStore";
import CommonAnimation from "../../../../common/commonAnimation";
import { useTranslation } from "react-i18next";

const MemberItem: React.FC<MemberItemProps> = ({ member }) => {
  const { t } = useTranslation();

  const currentTheme = useSelector(
    (state: RootState) => state.theme.currentTheme
  );

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <>
      <li className="col-12 col-sm-6 col-lg-3">
        <CommonAnimation variants={variants} className={styles.memberItem}>
          <div className={styles.thumb}>
            <img
              src={currentTheme === "dark" ? member.imgSrcDark : member.imgSrc}
              alt="thumb image"
            />
          </div>
          <Link to="about/team" className={styles.content}>
            <h6 className={styles.title}>
              {t(`home.team.memberList.${member.name}.name`)}
            </h6>
            <p className={styles.description}>
              {t(`home.team.memberList.${member.name}.branch`)}
            </p>
          </Link>
        </CommonAnimation>
      </li>
    </>
  );
};

export default MemberItem;
