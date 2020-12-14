// Components
import Welcome from "./Welcome";
import MoreInfo from "./MoreInfo";
// Styles
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <>
      <main className={styles.dashboard}>
        <div className="background-wrapper">
          <div
            className="background-main"
            style={{
              backgroundImage: `url(${process.env.ASSET_PREFIX}/assets/img/background_1.png)`,
            }}
          />
        </div>
        <div className={styles.dashboard__first__section}>
          <img
            className={styles.dashboard__image}
            src={`${process.env.ASSET_PREFIX}/assets/img/dashboard.png`}
            alt="personaje de atomic labs"
          />
          <Welcome />
        </div>
        <MoreInfo />
      </main>
    </>
  );
}
