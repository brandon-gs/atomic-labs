// Components
import Welcome from "./Welcome";
import MoreInfo from "./MoreInfo";
// Styles
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <main className={styles.dashboard}>
      <div className={styles.dashboard__first__section}>
        <div className="background-main" />
        <img
          className={styles.dashboard__image}
          src="/assets/img/dashboard.png"
          alt="personaje de atomic labs"
        />
        <Welcome />
      </div>
      <MoreInfo />
    </main>
  );
}
