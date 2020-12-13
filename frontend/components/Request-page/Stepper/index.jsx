// Hooks
import { useStep } from "hooks";
// Styles
import styles from "./Stepper.module.css";

export default function Stepper() {
  const { step } = useStep();
  const currentProgress = [150];
  const widthProgress = currentProgress[step - 1];

  return (
    <section className={styles.stepper}>
      <div className={styles.steps}>
        <img
          src="/assets/img/number_1_fill.png"
          alt="Numero 1"
          className={styles.steps__image}
        />
        <img
          src="/assets/img/number_2_fill.png"
          alt="Numero 2"
          className={styles.steps__image}
        />
        <img
          src="/assets/img/number_3_fill.png"
          alt="Numero 3"
          className={styles.steps__image}
        />
        <img
          src="/assets/img/number_4_fill.png"
          alt="Numero 4"
          className={styles.steps__image}
        />
      </div>
      <div className={styles.stepper__progress}>
        <div
          className={styles.stepper__progress__current}
          style={{ width: widthProgress }}
        ></div>
      </div>
    </section>
  );
}
