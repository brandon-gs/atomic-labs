// Hooks
import { useStep } from "hooks";
// Styles
import styles from "./Stepper.module.css";

export default function Stepper() {
  const { step } = useStep();
  const currentProgress = [155, 320, 490, 655];
  const widthProgress = currentProgress[step - 1];
  const path = `${process.env.ASSET_PREFIX}/assets/img/`;

  const getImageName = (stepToGet) => {
    const isFirstStep = stepToGet === 1 && step === 1;
    const image = isFirstStep
      ? "number_1_fill.png"
      : step > stepToGet
      ? "checkmark_white.png"
      : step < stepToGet
      ? `number_${stepToGet}_tiny_white.png`
      : `number_${stepToGet}_tiny.png`;
    return image;
  };

  return (
    <section className={styles.stepper}>
      <div className={styles.steps}>
        <img
          src={`${path}${getImageName(1)}`}
          alt="Numero 1"
          className={styles.steps__image}
        />
        <img
          src={`${path}${getImageName(2)}`}
          alt="Numero 2"
          className={styles.steps__image}
        />
        <img
          src={`${path}${getImageName(3)}`}
          alt="Numero 3"
          className={styles.steps__image}
        />
        <img
          src={`${path}${getImageName(4)}`}
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
