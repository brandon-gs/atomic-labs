// Components
import { ButtonJoin } from "components";
// Styles
import clsx from "clsx";
import styles from "./Welcome.module.css";

export default function Welcome() {
  // Merged classes
  const textOrange = clsx(styles.welcome__message, "text__orange");
  const textWhite = clsx(styles.welcome__message, "text__white");

  return (
    <section className={styles.welcome}>
      <div>
        <h2 className={textWhite}>Desarrolla todo</h2>
        <h2 className={textOrange}>tu POTENCIAL</h2>
        <h2 className={textWhite}>dentro del equipo</h2>
        <h2 className={clsx("font__1", textWhite)}>
          <span className={textOrange}>ATOMIC</span>
          LABS
        </h2>
      </div>
      <div className={styles.welcome__link__container}>
        <ButtonJoin />
      </div>
    </section>
  );
}
